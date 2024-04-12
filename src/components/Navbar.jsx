import { NavLink } from "react-router-dom";


const Navbar = () => {

    const nabLinks = <>
         <li className="md:mr-6"><NavLink to='/'>Home</NavLink></li>
         <li className="md:mr-6"><NavLink to='/login'>Login</NavLink></li>
         <li className="md:mr-6"><NavLink to='/register'>Register</NavLink></li>
         <li className="md:mr-6"><NavLink to='/update-profile'>Update Profile</NavLink></li>
    </>

  return (
    <div className="navbar bg-base-100">
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
        <a className="btn btn-ghost text-xl">Residential<span className="text-[#30B6EC]">Homes</span></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[#30B6EC] font-bold">
        {nabLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-[#30B6EC] text-white">user profile</a>
      </div>
    </div>
  );
};

export default Navbar;
