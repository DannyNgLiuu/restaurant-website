import React from 'react';

const CartItem = ({ item, product, changeQuantity }) => {
  return (
    <div className="flex items-center gap-4 py-3 border-b">
      <div className="w-16">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full object-contain"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-medium">{product.name}</h3>
      </div>
      <div className="text-sm font-medium">
        ${(product.price * item.quantity).toFixed(2)}
      </div>
      <div className="flex items-center">
        <button 
          className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-gray-700"
          onClick={() => changeQuantity(item.product_id, 'minus')}
        >
          -
        </button>
        <span className="mx-2">{item.quantity}</span>
        <button 
          className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-gray-700"
          onClick={() => changeQuantity(item.product_id, 'plus')}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;