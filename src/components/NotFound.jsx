import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className='text-center'>
            <h1 className='text-[300px]'>404</h1>
            <h2>Not Found</h2>
            <Link to='/'>
            <button className="btn btn-ghost text-xl">
            Go to Home page</button>
            </Link>
        </div>
    );
};

export default NotFound;