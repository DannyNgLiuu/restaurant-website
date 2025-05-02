import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { products } from './data/products';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCart = (productId) => {
    setCartItems(prevCartItems => {
      const existingItemIndex = prevCartItems.findIndex(item => item.product_id === productId);
      
      if (existingItemIndex === -1) {
        return [...prevCartItems, { product_id: productId, quantity: 1 }];
      } else {
        const updatedCartItems = [...prevCartItems];
        updatedCartItems[existingItemIndex].quantity += 1;
        return updatedCartItems;
      }
    });
  };

  const changeQuantity = (productId, action) => {
    setCartItems(prevCartItems => {
      const existingItemIndex = prevCartItems.findIndex(item => item.product_id === productId);
      
      if (existingItemIndex === -1) return prevCartItems;
      
      const updatedCartItems = [...prevCartItems];
      
      if (action === 'plus') {
        updatedCartItems[existingItemIndex].quantity += 1;
      } else if (action === 'minus') {
        if (updatedCartItems[existingItemIndex].quantity > 1) {
          updatedCartItems[existingItemIndex].quantity -= 1;
        } else {
          updatedCartItems.splice(existingItemIndex, 1);
        }
      }
      
      return updatedCartItems;
    });
  };

return (
  <div className="relative min-h-screen">
    <div className="container mx-auto px-4">
      <Header cartItems={cartItems} toggleCart={toggleCart} />
      <ProductList products={products} addToCart={addToCart} />
    </div>
    <Cart 
      cartItems={cartItems} 
      products={products} 
      changeQuantity={changeQuantity} 
      isOpen={isCartOpen} 
      toggleCart={toggleCart} 
    />
  </div>
);
}

export default App;