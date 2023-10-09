/* eslint-disable react/prop-types */

const DetailCard = ({ detail }) => {

    const { id , title , img , price , description } = detail || {};

    console.log(id , title , img , price , description  )

    return (
        <div className="flex justify-center">
      <div>
          <img
            className="rounded-lg w-11/12 lg:w-2/3 mx-auto"
            src={img}
            alt=""
          />
        <div className="text-center lg:text-left w-11/12 lg:w-2/3 mx-auto">
          <h2 className="font-bold text-2xl lg:text-4xl text-black mt-8">
            {title}
          </h2>
          <p className="w-11/12 lg:w-full text-gray-600 lg:text-lg mt-4 text-center lg:text-justify mx-auto lg:mx-0">
            {description}
          </p>
        </div>
      </div>
    </div>
    );
};

export default DetailCard;