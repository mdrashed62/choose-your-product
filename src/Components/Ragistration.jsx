
import { Link, useNavigate } from "react-router-dom";
import {useState } from "react";

import { FaEye, FaEyeSlash } from "react-icons/fa";
// import Swal from "sweetalert2";
// import { AuthContext } from "../Providers/AuthProvider";



const Registration = () => {

  const [showPassword, setShowPassword] = useState(false);
  

    // const {createUser, updateUserData, setUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const from = '/'

    const handleRegister = (e) =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, email, password)

        //create user
        createUser(email, password, name)
        .then(result =>{
            console.log(result.user)
            updateUserData(name)
            .then(() =>{
              setUser((prevUser)=> {
                return {...prevUser, displayName:name};
              })
             
            //   Swal.fire({
            //     position: "top",
            //     icon: "success",
            //     title: "Registration Successful",
            //     showConfirmButton: false,
            //     timer: 2000
            //   });
              navigate(from)
              e.target.reset()
            })
        })
        .catch(error =>{
            console.error(error)
        })
    }

    return (
        <div data-aos='flip-down' data-aos-duration='2000' className="card shrink-0 w-full mb-6 max-w-sm  bg-gray-300 mx-auto">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="relative">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={showPassword? 'text':'password'} placeholder="password" name='password' className="input input-bordered" required />
         <span className="absolute top-[53px] right-3" onClick={() =>setShowPassword(!showPassword)}>
         {
            showPassword? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
          }
         </span>
        </div>
       </div>
        <div className="form-control mt-6">
         <button className="btn w-full btn-primary">Register</button>
          <p className="text-center">Already have an account? please <span className="text-red-500 font-bold"><Link to='/login'>Login</Link></span></p>
        </div>
      </form>
      
    </div>
    );
};

export default Registration;
