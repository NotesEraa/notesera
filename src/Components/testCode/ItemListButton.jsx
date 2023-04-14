import React, { useState } from 'react';
import ItemList from './ItemList';

function ItemListButton({ buttonText, items }) {
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
    <div className="alignRight">
      <button className="btn botton " onClick={handleOpen}>Menu</button>
      {isOpen && (
        <div>
          <ItemList items={displayedItems} />
          <button className="btn botton" onClick={handleClose}>Close</button>
        </div>
      
      )}
      </div>
    </>
  );
}

export default ItemListButton;
