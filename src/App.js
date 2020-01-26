import React, { useState } from "react";
// import logo from "./logo.svg";
// import "./App.css";
import colorData from "./data/color-data.json";
import ColorList from "./components/colorList";

function App() {
  const [colors, setColors] = useState(colorData);
  return (
    <ColorList
      colors={colors}
      OnRemoveColor={id => {
        const newColors = colors.filter(color => color.id !== id);
        setColors(newColors);
      }}
      onRatingChange={(id, rating) => {
        const newRating = colors.map(color =>
          color.id === id ? { ...color, rating } : color
        );
        setColors(newRating);
      }}
    />
  );
}

export default App;
