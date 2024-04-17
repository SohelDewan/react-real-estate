import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import SocialLogin from "./SocialLogin";
import { RiEyeCloseFill } from "react-icons/ri";
import { RxEyeOpen } from "react-icons/rx";
import { useState } from "react";

const Login = () => {
  // eslint-disable-next-line no-unused-vars
  const { createUser } = useAuth();
  const { signInUser} = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {

    e.preventDefault();

    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);

    const email = form.get('email');
    const password = form.get('password');

    console.log(email, password);

    signInUser(email, password)
    .then((result) => {
       console.log(result.user);
    })
    .catch((error) => {
       console.error(error);
    });
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
          type={showPassword ? 'text' : 'password'}
          placeholder="     Enter your password"
          name="password"
          className="input input-bordered text-[#30B6EC]"
          required
          id='id_password'
          autoComplete="current-password"
          />   
        </div>
          <div className="-mt-8">
          <button onClick={togglePasswordVisibility} className="  text-gray-500">  
          {showPassword ? <RiEyeCloseFill />  : <RxEyeOpen /> }
        </button>
          </div>
          
        <div className="form-control mt-6">
          <button className="btn bg-[#30B6EC] text-white border-0">Login</button>
        </div>
      </form>
      
      <p className="text-center mt-4">Do not have an account!{' '}  <Link className="text-[#30B6EC] font-bold" to='/register'> Register</Link></p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
