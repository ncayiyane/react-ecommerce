import React from 'react';

function Category() {
  return (
    <section className="section category">
      <div className="cat_center">
        <div className="cat">
          <img src="./img/category-1.jpg" alt="Clothes" />
          <div><p>Clothes</p></div>
        </div>
        <div className="cat">
          <img src="./img/Furniture/Furniture_2.jpg" alt="Furniture" />
          <div><p>Furniture</p></div>
        </div>
        <div className="cat">
          <img src="./img/Skin Care/Skin_Product_1.webp" alt="Skin Products" />
          <div><p>Skin Products</p></div>
        </div>
        <div className="cat">
          <img src="./img/Home_Decor/Home_Decor_2.jpg" alt="Decor" />
          <div><p>Decor</p></div>
        </div>
      </div>
    </section>
  );
}

export default Category;
