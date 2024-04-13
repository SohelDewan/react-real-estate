import useAuth from "../Hooks/useAuth";

const SocialLogin = () => {

  const { googleLogin, githubLogin, twitterLogin } = useAuth();
  return (
    <>
      <div className="flex mx-auto items-center gap-2 justify-center mt-4">
        <div className="divider">Contitue with</div>
        <button
          onClick={() => googleLogin()}
          className="btn bg-[#30B6EC] text-white"
        >
          Google
        </button>
        <button
          onClick={() => githubLogin()}
          className="btn bg-[#30B6EC] text-white"
        >
          GitHub
        </button>
        <button
          onClick={() => twitterLogin()}
          className="btn bg-[#30B6EC] text-white"
        >
          Twitter
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
