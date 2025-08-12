import React, { useState } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import MenuH from '../components/MenuH.jsx';
import Emails from '../components/Emails.jsx';
import Herosec from '../components/Herosec.jsx';
import ProductCard from '../components/ProductCard.jsx';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* This is the ONLY place Header should be rendered */}
      <Header 
        className="fixed top-0 left-0 right-0 bg-white z-50 shadow-md" 
        onMenuToggle={() => setMenuOpen(!menuOpen)} 
      />
      
      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      <MenuH menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      
      <main className="pt-20"> {/* pt-20 accounts for fixed header height */}
      
        
        <Herosec />
        
        {/* Single ProductCard section */}
        <div className="mt-8 container mx-auto">
          <ProductCard />
        </div>
      </main>
        <div className="flex items-center justify-center gap-3 text-center mx-auto">
          <Emails />
        </div>
      {/* Uncomment if you want footer */}
      {/* <Footer /> */}
    </>
  );
};

export default Home;