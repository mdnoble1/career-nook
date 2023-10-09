import { NavLink } from "react-router-dom";
import logo from "../assets/Ca1 (1).png"

const Footer = () => {
    return (
        <footer className="bg-black mt-8 lg:mt-12">
          <section className="container mx-auto">
            <div className="md:flex lg:flex items-center justify-between">
              <h3 data-aos="fade-up"
     data-aos-duration="1000" className="text-4xl lg:text-5xl text-white text-center md:text-left lg:text-left mb-10 pt-10 my-8 lg:my-16">Inspiring Futures - Career Nook </h3>
              <div className="flex justify-center">
                <NavLink to="/login"><button data-aos="zoom-in"
     data-aos-duration="1000" className="font-bold text-xl text-white bg-[#fc621c] py-3 px-6 lg:px-10 rounded-full hover:bg-orange-400 hover:text-black mb-10 md:mt-16 lg:mt-24">Login</button></NavLink>
              </div>
            </div>
            <div>
              <hr className="mb-10 lg:mb-20" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:items-start">
              {/* Left part */}
              <div>
                <div className="mb-10 flex justify-center lg:justify-start">
                  <img data-aos="zoom-in"
     data-aos-duration="1000" className="w-40 md:w-44 lg:w-52" src={logo} alt="" />
                </div>
              </div>
              {/* Middle part */}
              <div className="flex items-center justify-evenly text-white text-lg list-none hover:cursor-pointer mt-2">
                <li>ABOUT US</li>
                <li>COMPANY</li>
                <li>SUPPORT</li>
              </div>
              {/* Right part */}
              <div className="mt-10 lg:mt-2 lg:ml-72 lg:mb-28 text-center lg:text-left">
                <NavLink to="/register"><h4 className="text-white text-lg hover:cursor-pointer mb-6">GET IN TOUCH</h4></NavLink>
                <input className="px-6 py-3 rounded-full bg-red-950 mb-3 text-white" type="text" name="" id="" placeholder="Your Email Here..." />
                <br />
                <div className="mb-10">
                  <NavLink to="/register"><button data-aos="zoom-in"
     data-aos-duration="1000" className="font-bold text-xl text-white bg-[#fc621c] py-2 px-6 lg:px-10 rounded-full hover:bg-orange-400 hover:text-black">Register</button></NavLink>
                </div>
              </div>
            </div>
            <div className="flex justify-center pb-12">
              <p className="text-white">&copy; mdnoble.wd@gmail.com</p>
            </div>
          </section>
        </footer>
      );
    
};

export default Footer;