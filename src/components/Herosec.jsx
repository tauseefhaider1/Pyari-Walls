import React from 'react';
import { Link } from 'react-router-dom';

// Import all image 
import des1 from '../assets/des1.webp';
import des2 from '../assets/des2.webp';
import des3 from '../assets/des3.webp';
import des4 from '../assets/des4.webp';
import des5 from '../assets/des5.webp';
import des6 from '../assets/des6.jpg';
import des7 from '../assets/des7.webp';
import des8 from '../assets/des8.webp';
import des9 from '../assets/des9.webp';
import des10 from '../assets/des10.webp';
import des11 from '../assets/des11.webp';
import des12 from '../assets/des12.webp';

const Herosec = () => {
  // Collection data with category mapping for Pc.jsx
  const design = [
    { 
      id: 1, 
      image: des1, 
      title: "Mirror Collection",
      category: "Nature Reflection Wall Art for Home and Office"
    },
    { 
      id: 2, 
      image: des2, 
      title: "Calligraphy Art",
      category: "Calligraphy"
    },
    { 
      id: 3, 
      image: des3, 
      title: "Islamic Art",
      category: "Islamic Wall Decor"
    },
    { 
      id: 4, 
      image: des4, 
      title: "Modern Designs",
      category: "Modern Art"
    },
    { 
      id: 5, 
      image: des5, 
      title: "Traditional",
      category: "Traditional Art"
    },
    { 
      id: 6, 
      image: des6, 
      title: "Abstract",
      category: "Abstract Art"
    },
    { 
      id: 7, 
      image: des7, 
      title: "Nature",
      category: "Nature Themed"
    },
    { 
      id: 8, 
      image: des8, 
      title: "Geometric",
      category: "Geometric Patterns"
    },
    { 
      id: 9, 
      image: des9, 
      title: "Minimalist",
      category: "Minimalist Design"
    },
    { 
      id: 10, 
      image: des10, 
      title: "Vintage",
      category: "Vintage Style"
    },
    { 
      id: 11, 
      image: des11, 
      title: "Kids Room",
      category: "Children's Decor"
    },
    { 
      id: 12, 
      image: des12, 
      title: "Office Decor",
      category: "Office Wall Art"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-center mb-8">Our Collections</h1>
      
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
        {design.map((item) => (
          <Link
            to="/pc"
            state={{ category: item.category, title: item.title }}
            key={item.id}
            className="flex flex-col items-center group"
          >
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden shadow-lg border-2 border-gray-200 group-hover:scale-105 transition-transform duration-300">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                // onError={(e) => {
                //   e.target.src = 'https://via.placeholder.com/150';
                // }}
              />
            </div>
            <p className="mt-2 text-sm font-medium text-center group-hover:text-blue-500 transition-colors">
              {item.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Herosec;
