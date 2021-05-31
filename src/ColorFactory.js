import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import ColorAdderLink from "./ColorAdder";
import ColorAdderForm from "./ColorAdderForm";
import ColorViewer from "./ColorViewer";
import ColorPicker from "./ColorPicker";

import "./ColorFactory.css";

const ColorFactory = () => {
  const [colors, setColors] = useState([
    { name: "red", hex: "#ff0000" },
    { name: "green", hex: "#00ff00" },
    { name: "blue", hex: "#0000ff" },
  ]);

  const addColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  return (
    <Switch>
      <Route exact path="/colors/new">
        <ColorAdderForm addColor={addColor} />
        <p>Current colors:</p>
        <ColorPicker colors={colors} />
      </Route>
      <Route exact path="/colors/:color">
        <ColorViewer colors={colors} />
      </Route>
      <Route exact path="/colors">
        <ColorAdderLink />
        <p>Please pick a color.</p>
        <ColorPicker colors={colors} />
      </Route>
      <Redirect to="/colors" />
    </Switch>
  );
};

export default ColorFactory;
