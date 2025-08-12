import React from 'react';
import { useParams, useNavigate, useLocation, Link } from 'react-router-dom';

import { products } from '../data/products';

const Productpage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const { category, title } = location.state || {};

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <button 
          onClick={() => navigate('/pc')}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Go Back Link */}
      <div className="mb-6">
        <Link
          to="/pc"
          state={category && title ? { category, title } : undefined}
          className="text-blue-600 underline"
        >
          &larr; Go Back
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-8">Summer Sale!</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="w-full md:w-1/4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-4">Filters</h3>
            <hr className="my-2" />
            
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Price</h3>
              <p className="text-sm text-gray-600 mb-2">The highest price is Rs.9,999</p>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm">Rs.</span>
                <input type="text" placeholder="From" className="border p-1 text-sm w-20" />
                <span>-</span>
                <input type="text" placeholder="To" className="border p-1 text-sm w-20" />
              </div>
              <hr className="my-2" />
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Color</h3>
              <ul className="space-y-2">
                {[
                  "All Gold Acrylic",
                  "Black",
                  "Black & Golden",
                  "Black Dial + Golden",
                  "Black MDF",
                  "Golden",
                  "Golden & Black Base",
                  "Golden Acrylic",
                  "Silver & Black Base",
                  "White"
                ].map((color, index) => (
                  <li key={index} className="flex items-center">
                    <input type="checkbox" id={`color-${index}`} className="mr-2" />
                    <label htmlFor={`color-${index}`} className="text-sm">{color}</label>
                  </li>
                ))}
              </ul>
              <hr className="my-2" />
            </div>
            
            <div className="mt-4">
              <button className="text-blue-500 text-sm font-medium">Chat with us</button>
            </div>
          </div>
        </div>
        
        {/* Product Details */}
        <div className="w-full md:w-3/4">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6 flex flex-col md:flex-row gap-6">
              {/* Product Image */}
              <div className="w-full md:w-1/2">
                <img 
                  src={product.image} 
                  alt={product.desc} 
                  className="w-full h-auto max-h-96 object-contain"
                  loading="lazy"
                />
              </div>
              
              {/* Product Info */}
              <div className="w-full md:w-1/2">
                {product.salePrice && (
                  <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-block">
                    SALE
                  </span>
                )}
               
                <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
           <p className="text-gray-600 mb-4">{product.desc}</p>
                
                <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                      viewBox="0 0 20 20"
                >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-sm text-gray-500 ml-1">({product.rating})</span>
                </div>
                
                <div className="mb-4">
                  {product.salePrice ? (
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold text-red-500">{product.salePrice}</span>
                      <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                    </div>
                  ) : (
                    <span className="text-2xl font-bold">{product.price}</span>
                  )}
                </div>
                
                {product.size && (
                  <p className="text-gray-600 mb-4">
                    <span className="font-semibold">Size:</span> {product.size}
                  </p>
                )}
                
                <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productpage;
