import cloudinary
import cloudinary.api
import csv
import argparse

# Configure your Cloudinary credentials
cloudinary.config(
    cloud_name="dkbw0dpyp",
    api_key="638198938153892",
    api_secret="6AHavWSKuXs7RkFjGY7D1WFyqWM"
)

def list_photos_in_folder(folder_name, reverse=False):
    """List all photo URLs in a specified Cloudinary folder."""
    photos = []
    photos_small = []
    next_cursor = None
    
    while True:
        response = cloudinary.api.resources_by_asset_folder(
            folder_name, 
            max_results=500,
            next_cursor=next_cursor)


        for resource in response.get('resources', []):
            photos.append(resource['secure_url'])
            print("secure_url", resource['secure_url'])
            photos_small.append(resource['secure_url'].replace("upload/", "upload/c_scale,w_768/"))

        next_cursor = response.get('next_cursor')
        print("next_cursor", next_cursor)   
        if not next_cursor:
            break
    if reverse:
        photos.reverse()
        photos_small.reverse()
    return photos, photos_small

def save_urls_to_csv(photo_urls, output_file):
    """Save a list of photo URLs to a CSV file."""
    with open(output_file, 'w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(["URL"])
        for url in photo_urls:
            writer.writerow([url])

import os

def create_jsx_file(urls_small, urls_large, path, alt):
    # Start of the JSX content
    jsx_content = '''import React from "react";
import ImageGrid from "../../ImageGrid";

const App = () => {
    const images = ['''
    
    # Dynamically add the image objects based on the URLs list
    for i in range(len(urls_small)):
        jsx_content += f'''
        {{
            imgSrcSmll: "{urls_small[i]}",
            imgSrcLrg: "{urls_large[i]}",
            alt: "{alt}",
        }},'''

    # Closing the JSX content
    jsx_content += '''
    ];
  
    return (
        <ImageGrid items={images} />
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

if __name__ == "__main__":
    # Parse command line arguments
    parser = argparse.ArgumentParser(description="Fetch photo URLs from a Cloudinary folder")
    parser.add_argument("--folder_name", type=str, help="Cloudinary folder name")
    parser.add_argument("--output_file", type=str, help="Output CSV or JSX file")
    # add an argument to specify if urls should be saved to csv or .jsx directly
    parser.add_argument("--save_to_jsx", action="store_true", help="Save URLs to a JSX file")
    parser.add_argument("--reverse", action="store_true", help="Reverse the order of the URLs")
    parser.add_argument("--alt", type=str, default="photo",help="Alt text for the images")

    args = parser.parse_args()

    folder_name = args.folder_name
    output_file = args.output_file

    # Fetch photo URLs from the specified folder
    photo_urls_large, photo_urls_small = list_photos_in_folder(folder_name=folder_name, reverse=args.reverse)

    # Maybe save the URLs to a CSV file
    if args.save_to_jsx:
        create_jsx_file(urls_small=photo_urls_small, urls_large=photo_urls_large,path=output_file, alt=args.alt)
    else:
        save_urls_to_csv(photo_urls_large, output_file)

    print(f"Saved {len(photo_urls_small)} photo URLs to {output_file}")

