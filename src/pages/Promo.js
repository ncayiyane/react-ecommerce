import React from 'react';

function Promo() {
  return (
    <section className="section promo">
      <div className="promo_center">
        <div className="promo_item">
          <img src="./img/promo1.jpg" alt="Promo 1" />
          <div className="promo_text">
            <p>Special Offer</p>
            <h3>Get 40% off on all products</h3>
            <a href="#" className="promo-btn">Shop Now</a>
          </div>
        </div>
        <div className="promo_item">
          <img src="./img/promo2.jpg" alt="Promo 2" />
          <div className="promo_text">
            <p>Limited Time</p>
            <h3>Buy One Get One Free</h3>
            <a href="#" className="promo-btn">Shop Now</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promo;
