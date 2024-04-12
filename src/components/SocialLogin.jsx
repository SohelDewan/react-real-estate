import useAuth from "../Hooks/useAuth";

const SocialLogin = () => {

    const {googleLogin} = useAuth()
    return (
        <>
        <div className="">Contitue with</div>
        <div>
           <button onClick={()=>googleLogin} className="btn btn-primary">Google</button> 
        </div>
        </>
    );
};

export default SocialLogin;