import cloudinary
import cloudinary.api
import csv
import argparse
import os
import re

# Configure your Cloudinary credentials
cloudinary.config(
    cloud_name="dkbw0dpyp",
    api_key="638198938153892",
    api_secret="6AHavWSKuXs7RkFjGY7D1WFyqWM"
)

def list_photos_in_folder(folder_name, reverse=False):
    photos = []
    photos_small = []
    descriptions = []
    next_cursor = None
    
    while True:
        response = cloudinary.api.resources_by_asset_folder(
            folder_name, 
            max_results=500,
            next_cursor=next_cursor
        )

        for resource in response.get('resources', []):
            url_large = resource['secure_url']
            url_small = url_large.replace("upload/", "upload/c_scale,w_768/")
            photos.append(url_large)
            photos_small.append(url_small)

            # Try to fetch description from metadata (Cloudinary "context")
            context = resource.get('context', {})
            description = context.get('custom', {}).get('alt') or ""  # Default to empty string if not found
            descriptions.append(description)

        next_cursor = response.get('next_cursor')
        if not next_cursor:
            break

    if reverse:
        photos.reverse()
        photos_small.reverse()
        descriptions.reverse()

    return photos, photos_small, descriptions

def save_urls_to_csv(photo_urls, output_file):
    """Save a list of photo URLs to a CSV file."""
    with open(output_file, 'w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(["URL"])
        for url in photo_urls:
            writer.writerow([url])

import os

def create_jsx_file(urls_small, urls_large, descriptions, path, alt, album_title, album_date, cover_idx):

    jsx_content = f'''import React from "react";
import ImageGrid from "../../ImageGrid";

const App = () => {{
    const coverImage = {{
    src: "{urls_large[cover_idx]}",
    alt: "{album_title}"
    }}
    const albumTitle = "{album_title}"
    const albumDate = "{album_date}"
    const images = ['''
    
    # Dynamically add the image objects based on the URLs list
    for i in range(len(urls_small)):
        if descriptions[i] != "":
            description = descriptions[i].replace('"', '\\"')  # Escape quotes for JSX safety
            jsx_content += f'''
            {{
                imgSrcSmll: "{urls_small[i]}",
                imgSrcLrg: "{urls_large[i]}",
                alt: "{alt}",
                description: "{description}"
            }},'''
        else:
            jsx_content += f'''
            {{
                imgSrcSmll: "{urls_small[i]}",
                imgSrcLrg: "{urls_large[i]}",
                alt: "{alt}"
            }},'''

    # Closing the JSX content
    jsx_content += '''
    ];
  
    return (
        <ImageGrid items={images} coverImage = {coverImage} albumTitle={albumTitle} albumDate={albumDate}/>
    );
  };
  
  export default App;
'''
    # if the file already exists, delete it
    if os.path.exists(path):
        os.remove(path)

    # Write the content to the file
    with open(path, 'w') as file:
        file.write(jsx_content)
    
    print(f"JSX file created successfully at {path}")



def prepend_album(file_path, new_album):
    """
    Prepends an album to the `albumsData` array in the specified file.

    :param file_path: Path to the file containing the `albumsData` array.
    :param new_album: A dictionary representing the new album with keys: `link`, `imgSrc`, `alt`, `label`.
    """
    try:
        # Read the file content
        with open(file_path, "r", encoding="utf-8") as file:
            file_content = file.read()
        
        # Match the albumsData array
        albums_data_match = re.search(r"const albumsData = \[\s*([\s\S]*?)\];", file_content)
        if not albums_data_match:
            print("Error: `albumsData` array not found in the file.")
            return
        
        albums_array_content = albums_data_match.group(1)

        # Format the new album as a string
        new_album_string = f"""
  {{
    link: "{new_album['link']}",
    imgSrc: "{new_album['imgSrc']}",
    alt: "{new_album['alt']}",
    label: "{new_album['label']}",
  }},
"""

        # Prepend the new album to the existing array
        updated_albums_array_content = new_album_string + albums_array_content

        # Replace the original `albumsData` array with the updated one
        updated_file_content = re.sub(
            r"const albumsData = \[\s*([\s\S]*?)\];",
            f"const albumsData = [\n{updated_albums_array_content}];",
            file_content
        )

        # Write the updated content back to the file
        with open(file_path, "w", encoding="utf-8") as file:
            file.write(updated_file_content)

        print("Added album cover to album page.")

    except Exception as e:
        print(f"An error occurred: {e}")

def get_innermost_folder(path):
    # Normalize the path and split into components
    path_parts = os.path.normpath(path).split(os.sep)
    # Return the second-to-last component (innermost folder)
    return path_parts[-2] if len(path_parts) > 1 else None

def get_album_page_path(album):
    first = "client/src/components/AlbumPages/"
    second = ""
    if album == 'commercial':
        second= "CommercialPage.jsx"
    elif album == 'events':
        second = "EventsPage.jsx"
    elif album == 'personal':
        second = "PersonalPage.jsx"
    elif album == 'sports':
        second = "SportsPage.jsx"
    else:
        print("Incorrect album name.")
        exit
    return first + second

def append_export_line(filename, export_name, albumGroup):
    # Format the line to append
    line_to_append = f'export {{ default as {export_name} }} from "./ImagePages/{albumGroup}/{filename}.jsx";\n'
    file_path = "client/src/components/index.js"
    try:
        # Open the file in append mode
        with open(file_path, 'a', encoding='utf-8') as file:
            # Append the line to the file
            file.write(line_to_append)
        
        print("Line appended successfully.")
    
    except Exception as e:
        print(f"An error occurred: {e}")

def update_routes_and_imports(export_name, album_group):
    file_path = "client/src/index.js"
    try:
        # Read the contents of the file
        with open(file_path, 'r', encoding='utf-8') as file:
            lines = file.readlines()

        # Define the group (Events, Commercial, Sports, Personal)
        group_mapping = {
            "events": "Events",
            "commercial": "Commercial",
            "sports": "Sports",
            "personal": "Personal"
        }

        group = group_mapping.get(album_group.lower(), "Events")

        # Find the index where imports end
        import_end_index = None
        for i, line in enumerate(lines):
            if line.strip() == "} from \"./components\";":
                import_end_index = i
                break

        if import_end_index is None:
            print("Import section not found.")
            return

        # Create the new import line and route line
        import_line = f"  {export_name},\n"
        route_line = f"      <Route path=\"/{export_name}\" element={{<{export_name}/>}} />\n"

        # Insert the import statement and route into the appropriate sections
        lines.insert(import_end_index, import_line)  # Append import after the import section
        route_insert_index = None

        for i, line in enumerate(lines):
            if f"<Route path=\"/{group}\"" in line:
                route_insert_index = i + 1  # Insert the new route right after the group route
                break

        if route_insert_index is None:
            print(f"Route for {group} group not found.")
            return

        lines.insert(route_insert_index, route_line)  # Insert the route after the specified group route

        # Write the updated contents back to the file
        with open(file_path, 'w', encoding='utf-8') as file:
            file.writelines(lines)

        print(f"Successfully updated {export_name} in {group} group.")

    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    # Parse command line arguments
    parser = argparse.ArgumentParser(description="Fetch photo URLs from a Cloudinary folder")
    parser.add_argument("--folder_name", type=str, help="Cloudinary folder name")
    parser.add_argument("--output_file", type=str, help="Output JSX file")
    parser.add_argument("--reverse", action="store_true", help="Reverse the order of the URLs")
    parser.add_argument("--cover_index", type=int, default=0, help="Index of the album cover image." )
    parser.add_argument("--label", type=str, required=True, help="Title to appear on the album thumbnail.")
    parser.add_argument("--date", type=str, required=True, help="Date of the event.")
    args = parser.parse_args()

    folder_name = args.folder_name
    output_file = args.output_file
    cover_index_image = args.cover_index
    label = args.label
    alt = label.replace(" ", "_")
    date = args.date

    # get the path of the album page (where the thumbnail will appear)
    albumGroup = get_innermost_folder(output_file)
    albumPagePath = get_album_page_path(albumGroup)

    # Fetch photo URLs from the specified folder
    photo_urls_large, photo_urls_small, descriptions = list_photos_in_folder(folder_name=folder_name, reverse=args.reverse)
    
    # write the photo album to the .jsx file
    create_jsx_file(
        urls_small=photo_urls_small,
        urls_large=photo_urls_large,
        descriptions=descriptions,
        path=output_file,
        alt=alt,
        album_title=label,
        album_date=date,
        cover_idx=cover_index_image
    )
    filename_with_extension = os.path.basename(output_file)
    # Split the filename and extension

    filename = os.path.splitext(filename_with_extension)[0]
    export_name = filename.upper()

    # set the album thumbnail info
    new_album = {}
    new_album['link'] = "/"+export_name
    new_album['imgSrc'] = photo_urls_small[cover_index_image]
    new_album['alt'] = alt
    new_album['label'] = label

    # add album thumbnail to album page
    prepend_album(file_path=albumPagePath, new_album=new_album)

    # add the export line to src/components/index.js
    append_export_line(filename=filename, export_name=export_name, albumGroup=albumGroup)

    # add the route 
    update_routes_and_imports(export_name=export_name, album_group=albumGroup)

    print(f"Saved {len(photo_urls_small)} photo URLs to {output_file}")