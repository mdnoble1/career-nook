import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div className="bg-gray-100 max-h-fit lg:pb-16 lg:pt-12">
      <div className="lg:w-1/2 mx-auto py-12 lg:py-32 bg-white rounded-md lg:mt-12">
        <h2 className="font-semibold text-4xl text-black text-center mb-12">
          Register Your Account
        </h2>
        <div className="border border-gray-200 lg:w-1/2 mx-auto mb-6"></div>
        <form className="card-body lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-lg text-black">
                Your Name
              </span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter Your Name"
              className="input input-bordered rounded-lg bg-gray-100"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-lg text-black">
                Photo URL
              </span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Give Your Photo URL"
              className="input input-bordered rounded-lg bg-gray-100"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-lg text-black">
                Email Address
              </span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter Your Email Address"
              className="input input-bordered rounded-lg bg-gray-100"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-lg text-black">
                Password
              </span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter Your Password"
              className="input input-bordered rounded-lg bg-gray-100"
              required
            />
          </div>
          <div className="flex items-center gap-4 mt-2">
            <input type="checkbox" name="terms" id="" />
            <p>Accept Term & Conditions</p>
          </div>
          <div className="form-control mt-6">
            <button className="btn rounded-lg font-semibold text-xl normal-case text-white bg-[#fc621c] hover:bg-orange-400 hover:text-black">
              Register
            </button>
          </div>
        </form>
        <div>
          <p className="font-semibold text-black text-center">
            Already a Member ? Please <NavLink to="/login" className="text-[#fc621c]">Login</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
