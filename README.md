# Photography-Website-V2

## Add a new album 
1. Upload the photos to cloudinary. 
2. Run the script to fetch the urls and create the `ImagePage` jsx file. 
```bash
python utils/fetch_urls.py --folder_name "sports/demiLachine2024" --output_file "client/src/components/ImagePages/sports/DEMI24.jsx" --save_to_jsx --alt "demiLachine2024" --reverse
```
3. Add the album cover to the corresponding album page (if it's a sports album, then `AlbumPages/SportsPage.jsx`)
```js
  {
    link: "/DEMI24",
    imgSrc: "https://res.cloudinary.com/dkbw0dpyp/image/upload/c_scale,w_768/v1728657691/sports/demiLachine2024/biudyberdonphkfzygkx.jpg",
    alt: "demiLachine24",
    label: "Demi-Marathon Bonneville de Lachine 2024",
  },
```
4. Add the following line to `client/src/components/index.js`
```js
export { default as DEMI24 } from "./ImagePages/sports/DEMI24.jsx"
```
5. Add `DEMI24` to the imports in `client/src/index.js`.
6. Add the following line to the routes in `client/src/index.js`
```js
<Route path="/DEMI24" element={<DEMI24 />} />
```

