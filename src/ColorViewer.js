import React from "react";
import { useParams, Link } from "react-router-dom";

import "./ColorViewer.css";

const ColorViewer = ({ colors }) => {
  const colorName = useParams().color;
  try {
    const myColor = colors.filter((color) => color.name === colorName)[0];
    return (
      <div className="ColorViewer">
        <h1 style={{ color: myColor.hex }}>{myColor.name}</h1>
        <div
          className="ColorViewer-color"
          style={{ backgroundColor: myColor.hex }}
        ></div>
        <p>
          <Link to="/colors">Home</Link>
        </p>
      </div>
    );
  } catch {
    return (
      <div className="ColorViewer">
        <p>Couldn't find that color.</p>
        <Link to="/colors">Home</Link>
      </div>
    );
  }
};

export default ColorViewer;
