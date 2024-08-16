import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import { useLoaderData } from "react-router-dom";
import "./products.css";

const Products = () => {
  const [product, setProduct] = useState([]);
  const [itemPerPage, setItemPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const [asc, setAsc] = useState(true);
  const data = useLoaderData();
  const {count} = data || {}
  const numberOfPages = Math.ceil(count / itemPerPage);

  const pages = [];
  for (let i = 0; i < numberOfPages; i++) {
    pages.push(i + 1);
  }
  console.log(pages);
  // shortcut
  // const pages = [...Array(numberOfPages).keys()];

  useEffect(() => {
    fetch(` http://localhost:5000/products?page=${currentPage}&size=${itemPerPage}&sort=${asc? 'asc' : 'desc'}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [currentPage, itemPerPage, asc]);

  const handleItemPerPage = (e) => {
    const val = parseInt(e.target.value);
    console.log(val);
    setItemPerPage(val);
    setCurrentPage(1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
       <button onClick={() => setAsc(!asc)}
       className="btn btn-secondary">
        {asc ? 'Price: Low to High' : 'Price: High to Low'}
        </button>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:mt-10">
        {product.map((aProduct) => (
          <SingleProduct key={aProduct._id} aProduct={aProduct}></SingleProduct>
        ))}
      </div>
      <div className="flex items-center gap-4 pagination mt-6 justify-center mb-2">
        <button onClick={handlePrevPage}>Previous</button>
        {pages.map((page) => (
          <button
            onClick={() => setCurrentPage(page)}
            className={
              currentPage === page
                ? "selected text-white px-3 py-1 rounded-md"
                : undefined
            }
            key={page}
          >
            {page}
          </button>
        ))}
        <button onClick={handleNextPage}>Next</button>
        <select
          value={itemPerPage}
          onChange={handleItemPerPage}
          className="bg-slate-300"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

export default Products;