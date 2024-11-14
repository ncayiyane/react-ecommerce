import React from 'react';
import Category from './Category';
import Promo from './Promo';
import ProductShowcase from './ProductShowcase';

function Hero() {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero">
        <div className="glide" id="glide_1">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              <li className="glide__slide">
                <div className="center">
                  <div className="left">
                    <span>New Inspiration 2024</span>
                    <h1>New Collection</h1>
                    <p>Trending from men's and women's style collections</p>
                    <a href="#" className="hero-btn">Show Now</a>
                  </div>
                  <div className="right">
                    <img src="./img/category-1.jpg" className="img1" alt="hero" />
                  </div>
                </div>
              </li>
              <li className="glide__slide">
                <div className="center">
                  <div className="left">
                    <span>New Inspiration 2024</span>
                    <h1>New Collection</h1>
                    <p>Trending from men's and women's style collections</p>
                    <a href="#" className="hero-btn">Show Now</a>
                  </div>
                  <div className="right">
                    <img src="./img/category-2.jpg" className="img2" alt="hero" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Category Section */}
      <Category />

      {/* Promo Section */}
      <Promo />

      {/* Combined New Arrivals and Featured Products Section */}
      <ProductShowcase />
    </div>
  );
}

export default Hero;
