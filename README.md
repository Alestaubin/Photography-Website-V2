# Project Overview

This project contains the code for my photography website, which can be found [here](https://alexstaubinphoto.com/). It implements a horizontal scroll effect (inspired by [this](https://github.com/darshandesai1095/horizontal-scroll-effect)) on the home page.

## Dependencies

- [Masonry](https://masonry.desandro.com) is used for creating the grid layout, enabling responsive, flexible, and organized image positioning.
- [react-modal-image](https://www.npmjs.com/package/react-modal-image) is used to display images in a modal when clicked, enhancing the user experience.
- [Bootstrap](https://getbootstrap.com) is used to enhance the UI design, providing a clean, responsive layout, typography, and various pre-built components for consistent styling across different devices.


## Add a new album 
1. Upload the photos to cloudinary. 
2. Run the script to fetch the urls and create the `ImagePage` jsx file. 
```bash
python utils/fetch_urls.py --folder_name "events/SSMU-GGG" --output_file "client/src/components/ImagePages/events/SSMU_GGG.jsx" --label "SSMU Great Gatsby Gala" --cover_index 1 --date "December 2024"
```
3. All updates to the `jsx` files will be made automatically and the album will be added.
