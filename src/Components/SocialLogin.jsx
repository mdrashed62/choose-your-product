import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSocialLogin = (socialProvider) => {
    socialProvider()
      .then((result) => {
        console.log("Login successful:", result.user);
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });  // Navigate to the path from which the user came, or to the home page.
      })
      .catch((error) => {
        console.error("Social login error:", error);
      });
  };

  return (
    <div className="mb-4">
      <div className="lg:w-3/4 mx-auto">
        <button
          onClick={() => handleSocialLogin(googleSignIn)}
          className="btn w-full px-4 lg:px-8 py-3 rounded-lg bg-blue-500"
        >
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
