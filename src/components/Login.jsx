import { Link } from "react-router-dom";

const Login = () => {
    
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    console.log(form.get('password'));
  };
  return (
    <div>
      <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
        <h2 className="text-3xl text-center mt-6">Please Login</h2>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-center mt-4">Do not have an account!  <Link className="text-blue-700 font-bold" to='/register'> Register</Link></p>
    </div>
  );
};

export default Login;
