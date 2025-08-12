import React, { useState } from 'react';
import { IoStarSharp } from 'react-icons/io5';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import img1 from '../assets/Capture1.PNG';
import img2 from '../assets/Capture2.PNG';
import img3 from '../assets/Capture3.PNG';
import img4 from '../assets/Capture4.PNG';
import img5 from '../assets/Capture5.PNG';
import img6 from '../assets/Capture6.PNG';

const Carousel = () => {
  const reviews = [
    {
      id: 1,
      image: img1,
      name: "John Doe",
      review: "This product is amazing! I love the quality and the design.",
      rating: 5,
    },
    {
      id: 2,
      image: img2,
      name: "Jane Smith",
      review: "Excellent service and fast delivery. Very satisfied!",
      rating: 4,
    },
    {
      id: 3,
      image: img3,
      name: "Mike Johnson",
      review: "Good product but could be improved in some areas.",
      rating: 3,
    },
    {
      id: 4,
      image: img4,
      name: "Sarah Williams",
      review: "Absolutely perfect! Exceeded my expectations.",
      rating: 5,
    },
    {
      id: 5,
      image: img5,
      name: "David Brown",
      review: "Decent product for the price. Would recommend.",
      rating: 4,
    },
    {
      id: 6,
      image: img6,
      name: "Emily Davis",
      review: "Not what I expected. Quality could be better.",
      rating: 2,
    },
    {
      id: 7,
      image: img1,
      name: "Robert Wilson",
      review: "Fantastic purchase! Will buy again for sure.",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= reviews.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 3 : prevIndex - 1
    );
  };

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <IoStarSharp
          key={i}
          className={`${
            i < rating ? "text-yellow-400" : "text-gray-300"
          } inline-block`}
          size={20}
        />
      ));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 mt-20">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Let Customers Speak for Us
        </h2>
        <div className="flex justify-center items-center space-x-1 mb-1">
          {renderStars(5)}
        </div>
        <p className="text-gray-600">From 1478 reviews</p>
      </div>

      <div className="relative flex items-center w-full">
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
        >
          <FaChevronLeft className="text-gray-700 text-xl" />
        </button>

        <div className="flex space-x-6 overflow-x-auto mx-12 w-full scrollbar-hide">
          {reviews.slice(currentIndex, currentIndex + 3).map((review) => (
            <div
              key={review.id}
              className="flex-shrink-0 w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4 mb-3">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex">{renderStars(review.rating)}</div>
              </div>
              <p className="text-gray-600 italic mb-4">"{review.review}"</p>
              <p className="font-medium text-gray-800">- {review.name}</p>
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
        >
          <FaChevronRight className="text-gray-700 text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
