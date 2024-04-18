import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const SocialLogin = () => {

  const { googleLogin, githubLogin, twitterLogin } = useAuth();

  // Navigation synchronization
  const navigate = useNavigate();
  const location = useLocation();
  const form = location?.state || '/'

  const handleSocialLogin = socialProvider =>{
        socialProvider()
        .then(result=>{
          if(result.user){
            navigate(form);
          }
        })
  }
  return (
    <>
      <div className="flex mx-auto items-center gap-2 justify-center mt-4">
        <div className="divider">Contitue with</div>
        <button
          onClick={() =>handleSocialLogin(googleLogin)}
          className="btn bg-[#30B6EC] text-white"
        >
          Google
        </button>
        <button
          onClick={() => handleSocialLogin(githubLogin)}
          className="btn bg-[#30B6EC] text-white"
        >
          GitHub
        </button>
        <button
          onClick={() => handleSocialLogin(twitterLogin)}
          className="btn bg-[#30B6EC] text-white"
        >
          Twitter
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
