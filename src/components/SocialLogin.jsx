import useAuth from "../Hooks/useAuth";

const SocialLogin = () => {

  const { googleLogin } = useAuth();
  return (
    <>
      <div className="flex mx-auto items-center gap-3 justify-center">
        <div className="divider">Contitue with</div>
        <button
          onClick={() => googleLogin()}
          className="btn bg-[#30B6EC] text-white"
        >
          Google
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
