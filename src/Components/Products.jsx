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
  const { count } = data || {};
  const numberOfPages = Math.ceil(count / itemPerPage);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");

  const pages = [];
  for (let i = 0; i < numberOfPages; i++) {
    pages.push(i + 1);
  }

  useEffect(() => {
    fetch(
      `https://choose-products-server-scic.onrender.com/products?page=${currentPage}&size=${itemPerPage}&sort=${
        asc ? "asc" : "desc"
      }&brand=${selectedBrand}&category=${selectedCategory}&priceRange=${selectedPriceRange}`
    )
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [
    currentPage,
    itemPerPage,
    asc,
    selectedBrand,
    selectedCategory,
    selectedPriceRange,
  ]);

  const handleItemPerPage = (e) => {
    const val = parseInt(e.target.value);
    setItemPerPage(val);
    setCurrentPage(1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.search.value);
  };

  const filteredServices = product.filter((aProduct) =>
    aProduct.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <button
        onClick={() => setAsc(!asc)}
        className="px-4 py-2 rounded-md bg-blue-400 text-white"
      >
        {asc ? "Price: Low to High" : "Price: High to Low"}
      </button>

      {/* Filter Section */}
      <div className="mt-4 flex gap-4">
        {/* Brand Filter */}
        <select
          onChange={(e) => setSelectedBrand(e.target.value)}
          className="bg-slate-400 rounded-md"
        >
          <option value="">All Brands</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
          <option value="F">F</option>
          <option value="G">G</option>
          <option value="H">H</option>
          <option value="I">I</option>
          <option value="J">J</option>
          <option value="K">K</option>
          <option value="Z">L</option>
          <option value="M">M</option>
          <option value="N">N</option>
          <option value="O">O</option>

          {/* Add more brands here */}
        </select>

        {/* Category Filter */}
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="bg-slate-400 rounded-md"
        >
          <option value="">All Categories</option>
          <option value="Shirt">Shirt</option>
          <option value="TShirt">T-Shirt</option>
          <option value="Pant">Pant</option>
          <option value="Sari">Sari</option>
          <option value="Shoe">Shoe</option>
          <option value="Tights">Tights</option>
          <option value="Outerwear">Outerwear</option>
          <option value="Sweater">Sweater</option>
          <option value="Shorts">Shorts</option>
          <option value="Boots">Boots</option>
          <option value="Accessory">Accessory</option>
          <option value="Dress">Dress</option>
        </select>

        {/* Price Range Filter */}
        <select
          onChange={(e) => setSelectedPriceRange(e.target.value)}
          className="bg-slate-400 rounded-md"
        >
          <option value="">All Prices</option>
          <option value="low">Below $50</option>
          <option value="medium">$50 - $100</option>
          <option value="high">Above $100</option>
        </select>
      </div>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="mb-6 lg:w-1/2 mt-4">
        <div className="w-full mx-auto">
          <input
            className="bg-gray-300 px-4 cursor mx-auto py-2 w-[50%] lg:w-[80%] rounded-md"
            placeholder="Search"
            type="text"
            name="search"
          />
          <button className="px-6 lg:w-[15%] py-2 text-white ml-4 bg-[#008DDA] rounded-md">
            Search
          </button>
        </div>
      </form>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:mt-10">
        {filteredServices.map((aProduct) => (
          <SingleProduct key={aProduct._id} aProduct={aProduct}></SingleProduct>
        ))}
      </div>

      {/* Pagination */}
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
