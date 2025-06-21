import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ApiCreatContext } from '../../Context/MainContextProvider';

const Login = () => {
    const {logins} = useContext(ApiCreatContext)
    const navigate = useNavigate()
    const [errors, setErrors] = useState()

    const handleLogin = (e)=>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,email,password)


        logins(email,password)
        .then(res=>{
            console.log(res.user)
            navigate('/')
            e.target.reset()

        })
        .catch(error=>{
            console.log(error.message)
            setErrors(error.message)
        })
    }


    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 mx-auto shadow-2xl">
             <p className='text-red-700'>{errors}</p>
             <h1 className="text-5xl font-bold my-3">Login now!</h1>
          <form onSubmit={handleLogin} className="card-body">
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
              <button className="btn btn-primary">Login</button>
            </div>
            <p>You have already an accont <NavLink className='text-red-600' to='/register'>'Register'</NavLink></p>
          </form>
        </div>
    );
};

export default Login;