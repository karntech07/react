export const Product = (props) => {
    const {productData} = props;
    const {thumbnail,category, price, title} = productData;
    return (
        <div className="product">
           <div className='product-image'>
                <img src={thumbnail} alt="produc_image" width={60}/>
           </div>
           <div className='product-details'>
            <h4>{title}</h4>
            <h4>{category}</h4>
            <h4>Rs. {price}</h4>
           </div>
        </div>
    )
}