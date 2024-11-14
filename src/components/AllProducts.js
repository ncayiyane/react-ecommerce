import React from 'react';
import { Link } from 'react-router-dom';

const AllProducts = () => {
  const products = [
    {
      id: 1,
      category: "Man's Clothes",
      title: "Bestto Wear",
      price: 'R200',
      image: './img/category-1.jpg'
    },
    {
      id: 2,
      category: 'Furniture',
      title: 'Furniture Set',
      price: 'R12000',
      image: './img/Furnature/Furnature_10.webp'
    },
    // Add more products as needed
  ];

  return (
    <section className="section all_products">
      <div className="top container">
        <h1>All Items</h1>
        <form>
          <select>
            <option value="1">Default Sorting</option>
            <option value="2">Sort By Price</option>
          </select>
          <span><i className="bx bx-chevron-down"></i></span>
        </form>
      </div>    

      <div className="product_center container">
        {products.map(product => (
          <div key={product.id} className="product_item">
            <div className="overlay">
              <Link to={`/product/${product.id}`} className="product_thumb">
                <img src={product.image} alt={product.title} />
              </Link>
            </div>
            <div className="product_info">
              <span>{product.category}</span>
              <Link to={`/product/${product.id}`} className="product_title">{product.title}</Link>
              <h4>{product.price}</h4>
            </div>
            <ul className="icons">
              <li><i className='bx bx-heart'></i></li>
              <li><i className='bx bx-shopping-bag'></i></li>
            </ul>
          </div>
        ))}
      </div>

      <section className="pagination">
        <div className="container">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span><i className="bx bx-right-arrow-alt"></i></span>
        </div>
      </section>
    </section>
  );
};

export default AllProducts;
