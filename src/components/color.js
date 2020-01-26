import React from "react";
import StarRating from "./starRating";

export default function Color({ title, color, rating }) {
  return (
    <section>
      <h1>{title}</h1>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating totalStars={rating} />
    </section>
  );
}
