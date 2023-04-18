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


obj = [{
  
  "subject":"os",
  "semester":"1",
  "program":"btech",
  "link":"https://www.google.com",
  "year":"2019",
  "type":"mst"
},
{
  
  "subject":"stats",
  "semester":"1",
  "program":"btech",
  "link":"https://www.google.com",
  "year":"2019",
  "type":"mst"
}]