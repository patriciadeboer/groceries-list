import React from "react";

const GroceryItem = ({ onClick, bought, text, quantity }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: bought ? "line-through" : "none"
    }}>
    {text}
  </li>
);

export default GroceryItem;
