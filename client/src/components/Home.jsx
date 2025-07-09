import React from 'react';
import { useState } from "react";
import "./App.css";
import UnsplashImages from "./ImageData/ImageData.js"
import Heading from "./Heading/Heading.js"
import Article from "./Article/Article.js"

const App = () => {
  
  const [scrollLeft, setScrollLeft] = useState(0);
  const handleScroll = (event) => {
    // event.preventDefault()
    const delta = event.deltaY
    const container = document.getElementById("container")
    container.scrollLeft -= delta
    setScrollLeft(container.scrollLeft)
  }
  
  const images = UnsplashImages.map((img, i) => {
    return (
      <Article
        scrollLeft={scrollLeft}
        key={i}
        src={img.src.replace("upload", `upload/c_scale,w_1024`)}
        title={img.title}
        description={img.description}
      />
    )
  })

  return (
    <div className="App" id="container"  onWheel={handleScroll} >
      <Heading scrollLeft={scrollLeft}/>
      <div className="main-content">
        {images}
      </div>
    </div>
  );
}

export default App;
