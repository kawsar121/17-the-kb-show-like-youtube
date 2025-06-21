
import React, { useContext } from "react";
import { ApiCreatContext } from "../../Context/MainContextProvider";
import { useNavigate } from "react-router-dom";

const Profile = () => { 
    const {userUpdate} = useContext(ApiCreatContext)
    const navigate = useNavigate()
    const handleUpdate = (e)=>{
        e.preventDefault()
        const name = e.target.name.value
        const photo = e.target.photo.value
        console.log(name, photo)

        userUpdate({displayName:name, photoURL:photo})
        .then(()=>{
            navigate('/')
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 mx-auto shadow-2xl">
             {/* <p className='text-red-700'>{errors}</p> */}
             <h1 className="text-3xl font-bold my-3">Update profile!</h1>
          <form onSubmit={handleUpdate} className="card-body">
            <div className="form-control">
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-4">
              <input
                type="url"
                placeholder="Photo"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
    );
};

export default Profile;  