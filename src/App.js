import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Hero from './pages/Hero';
import AllProducts from './components/AllProducts';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
