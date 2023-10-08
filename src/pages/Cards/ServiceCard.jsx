/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { id, title, img, price, description } = service;

  return (
    <div className="card w-11/12 lg:w-96 mx-auto shadow-2xl rounded-md mb-12">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="p-6">
        <h2 className="font-semibold text-2xl mb-4 ">{title}</h2>
        <p className="font-medium mb-4 text-justify h-20">{description.slice(0, 100)}...</p>
        <p className="font-bold text-xl text-black mb-8">
          Price: ${price}
        </p>
        <div className="flex justify-center">
          <NavLink to={`/service/${id}`}>
            <button className="btn rounded-lg px-6 py-3 border-none font-bold text-xl text-white bg-[#fc621c] hover:bg-orange-400 hover:text-black normal-case">
              View Details
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
