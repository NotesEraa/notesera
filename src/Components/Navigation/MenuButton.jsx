import React, { useState } from 'react';
import ItemList from './ItemList';

function MenuButton({ buttonText, items }) {
  const [isOpen, setIsOpen] = useState(false);
  const [displayedItems, setDisplayedItems] = useState([]);

  const handleOpen = () => {
    setIsOpen(true);
    setDisplayedItems(items);
  };

  const handleClose = () => {
    setIsOpen(false);
    setDisplayedItems([]);
  };

  return (
    <>
   
      <button className="btn botton alignRight m-3" onClick={handleOpen}>Menu</button>
      {isOpen && (
        <div className="card p-4 alignRight">
          <ItemList  items={displayedItems} />
          <button className="btn botton " onClick={handleClose}>Close</button>
        </div>
      
      )}
     
    </>
  );
}

export default MenuButton;
