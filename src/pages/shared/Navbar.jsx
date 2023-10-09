import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/Ca1 (1).png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("user logged out");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-black underline" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-black underline" : ""
          }
        >
          Login
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/register"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-black underline" : ""
          }
        >
          Register
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink
              to="/feedback"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-black underline" : ""
              }
            >
              Feedback
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/newArrival"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-black underline" : ""
              }
            >
              New Arrival
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <nav className="bg-[#fc621c] py-6 lg:py-8">
      <div className="flex justify-between items-center container mx-auto px-6">
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="text-2xl text-white">
            <FaBars></FaBars>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content mt-3 z-[1] p-4 shadow bg-slate-50 rounded-box w-52 font-semibold text-lg text-[#fc621c]"
          >
            {navLinks}
            <div className="mt-4">
              {user && (
                <>
                  <div className="flex items-center justify-between">
                    <div>
                      <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar"
                      >
                        <div className="w-10 rounded-full">
                          <img src={user.photoURL} />
                        </div>
                      </label>
                    </div>
                    <div>
                      <span className="block font-semibold text-sm text-center">
                        {user.displayName}
                      </span>
                      <button
                        onClick={handleLogOut}
                        className="btn btn-xs btn-outline"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </ul>
        </div>
        <div>
          <img className="w-40 md:w-44 lg:w-52" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-12 font-semibold text-xl text-white">
            {navLinks}
          </ul>
        </div>
        <div className="hidden lg:block">
          {user && (
            <>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src={user.photoURL} />
                    </div>
                  </label>
                </div>
                <div>
                  <span className="block font-semibold text-sm text-center">
                    {user.displayName}
                  </span>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-xs btn-outline"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
