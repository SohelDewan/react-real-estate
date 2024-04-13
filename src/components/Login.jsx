import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import SocialLogin from "./SocialLogin";

const Login = () => {
  // eslint-disable-next-line no-unused-vars
  const { createUser } = useAuth();
    
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    console.log(form.get('password'));
  };
  return (
    <div>
      <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/4 mx-auto bg-[#2B3440] p-3 rounded-2xl text-white">
        <h2 className="text-3xl text-center mt-6 font-bold">Please Login</h2>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input 
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered text-[#30B6EC]"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered text-[#30B6EC]"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover text-white">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#30B6EC] text-white border-0">Login</button>
        </div>
      </form>
      <p className="text-center mt-4">Do not have an account!  <Link className="text-[#30B6EC] font-bold" to='/register'> Register</Link></p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
