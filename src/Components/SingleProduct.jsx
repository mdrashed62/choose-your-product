import { FaRegStar } from "react-icons/fa";

const SingleProduct = ({ aProduct }) => {
  const {
    name,
    image,
    description,
    price,
    brand,
    category,
    ratings,
    creationDate,
  } = aProduct;

 
  const numericPrice = parseFloat(price);

  const formattedDate = new Date(creationDate).toISOString().split('T')[0];

  return (
    <div className="card card-compact bg-base-100">
      <figure>
        <img className="w-full lg:h-[400px]"
          src={image}
          alt={name}
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center w-full justify-between">
          <h2 className="card-title">{name}</h2>
          <div className="text-end">
            <p className="gap-2 flex items-center">
              {ratings} <FaRegStar className="text-yellow-600" />
            </p>
          </div>
        </div>
        <p>{description}</p>
        <div>
          <div className="flex justify-between">
            <p>{category}</p>
            <p>Brand {brand}</p>
          </div>
          <div className="flex justify-between">
            <p>{formattedDate}</p>
            <p className=" font-bold">{numericPrice.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
