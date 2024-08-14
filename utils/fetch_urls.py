import cloudinary
import cloudinary.api
import csv

# Configure your Cloudinary credentials
cloudinary.config(
    cloud_name="your_cloud_name",
    api_key="your_api_key",
    api_secret="your_api_secret"
)

def list_photos_in_folder(folder_name):
    """List all photo URLs in a specified Cloudinary folder."""
    photos = []
    next_cursor = None
    
    while True:
        response = cloudinary.api.resources(
            type="upload",
            prefix=folder_name,
            max_results=500,  # Adjust max_results as needed
            next_cursor=next_cursor
        )

        for resource in response.get('resources', []):
            photos.append(resource['secure_url'])

        next_cursor = response.get('next_cursor')

        if not next_cursor:
            break
    
    return photos

def save_urls_to_csv(photo_urls, output_file):
    """Save a list of photo URLs to a CSV file."""
    with open(output_file, 'w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(["URL"])
        for url in photo_urls:
            writer.writerow([url])

if __name__ == "__main__":
    folder_name = "your_folder_name"  # Replace with your folder name
    output_file = "photo_urls.csv"

    # Fetch photo URLs from the specified folder
    photo_urls = list_photos_in_folder(folder_name)

    # Save the URLs to a CSV file
    save_urls_to_csv(photo_urls, output_file)

    print(f"Saved {len(photo_urls)} photo URLs to {output_file}")