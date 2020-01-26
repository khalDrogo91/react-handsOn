import React, { useState } from "react";
// import logo from "./logo.svg";
// import "./App.css";
import colorData from "./data/color-data.json";
import ColorList from "./components/colorList";

function App() {
  const [colors] = useState(colorData);
  return <ColorList colors={colors} />;
}

export default App;
