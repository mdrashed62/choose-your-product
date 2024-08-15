import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

const Products = () => {
    const [product, setProduct] = useState([]);


    useEffect(() => {
        fetch('Products.json')
        .then(res =>res.json())
        .then(data =>setProduct(data));
    }, [])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:mt-10">
           {
            product.map(aProduct => <SingleProduct key={aProduct.index} aProduct={aProduct}></SingleProduct>)
           }
        </div>
    );
};

export default Products;