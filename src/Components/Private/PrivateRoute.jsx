import React from 'react';
import { useContext } from 'react';
import { ApiCreatContext } from '../../Context/MainContextProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(ApiCreatContext);
    console.log(user);
    if(loading){
        return <span className="loading loading-spinner text-primary text-3xl">Loading...</span>
    }
    if(user){
        return children
    }
    return (
       
            <Navigate to="/login"></Navigate>
        
    );
};

export default PrivateRoute;