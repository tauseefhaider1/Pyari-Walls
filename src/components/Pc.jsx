import React, { useState } from 'react';
import { IoStarSharp } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';
import { products } from '../data/products';

const Pc = () => {
  const location = useLocation();
  const { category, title } = location.state || {};

  // Filter states
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);

  // Helper to parse price string like "Rs.3,999" → number 3999
  const parsePrice = (priceStr) => Number(priceStr.replace(/[^\d]/g, ''));

  // Handle color checkbox toggle
  const toggleColor = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter(c => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  // Filtering products combining all filters
  const filteredProducts = products.filter(product => {
    // Category filter (if any)
    if (category && product.category !== category) return false;

    // Price filter
    const productPrice = product.salePrice
      ? parsePrice(product.salePrice)
      : product.price
        ? parsePrice(product.price)
        : Infinity;

    if (priceFrom && productPrice < parseInt(priceFrom)) return false;
    if (priceTo && productPrice > parseInt(priceTo)) return false;

    // Color filter
    // Use empty string as fallback to avoid errors if color missing
    const productColor = product.color || '';
    if (selectedColors.length > 0 && !selectedColors.includes(productColor)) return false;

    return true;
  });

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <IoStarSharp
          key={i}
          className={`${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'} inline-block`}
          aria-label={i < rating ? 'Filled star' : 'Empty star'}
        />
      ));
  };

  // All available colors (match with your product.color values)
  const availableColors = [
    'All Gold Acrylic',
    'Black',
    'Black & Golden',
    'Black Dial + Golden',
    'Black MDF',
    'Golden',
    'Golden & Black Base',
    'Golden Acrylic',
    'Silver & Black Base',
    'White',
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">{title || 'All Products'}</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="w-full md:w-1/4 bg-white p-4 rounded-lg shadow mb-8 md:mb-0" aria-label="Product filters">
          <h3 className="font-bold text-lg mb-4">Filters</h3>
          <hr className="my-2" />

          {/* Price Filter */}
          <section className="mb-6" aria-labelledby="price-filter">
            <h3 id="price-filter" className="font-semibold mb-2">Price</h3>
            <p className="text-sm text-gray-600 mb-2">The highest price is Rs.9,999</p>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm">Rs.</span>
              <input
                type="number"
                placeholder="From"
                className="border p-1 text-sm w-20"
                value={priceFrom}
                onChange={(e) => setPriceFrom(e.target.value)}
                min={0}
                aria-label="Minimum price"
              />
              <span>-</span>
              <input
                type="number"
                placeholder="To"
                className="border p-1 text-sm w-20"
                value={priceTo}
                onChange={(e) => setPriceTo(e.target.value)}
                min={0}
                aria-label="Maximum price"
              />
            </div>
          </section>

          <hr className="my-2" />

          {/* Color Filter */}
          <section aria-labelledby="color-filter" className="mb-6">
            <h3 id="color-filter" className="font-semibold mb-2">Color</h3>
            <ul className="space-y-2 max-h-48 overflow-auto">
              {availableColors.map((color, index) => (
                <li key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`color-${index}`}
                    className="mr-2"
                    checked={selectedColors.includes(color)}
                    onChange={() => toggleColor(color)}
                    aria-checked={selectedColors.includes(color)}
                  />
                  <label htmlFor={`color-${index}`} className="text-sm">
                    {color}
                  </label>
                </li>
              ))}
            </ul>
          </section>

          <button
            onClick={() => {
              setPriceFrom('');
              setPriceTo('');
              setSelectedColors([]);
            }}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 text-sm"
            aria-label="Clear all filters"
          >
            Clear Filters
          </button>
        </aside>

        {/* Products Grid */}
        <section className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" aria-label="Product listings">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                state={{ category: product.category, title: product.category }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow relative block"
              >
                {product.isSale && (
                  <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 absolute top-2 left-2 rounded z-10">
                    SALE
                  </div>
                )}

                <div className="h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1 line-clamp-2">{product.title}</h3>
                  {product.category && (
                    <p className="text-gray-600 text-sm mb-2">{product.category}</p>
                  )}

                  {/* Rating */}
                  <div className="flex items-center mb-2">
                    <div className="flex">{renderStars(product.rating)}</div>
                    <span className="text-xs text-gray-500 ml-1">({product.reviewCount || 0})</span>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center">
                    <span className="text-red-500 font-bold text-lg">{product.salePrice}</span>
                    {product.originalPrice && product.originalPrice !== product.salePrice && (
                      <span className="text-gray-400 line-through ml-2 text-sm">{product.originalPrice}</span>
                    )}
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p>No products found matching your filters.</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default Pc;
