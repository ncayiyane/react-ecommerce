import React from 'react';

function ProductShowcase() {
  return (
    <section className="section product_showcase">
      <div className="title">
        <h1>New & Featured Products</h1>
        <p>Latest and most popular picks from our store</p>
      </div>

      <div className="product_center">
        <div className="product_item">
          <div className="overlay">
            <a href="prodctDetails.html" className="product_thumb">
              <img src="./img/category-1.jpg" alt="product" />
            </a>
            <span className="discount">30%</span>
          </div>
          <div className="product_info">
            <span>Boy's T-shirt</span>
            <a href="productDetails.html" className="product_title">Bestto Wear</a>
            <h4>R200</h4>
          </div>
          <ul className="icons">
            <li><i className='bx bx-heart'></i></li>
            <li><i className='bx bx-shopping-bag'></i></li>
          </ul>
        </div>

        <div className="product_item">
          <div className="overlay">
            <a href="prodctDetails.html" className="product_thumb">
              <img src="./img/category-2.jpg" alt="product" />
            </a>
            <span className="discount">30%</span>
          </div>
          <div className="product_info">
            <span>Girl's Handbag</span>
            <a href="productDetails.html" className="product_title">Bag</a>
            <h4>R500</h4>
          </div>
          <ul className="icons">
            <li><i className='bx bx-heart'></i></li>
            <li><i className='bx bx-shopping-bag'></i></li>
          </ul>
        </div>

        <div className="product_item">
          <div className="overlay">
            <a href="prodctDetails.html" className="product_thumb">
              <img src="./img/Furniture/Furniture_3.jpg" alt="product" />
            </a>
          </div>
          <div className="product_info">
            <span>Furniture</span>
            <a href="productDetails.html" className="product_title">Living Room Furniture</a>
            <h4>R15000.00</h4>
          </div>
          <ul className="icons">
            <li><i className='bx bx-heart'></i></li>
            <li><i className='bx bx-shopping-bag'></i></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProductShowcase;
