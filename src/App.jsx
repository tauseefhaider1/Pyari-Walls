import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ProductPage from './pages/Productpage.jsx';
import Footer from './components/Footer.jsx';
import MenuH from './components/MenuH.jsx';
import Pc from './components/Pc.jsx';

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <MenuH />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pc" element={<Pc />} />
        <Route path="/collection/:id" element={<Pc />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
