import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Header = ({ cartItems, toggleCart }) => {
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  return (
    <header className="flex items-center justify-between p-5">
      <button 
        className="bg-gray-800 text-white px-3 py-2 rounded-full text-sm"
        onClick={() => window.location.href = 'http://127.0.0.1:5500/html/index.html'}
      >
        Back to Home
      </button>
      
      <div className="relative cursor-pointer" onClick={toggleCart}>
        <FaShoppingCart className="text-2xl" />
        <span className="absolute -top-2 -right-4 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
          {totalQuantity}
        </span>
      </div>
    </header>
  );
};

export default Header;