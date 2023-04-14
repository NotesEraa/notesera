import React from 'react';
import {Link} from 'react-router-dom';
import '../../Styles/Navigation/Header.css';

function ItemList({ items }) {
    items = [
        {
           "name":"Home",
           "nav":'/landingpage'
        },
        {
          "name":"Article",
          "nav":'/article'
       },
       {
        "name":"E-library",
        "nav":'/library'
     },
     {
      "name":"Notice",
      "nav":'/Notice'
   },
   {
    "name":"Signip/Login",
    "nav":'/Signup'
 }
    ]
  return (
    <ul>
      {items.map((item, index) => (
        <li  className = "list_st" key={index}><Link className='Link_dec alignCentre' to={item.nav}>{item.name}</Link></li>
      ))}
    </ul>
  );
}

export default ItemList;
