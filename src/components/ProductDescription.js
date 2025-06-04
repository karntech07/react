import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PRODUCTS_URL } from "../utils/constant";
import ProductShimmer from "./Shimmer/products-shimmer";

export const ProductDescription = () => {
  const [productDetail, setProductDetail] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`${PRODUCTS_URL}/${id}`);
    const json = await data.json();
    setProductDetail(json);
  };

  if (productDetail === null) return <ProductShimmer></ProductShimmer>;
  console.log(productDetail);
  const {
    title,
    warrantyInformation,
    thumbnail,
    shippingInformation,
    returnPolicy,
    rating,
    price,
    description,
    category,
    brand,
    availabilityStatus,
  } = productDetail;

  return (
    <div className="product-description-container">
        <h1>Product Details</h1>
        <h2>{title}</h2>
        <img src={thumbnail} alt="" style={{width: 100, height: 100}}/> <br />
        <p>{brand}</p>
        <p>{category}</p>
        <p>{description}</p>
        <p>{availabilityStatus}</p>
        <p>Rs. {price}</p>
        <p>Rating: {rating}</p>
        <p>{returnPolicy}</p>
        <p>{shippingInformation}</p>
        <p>{warrantyInformation}</p>
        <button onClick={() => {
            navigate('/');
        }}>Back</button>
    </div>
  );
};
