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

  return (
    <div className="card card-compact bg-base-100 w-92 shadow-xl">
      <figure>
        <img className="w-full h-[400px]"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center w-full justify-between">
        <h2 className="card-title">{name}</h2>
        <div className="text-end">
        <p className="gap-2 flex items-center">{ratings} <FaRegStar className="text-yellow-600"/></p>
        </div>
        </div>
        <p>{description}</p>
        <div>
            <div className="flex">
                <p>{category}</p>
                <p className="text-end">{brand}</p>
            </div>
            <div className="flex">
                <p>{creationDate}</p>
                <p className="text-end lg:text-xl font-semibold">{price}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
