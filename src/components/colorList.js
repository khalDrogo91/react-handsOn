import React from "react";
import Color from "./color";

export default function ColorList({
  colors,
  OnRemoveColor = f => f,
  onRatingChange = f => f
}) {
  return (
    <div>
      {colors.length === 0 ? (
        <p>No colors present</p>
      ) : (
        colors.map(color => (
          <Color
            key={color.id}
            {...color}
            onRemove={OnRemoveColor}
            onRate={onRatingChange}
          />
        ))
      )}
    </div>
  );
}
