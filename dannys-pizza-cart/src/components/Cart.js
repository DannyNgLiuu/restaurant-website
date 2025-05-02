import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, products, changeQuantity, isOpen, toggleCart }) => {
  const getProduct = (productId) => {
    return products.find(p => p.id === productId);
  };
  
  const totalPrice = cartItems.reduce((total, item) => {
    const product = getProduct(item.product_id);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);

  return (
    <div className={`fixed top-0 right-0 bottom-0 h-full w-full md:w-96 bg-gray-800 text-white transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col z-50`}>
      <div className="flex justify-between items-center p-5 border-b border-gray-700">
        <h1 className="text-xl">Shopping Cart</h1>
        <button 
          className="text-white hover:text-gray-300 text-2xl font-bold"
          onClick={toggleCart}
        >
          &times;
        </button>
      </div>
      
      <div className="flex-1 overflow-auto p-5">
        {cartItems.length === 0 ? (
          <p className="text-center py-10">Your cart is empty</p>
        ) : (
          cartItems.map(item => (
            <CartItem 
              key={item.product_id} 
              item={item} 
              product={getProduct(item.product_id)}
              changeQuantity={changeQuantity}
            />
          ))
        )}
      </div>
      
      {cartItems.length > 0 && (
        <div className="p-5 border-t border-gray-700">
          <p className="text-right mb-4">Total: ${totalPrice.toFixed(2)}</p>
        </div>
      )}
      
      <div className="grid grid-cols-2 border-t border-gray-700">
        <button 
          className="py-4 bg-gray-200 text-gray-800 font-medium"
          onClick={toggleCart}
        >
          CLOSE
        </button>
        <button 
          className="py-4 bg-yellow-500 text-gray-800 font-medium"
          onClick={() => alert('Checkout functionality would go here')}
        >
          Check Out
        </button>
      </div>
    </div>
  );
};

export default Cart;