// src/AspectRatioForm.js
import React, { useState } from "react";
import AspectRatio from "./AspectRatio";
import "./AspectRatioForm.css"; // Import the CSS file

const AspectRatioForm = () => {
  const [width, setWidth] = useState(16);
  const [height, setHeight] = useState(9);
  const [imageSrc, setImageSrc] = useState(
    "https://via.placeholder.com/800x450"
  );

  const handleWidthChange = (e) => setWidth(e.target.value);
  const handleHeightChange = (e) => setHeight(e.target.value);
  const handleImageSrcChange = (e) => setImageSrc(e.target.value);

  return (
    <div className="form-container">
      <h1>Aspect Ratio Creator</h1>
      <form>
        <label>
          Width:
          <input
            type="number"
            value={width}
            onChange={handleWidthChange}
            min="1"
          />
        </label>
        <label>
          Height:
          <input
            type="number"
            value={height}
            onChange={handleHeightChange}
            min="1"
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            value={imageSrc}
            onChange={handleImageSrcChange}
            placeholder="Enter image URL here"
          />
        </label>
      </form>

      <h2>Preview</h2>
      <AspectRatio ratio={`${width}:${height}`}>
        <img src={imageSrc} alt="Dynamic Aspect Ratio" />
      </AspectRatio>
    </div>
  );
};

export default AspectRatioForm;
