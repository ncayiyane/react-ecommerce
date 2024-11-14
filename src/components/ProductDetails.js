import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();

  // Sample product data (or fetch it based on the ID)
  const product = {
    id,
    title: "Boy's T-shirt By Zoom",
    price: 'R100',
    image: '/img/avatar-3.jpg',
    description:
      "This T-shirt, crafted by the local Zoom Store, represents our commitment to supporting South African brands...",
    sizes: ['Small', 'Medium', 'Large', 'X-Large', 'XX-Large']
  };

  return (
    <section className="section product_detail">
      <div className="details container">
        <div className="left image_container">
          <div className="main">
            <img src={product.image} alt={product.title} />
          </div>
        </div>
        <div className="right">
          <span>Home / T-shirt</span>
          <h1>{product.title}</h1>
          <div className="price">{product.price}</div>
          <form>
            <div>
              <select>
                <option value="Select Size" disabled>
                  Select Size
                </option>
                {product.sizes.map((size, index) => (
                  <option key={index} value={size}>
                    {size}
                  </option>
                ))}
              </select>
              <span><i className="bx bx-chevron-down"></i></span>
            </div>
          </form>
          <form className="form">
            <input type="text" placeholder="1" />
            <button className="addCart">Add To Cart</button>
          </form>
          <h3>Product Detail</h3>
          <p>{product.description}</p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
