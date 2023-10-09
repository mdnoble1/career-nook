import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero h-[400px] lg:h-[590px]"
      style={{
        backgroundImage: "url(https://i.ibb.co/fGFHmgQ/banner2.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="lg:max-w-2xl">
          <div className="mb-5 font-bold">
            <h2 className="text-2xl lg:text-5xl mb-4">- Welcome to Career Nook -</h2>
            <h2 className="text-xl lg:text-4xl">Your Gateway to Career Excellence!</h2>
          </div>
          <p className="mb-5">
            Discover the path to a brighter future with Career Nook. We are your
            trusted source for career events, workshops, and networking
            opportunities. Whether you are taking your first steps into the
            professional world or looking to advance your career, we are here to
            guide you.
          </p>
          <NavLink to="/register">
            <button
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="btn rounded-lg px-6 pb-3 pt-2 border-none font-bold text-xl text-white bg-[#fc621c] hover:bg-orange-400 hover:text-black normal-case"
            >
              Get Started
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Banner;
