import { useParams, useNavigate } from "react-router-dom";
import ProductShimmer from "./Shimmer/products-shimmer";
import useProductDescriptionData from '../utils/useProductDescripttionData';

export const ProductDescription = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const productDetail = useProductDescriptionData(id);
  if (productDetail === null) return <ProductShimmer></ProductShimmer>;

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
