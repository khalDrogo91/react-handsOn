import React, { useState } from "react";
import Star from "./star";

const createArray = length => [...Array(length)];

export default function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);

  return (
    <>
      {createArray(totalStars).map((element, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
           onselect={() => setSelectedStars(i+1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}
