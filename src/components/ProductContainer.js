import { Product } from "./Product";
import { productsList } from "../utils/constant";
import { useState, useEffect } from "react";
import ProductShimmer from "./Shimmer/products-shimmer";

export const ProductContainer = () => {
  const [products, setProduct] = useState([]);
  const [allProducts, setAllProduct] = useState([]);
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    console.log('I am useeffect');
    fetchData();
  }, []);

  const fetchData = async () => {
    const json = await fetch(
      "https://fakestoreapiserver.reactbd.com/amazonproducts"
    );
    const data = await json.json();
    setProduct(data);
    setAllProduct(data);
  };

  const filterProductByprice = () => {
    const filteredProduct = products.filter((product) => product.price > 100);
    setProduct(filteredProduct);
  };

  const filterProductByRating = () => {
    const filteredProduct = products.filter(
      (product) => product.rating.rate > 4
    );
    setProduct(filteredProduct);
  };

  const resetFilter = () => {
    setProduct(productsList);
  };

  if(products.length === 0 && !searchText && !searchText.length > 0) {
    return <ProductShimmer></ProductShimmer>
  }

  if(products.length === 0 && searchText && searchText.length > 0) {
    return <h1>No data to show</h1>
  }


  return (
    <div className="body">
      <div className="filter-container">
        <input 
            type="text" 
            placeholder="search product name..." 
            value={searchText} 
            onKeyUp={(event) => {
            // we should use debouncing here
            setSearchText(event.target.value);
            const filteredproducts = allProducts.filter(product => {
                return product.title.toLowerCase().includes(event.target.value.toLowerCase())
            });
            setProduct(filteredproducts);
            }} 
            onChange={(event) => {
                setSearchText(event.target.value);
            }}/>
        <div className="filter-button-container">
          <button onClick={filterProductByprice}>
            Item above cost Rs. 100
          </button>{" "}
          &nbsp;
          <button className="top-rated-product" onClick={filterProductByRating}>
            Top Rated Product
          </button>
          <button className="reset-filter-icon-container" onClick={resetFilter}>
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
