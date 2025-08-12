import React from 'react';
import { IoStarSharp } from 'react-icons/io5';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { products } from '../data/products';

const ProductCard = () => {
  

    const renderStars = (rating) => {
        return Array(5).fill(0).map((_, i) => (
            <IoStarSharp 
                key={i} 
                className={`${i < rating ? "text-yellow-400" : "text-gray-300"} inline-block`}
            />
        ));
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        {/* Sale Badge */}
                        {product.isSale && (
                            <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 absolute top-2 left-2 rounded z-10">
                                SALE
                            </div>
                        )}
                        
                        {/* Clickable Product Image */}
                        <Link to={`/product/${product.id}`} className="block relative">
                            <div className="h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                                <img 
                                    src={product.image} 
                                    alt={product.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </Link>
                        
                        {/* Product Info */}
                        <div className="p-4">
                            <Link to={`/product/${product.id}`} className="hover:text-blue-600">
                                <h3 className="font-bold text-lg mb-1 line-clamp-2">{product.title}</h3>
                            </Link>
                            
                            {product.category && (
                                <p className="text-gray-600 text-sm mb-2">{product.category}</p>
                            )}
                            
                            {product.size && (
                                <p className="text-gray-500 text-xs mb-2">{product.size}</p>
                            )}
                            
                            {/* Rating */}
                            <div className="flex items-center mb-2">
                                <div className="flex">
                                    {renderStars(product.rating)}
                                </div>
                                <span className="text-xs text-gray-500 ml-1">({product.reviewCount})</span>
                            </div>
                            
                            {/* Pricing */}
                            <div className="flex items-center">
                                <span className="text-red-500 font-bold text-lg">{product.salePrice}</span>
                                <span className="text-gray-400 line-through ml-2 text-sm">{product.originalPrice}</span>
                            </div>
                            
                            {/* Chat Button (uncomment if needed) */}
                            {/* <button className="mt-3 w-full bg-green-500 text-white py-2 rounded-md flex items-center justify-center hover:bg-green-600 transition-colors">
                                <FaWhatsapp className="mr-2" />
                                Chat with us
                            </button> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCard;