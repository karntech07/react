import {productsList} from '../data';

export const Product = (props) => {
    const {productData} = props;
    const {id, image, title, category, price} = productData;
    return (
        <div className="product">
           <div className='product-image'>
                <img src={image} alt="produc_image" width={60}/>
           </div>
           <div className='product-details'>
            <h4>{title}</h4>
            <h4>{category}</h4>
            <h4>Rs. {price}</h4>
           </div>
        </div>
    )
}