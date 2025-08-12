import React from 'react';

const MenuH = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-[70px] left-0 h-full w-74 bg-white shadow-lg z-50 transition-transform transform ${
        menuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="p-3 overflow-y-auto h-full">
        <ul className="space-y-2">
   <li className="hover:bg-black/10 text-lg p-3">
  <a href="">Get Products in Whole Sale prices</a>
</li>
<li className="hover:bg-black/10 text-lg p-3">
  <a href="">Track Your Order!</a>
</li>
<li className="hover:bg-black/10 text-lg p-3">
  <a href="">Summer Sale!</a>
</li>
<li className="hover:bg-black/10 text-lg p-3">
  <a href="">Home Page</a>
</li>
<li className="hover:bg-black/10 text-lg p-3">
  <a href="">Customize Your Acrylic Signs!</a>
</li>
<li className="hover:bg-black/10 text-lg p-3">
  <a href="">Under 999 Sale</a>
</li>
<li className="hover:bg-black/10 text-lg p-3">
  <a href="">Cars Led Decor</a>
</li>
<li className="hover:bg-black/10 text-lg p-3">
  <a href="">Acrylic Wall Mirrors</a>
</li>
<li className="hover:bg-black/10 text-lg p-3">
  <a href="">Click Me To Explore All Categories</a>
</li>
<li className="hover:bg-black/10 text-lg p-3">
  <a href="">Summer Sale Special!</a>
</li>
<li className="hover:bg-black/10 text-lg p-3">
  <a href="">Visit Our Physical Store!</a>
</li>
<li className="hover:bg-black/10 text-lg p-3">
  <a href="">Mini Plant Decor</a>
</li>
<li className="hover:bg-black/10 text-lg p-3">
  <a href="">Work Place Decor</a>
</li>
<li className="hover:bg-black/10 text-lg p-3">
  <a href="">Islamc Wall Hangings</a>
</li>
<li className="hover:bg-black/10 text-lg p-3">
  <a href="">Kids Learning Section!</a>
</li>
<li className="hover:bg-black/10 text-lg p-3"  >
  <a href="">All Products</a>
</li>
<li className="hover:bg-black/10 text-lg">
  <a href="">Perfume By Pyari Scents</a>
</li>
<li className="hover:bg-black/10 text-lg p-3">
  <a href="">Customize Acrylic Neon Signs</a>
</li>
<li className="hover:bg-black/10 text-lg p-3">
  <a href="">Exclusive Metal Decor</a>
</li>
<li className="hover:bg-black/10 text-lg p-3">
  <a href="">Sign Up As Affiliate</a>
</li>
<li className="hover:bg-black/10 text-lg p-3">
  <a href="">Get Pyariwalls Franchise Now!</a>
</li>
<li className="hover:bg-black/10 text-lg p-3">
  <a href="">Learm Ecommerce and marketing with Emaan!</a>
</li>

        </ul>
      </div>
    </div>
  );
};

export default MenuH;
