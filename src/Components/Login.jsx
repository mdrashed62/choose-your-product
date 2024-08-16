import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "./SocialLogin";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // Redirect to the previous page or home page after successful login
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="card shrink-0 w-full mb-4 max-w-sm shadow-xl bg-gray-300 border mx-auto">
        <form onSubmit={handleLogin} className="card-body">
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
          <div className="relative">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <span
                className="absolute top-[53px] right-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn w-full rounded-lg bg-green-500">
              Login
            </button>
          </div>
          <p className="text-center">
            New here? please{" "}
            <span className="text-red-500 font-bold">
              <Link to="/registration">Register</Link>
            </span>
          </p>
          <h2 className="font-bold text-xl text-green-500 text-center">Continue With</h2>
        </form>
        <SocialLogin />
      </div>
    </div>
  );
};

export default Login;
