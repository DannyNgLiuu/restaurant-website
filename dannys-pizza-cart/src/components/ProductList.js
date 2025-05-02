import React from 'react';

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-8">
      {products.map(product => (
        <div key={product.id} className="bg-gray-100 p-6 rounded-lg shadow-md text-center" data-id={product.id}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-40 h-40 object-contain mx-auto mb-3"
          />
          <h2 className="font-medium text-lg mb-1">{product.name}</h2>
          <div className="text-sm my-2 font-medium">${product.price.toFixed(2)}</div>
          <button 
            className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded text-sm transition-colors"
            onClick={() => addToCart(product.id)}
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;