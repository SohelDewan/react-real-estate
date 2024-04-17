import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import userDefaultPic from "../assets/user.png";

const Navbar = () => {

  const { logout, user } = useAuth();

  const nabLinks = (
    <>
      <li className="md:mr-6">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="md:mr-6">
        <NavLink to="/login">Login</NavLink>
      </li>
      <li className="md:mr-6">
        <NavLink to="/register">Register</NavLink>
      </li>
      <li className="md:mr-6">
        <NavLink to="/estate-section-page">Estate Section</NavLink>
      </li>
      <li className="md:mr-6">
        <NavLink to="/update-profile">Update Profile</NavLink>
      </li>
    </>
  );

  return (
    <div id="estate-section-full" className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {nabLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          Residential<span className="text-[#30B6EC]">Homes</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[#30B6EC] font-bold">
          {nabLinks}
        </ul>
      </div>
      <div className="navbar-end">
              <p className="text-[#30B6EC] tooltip z-99 tooltip-bottom" data-tip={user?.displayName}>user profile</p>
        {user ? (
          <div className="dropdown dropdown-end">
          
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full " >
                <img
                  src={user?.photoURL || "https://i.ibb.co/m8CkQrr/sohel.jpg"}
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[11] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button className="btn btn-sm  btn-ghost tooltip" data-tip={user.displayName}>
                  {user?.displayName || "user name not found"}
                </button>
              </li>
              <li>
                <button onClick={logout} className="btn btn-sm  btn-ghost">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full ">
                        <img src={userDefaultPic} />Login
                    </div>
                </label>
            <p className="hover:bg-[#30B6EC] px-2 rounded-xl">Login</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
