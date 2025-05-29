import { Product } from "./Product";
import { productsList } from '../data';
import {Filter} from './Filter';

export const ProductContainer = () => {
    return (
        <div className="body">
            <Filter></Filter>
            <div className="products-list">
                {
                    productsList.map(product => <Product  key={product.id} productData={product}/>)
                }
            </div>
        </div>
    )
}