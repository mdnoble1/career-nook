import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-gray-100 h-screen pt-6 lg:pt-12">
      <div className="lg:w-1/2 mx-auto py-20 lg:py-32 bg-white rounded-md mt-12">
        <h2 className="font-semibold text-4xl text-black text-center mb-12">
          Login to Your Account
        </h2>
        <div className="border border-gray-200 lg:w-1/2 mx-auto mb-6"></div>
        <form className="card-body lg:w-1/2 mx-auto">
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
          <div className="form-control mt-6">
            <button className="btn rounded-lg font-semibold text-xl normal-case text-white bg-[#fc621c] hover:bg-orange-400 hover:text-black">
              Login
            </button>
          </div>
        </form>
        <div>
          <p className="font-semibold text-black text-center">
            Don’t Have An Account ? <Link to="/register" className="text-[#fc621c]">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
