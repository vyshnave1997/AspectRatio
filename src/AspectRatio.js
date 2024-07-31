// src/AspectRatio.js
import React from "react";
import "./AspectRatio.css";

const AspectRatio = ({ ratio, children }) => {
  // Calculate aspect ratio padding
  const [width, height] = ratio.split(":").map(Number);
  const aspectRatio = (height / width) * 100;

  return (
    <div
      className="aspect-ratio-container"
      style={{ paddingBottom: `${aspectRatio}%` }}
    >
      <div className="aspect-ratio-content">{children}</div>
    </div>
  );
};

export default AspectRatio;
