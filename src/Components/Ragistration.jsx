import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../Providers/AuthProvider";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const from = '/';  // Redirect path after successful registration

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const password = form.get('password');
    console.log(name, email, password);

    createUser(email, password, name)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // Redirect to home page after successful registration
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div data-aos="flip-down" data-aos-duration="2000" className="card shrink-0 w-full mb-6 max-w-sm bg-gray-300 mx-auto">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="relative">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type={showPassword ? "text" : "password"} placeholder="password" name="password" className="input input-bordered" required />
            <span className="absolute top-[53px] right-3" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn w-full btn-primary">Register</button>
          <p className="text-center">
            Already have an account? Please{" "}
            <span className="text-red-500 font-bold">
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Registration;
