import React from "react";
import { Link } from "react-router-dom";

import "./ColorPicker.css";

const ColorPicker = ({ colors }) => {
  return (
    <div className="ColorPicker">
      <ul>
        {colors.map((color) => {
          return (
            <li key={`${color.name}-link`}>
              <Link to={`/colors/${color.name}`}>{color.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ColorPicker;
