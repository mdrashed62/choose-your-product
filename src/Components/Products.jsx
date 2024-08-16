import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import { useLoaderData } from "react-router-dom";

const Products = () => {
    const [product, setProduct] = useState([]);
    const {count} = useLoaderData();
    console.log(count)

    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res =>res.json())
        .then(data =>setProduct(data));
    }, [])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:mt-10">
           {
            product.map(aProduct => <SingleProduct key={aProduct._id} aProduct={aProduct}></SingleProduct>)
           }
        </div>
    );
};

export default Products;