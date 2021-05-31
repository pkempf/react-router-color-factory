import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./ColorAdderForm.css";

const ColorAdderForm = ({ addColor }) => {
  const INITIAL_STATE = {
    name: "",
    hex: "#000000",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const getInput = (evt) => {
    evt.preventDefault();
    addColor(formData);
    setFormData(INITIAL_STATE);
  };

  return (
    <div className="ColorAdderForm">
      <h2>Adding a Color</h2>
      <form onSubmit={getInput}>
        <div>
          <label htmlFor="name">Color Name: </label>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={formData.Name}
            id="name"
          />
        </div>
        <div>
          <label htmlFor="hex">Color Value: </label>
          <input
            onChange={handleChange}
            type="color"
            name="hex"
            value={formData.hex}
            id="hex"
          />
        </div>
        <button>Add Color</button>
      </form>
      <p>
        <Link to="/colors">Home</Link>
      </p>
      <hr />
    </div>
  );
};

export default ColorAdderForm;
