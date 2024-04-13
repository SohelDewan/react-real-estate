import { useState } from 'react';
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import SocialLogin from "./SocialLogin";

const Login = () => {
  // eslint-disable-next-line no-unused-vars
  const { createUser } = useAuth();
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword); // Validate password on each change
  };
  const validatePassword = (password) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasMinLength = password.length >= 6;

    if (!hasUppercase || !hasLowercase || !hasMinLength) {
      setPasswordError('Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.');
    } else {
      setPasswordError('');
    }
  };
    
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    console.log(form.get('password'));
    if (validatePassword(password)) {
      // Call Firebase authentication method to create/update user
      // ...
    } else {
      // Display an error message to the user
      alert('Password does not meet requirements.');
    }
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
            value={password}
            onChange={handlePasswordChange}
            id='id_password'
            autoComplete="current-password"
          />
          {/* <i className="far fa-eye" id="togglePassword" style="margin-left: -30px; cursor: pointer;"></i> */}

          {passwordError && <p className="text-red-500">{passwordError}</p>}
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
      <p className="text-center mt-4">Do not have an account!{' '}  <Link className="text-[#30B6EC] font-bold" to='/register'> Register</Link></p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
