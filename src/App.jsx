// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home.jsx';
// import ProductPage from './pages/Productpage.jsx';
// import Header from './components/Header.jsx';
// import Footer from './components/Footer.jsx';
// import MenuH from './components/MenuH.jsx';
// import Pc from './components/Pc.jsx';

// const App = () => {
//   return (
//     <Router>
//       {/* <Header />  */}
//       <MenuH />
//       <Routes>
//         <Route path="/" element={<Home />} />
        
//         {/* This route will handle the navigation from your Herosec.jsx Link */}
//         <Route path="/pc" element={<Pc />} />

//         {/* Keep collection with id if needed */}
//         <Route path="/collection/:id" element={<Pc />} />

//         <Route path="/product/:id" element={<ProductPage />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ProductPage from './pages/Productpage.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import MenuH from './components/MenuH.jsx';
import Pc from './components/Pc.jsx';

const App = () => {
  return (
    <Router basename="/my-project">
      {/* <Header /> */}
      <MenuH />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pc" element={<Pc />} />
        <Route path="/collection/:id" element={<Pc />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
