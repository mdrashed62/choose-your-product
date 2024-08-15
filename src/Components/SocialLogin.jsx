// import { useContext } from "react";
// import { AuthContext } from "../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
//   const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSocialLogin = (socialProvider) => {
    socialProvider()
      .then((result) => {
        console.log("Login successful:", result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error("Social login error:", error);
      });
  };

  return (
    <div className=" mb-4">
      <div className="lg:w-3/4 mx-auto">
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="btn w-full px-4 lg:px-8 py-3 rounded-lg bg-blue-500"
        >
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
