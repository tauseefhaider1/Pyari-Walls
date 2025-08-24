import React from 'react';
import { useParams, useNavigate, useLocation, Link } from 'react-router-dom'; // Ensure this line is present
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
    <div className="w-full px-4 py-8">
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
      
      <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
        {/* Product Details */}
        <div className="w-full bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6 flex flex-col md:flex-row gap-10 items-center">
            {/* Product Image */}
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <img 
                src={product.image} 
                alt={product.desc} 
                className="w-full max-w-md h-auto object-cover rounded-lg"
                loading="lazy"
              />
            </div>
            
            {/* Product Info */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              {product.salePrice && (
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-block">
                  SALE
                </span>
              )}
              
              <h2 className="text-3xl font-bold mb-3">{product.title}</h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">{product.desc}</p>
              
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
                <span className="text-sm text-gray-500 ml-2">({product.rating})</span>
              </div>
              
              <div className="mb-6">
                {product.salePrice ? (
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-red-500">{product.salePrice}</span>
                    <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                  </div>
                ) : (
                  <span className="text-3xl font-bold">{product.price}</span>
                )}
              </div>
              
              {/* Warranty and Size Badges */}
              <div className="flex gap-4 mb-6">
                <span className="bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded">Warranty: 1 year</span>
                <span className="bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded">Size: 32x32 inches</span>
              </div>
              
              {/* Quantity Selector */}
              <div className="flex items-center mb-6">
                <span className="text-gray-600 mr-4">Quantity</span>
                <div className="flex items-center border rounded">
                  <button className="px-3 py-1">-</button>
                  <input type="number" value="1" className="w-12 text-center border-none" readOnly />
                  <button className="px-3 py-1">+</button>
                </div>
              </div>
              
              {/* Add to Cart Button */}
              <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors text-lg font-semibold mb-4">
                Add to Cart
              </button>
              
              {/* Buy with Cash on Delivery Button */}
              <button className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors text-lg font-semibold">
                Buy with Cash on Delivery
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productpage;