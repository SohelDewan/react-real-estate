import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
// import { useForm } from 'react-hook-form';

const Register = () => {
    const { createUser } = useAuth;

    // const  { register, handleSubmit, watch, formState: { errors }} = useForm();
      
    //     const onSubmit = data => {
    //     console.log(data)
    //   };
    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

        //create user
        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })

    }

    return (
        <div>
            <div>
                <h2 className="text-3xl my-4 text-center">Please Register</h2>
                <form onSubmit={handleRegister} className=" md:w-3/4 lg:w-1/4 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" required name="name" placeholder="Name" className="input input-bordered"/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" required name="photo" placeholder="Photo URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" required name="password" placeholder="Password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#30B6EC] text-white">Register</button>
                    </div>
                </form>
                <p className="text-center mt-4">Already have an account? <Link className="text-[#30B6EC] font-bold" to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;