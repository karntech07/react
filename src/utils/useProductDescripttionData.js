import { useEffect, useState } from "react";
import { PRODUCTS_URL } from "../utils/constant";

const useProductDescriptionData = (id) => {
    const [productInfo, setProductInfo] = useState(null);
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async() => {
        const data = await fetch(`${PRODUCTS_URL}/${id}`);
        const json = await data.json();
        setProductInfo(json);
    }
    return productInfo;
}

export default useProductDescriptionData;