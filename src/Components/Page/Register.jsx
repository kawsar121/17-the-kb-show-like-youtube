import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ApiCreatContext } from "../../Context/MainContextProvider";
import { auth } from "../../Firebase/firebase.init";

const Register = () => {
    const {regsiter} = useContext(ApiCreatContext)
    const navigate = useNavigate()

    const handleRegister = (e)=>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,email,password)

      regsiter(email,password)
      .then(res => {
        console.log(res.user);
        navigate('/')
        e.target.reset()
      })
      .catch(error=>{
        console.log(error.message)
      })

    }

  return (
          
        <div className="card bg-base-100 w-full max-w-sm shrink-0 mx-auto shadow-2xl">
             <h1 className="text-5xl font-bold">Register now!</h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <p>You have no accont <NavLink className='text-red-600' to='/login'>'Login'</NavLink></p>
          </form>
        </div>
  );
};

export default Register;
