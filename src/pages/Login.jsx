import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { FaGoogle } from 'react-icons/fa';

const Login = () => {


  const { signInUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email , password)

        // log in user from firebase 

        signInUser(email , password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                navigate("/");
            })
            .catch(error => {
                console.error(error);
            })
    }


  return (
    <div className="bg-gray-100 h-screen lg:pt-12">
      <div className="lg:w-1/2 mx-auto py-12 lg:py-32 bg-white rounded-md lg:mt-12">
        <h2 className="font-semibold text-4xl text-black text-center mb-12">
          Login to Your Account
        </h2>
        <div className="border border-gray-200 lg:w-1/2 mx-auto mb-6"></div>
        <form onSubmit={handleLogin} className="card-body lg:w-1/2 mx-auto">
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
          <p className="font-medium text-xl text-center">or</p>
          <div>
          <button className="btn btn-outline w-full rounded-lg font-semibold text-xl normal-case hover:text-[#fc621c]"><FaGoogle></FaGoogle>Sign In With Google</button>
          </div>
        </form>
        <div>
          <p className="font-semibold text-black text-center">
            Don’t Have An Account ? Please <NavLink to="/register" className="text-[#fc621c]">Register</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
