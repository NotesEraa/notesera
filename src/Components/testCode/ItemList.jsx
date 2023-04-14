import React from 'react';

function ItemList({ items }) {
    items = [
        {
           "name":"hello"
        }
    ]
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </ul>
  );
}

export default ItemList;
