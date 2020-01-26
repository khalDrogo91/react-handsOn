import React from "react";
import { FaStar } from "react-icons/fa";

export default function Star({ selected = false, onselect = f => f }) {
  return (
    <FaStar color={selected ? "red" : "grey"} size="50px" onClick={onselect} />
  );
}
