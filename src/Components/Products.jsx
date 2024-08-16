import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import { useLoaderData } from "react-router-dom";
import './products.css'

const Products = () => {
    const [product, setProduct] = useState([]);
    const {count} = useLoaderData();
    const itemsPerPage = 10;
    const numberOfPages = Math.ceil(count / itemsPerPage);

    const pages = []
    for (let i =0; i < numberOfPages; i++) {
        pages.push(i)
    }
    console.log(pages)
    // shortcut
    // const pages = [...Array(numberOfPages).keys()];



    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res =>res.json())
        .then(data =>setProduct(data));
    }, [])

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:mt-10">
           {
            product.map(aProduct => <SingleProduct key={aProduct._id} aProduct={aProduct}></SingleProduct>)
           }
        </div>
        <div>
           {
            pages.map(page => <button className="btn btn-primary" key={page}>{page}</button>)
           }
        </div>
        </div>
    );
};

export default Products;