import React from 'react';
import {Link} from 'react-router-dom';
import '../../Styles/Navigation/Header.css';
import Cookies from 'js-cookie';

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
   
    ]
    const user= Cookies.get('access_token')
  return (
    <ul>
      {items.map((item, index) => (
        <li  className = "list_st" key={index}><Link className='Link_dec alignCentre' to={item.nav}>{item.name}</Link></li>
      ))}
      {
        user?
          <h4 className = "list_st" >{user}</h4>
         : <li  className = "list_st" ><Link className='Link_dec alignCentre' to='/Signup'>Signup/login</Link></li>

      }
         </ul>
  );
}

export default ItemList;
