import { Product } from "./Product";
import { productsList } from "../utils/constant";
import { useState } from "react";

export const ProductContainer = () => {
  const [products, setProduct] = useState(productsList);
  console.log(products);
  return (
    <div className="body">
      <div className="filter-container">
        <input type="text" placeholder="search product name..." />
        <div className="filter-button-container">
          <button
            onClick={() => {
              const filteredProduct = products.filter(
                (product) => product.price > 100
              );
              setProduct(filteredProduct);
            }}
          >
            Item above cost Rs. 100
          </button>{" "}
          &nbsp;
          <button
            className="top-rated-product"
            onClick={() => {
              const filteredProduct = products.filter(
                (product) => product.rating.rate > 4
              );
              setProduct(filteredProduct);
            }}
          >
            Top Rated Product
          </button>
          <button
            className="reset-filter-icon-container"
            onClick={() => {
              setProduct(productsList);
            }}
          >
            <img
              className="reset-filter-icon"
              src="https://cdn-icons-png.flaticon.com/512/6134/6134042.png"
              alt="reset filter"
            />
          </button>
        </div>
      </div>
      <div className="products-list">
        {products.map((product) => (
          <Product key={product.id} productData={product} />
        ))}
      </div>
    </div>
  );
};
