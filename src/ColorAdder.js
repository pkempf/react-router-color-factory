import React from "react";
import { Link } from "react-router-dom";

import "./ColorAdder.css";

const ColorAdder = () => {
  return (
    <div className="ColorAdder">
      <h3>Welcome to the color factory.</h3>
      <Link to="/colors/new">
        <h2>Add a color</h2>
      </Link>
    </div>
  );
};

export default ColorAdder;
