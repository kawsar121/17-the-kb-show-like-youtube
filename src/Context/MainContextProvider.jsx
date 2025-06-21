import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile , signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, use, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.init';
export const ApiCreatContext = createContext();
const MainContextProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    console.log(user)


        //Create User
    const regsiter = (email, password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

        //Login User

    const logins = (email, password) =>{
        return signInWithEmailAndPassword(auth,email,password)
        setLoading(true)
    }

        //Set Obserber
    useEffect(()=>{
        const notChanged = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return()=>{
            notChanged()
        }
    },[])

         //Log Out

    const logouts = ()=>{
       return signOut(auth)
    }

    //Update Profile
    const userUpdate = (updated)=>{
        return updateProfile(auth.currentUser, updated)
    }

    const info ={
        regsiter,
        logins,
        user,
        logouts,
        userUpdate,
        loading
    }
    return (
        <ApiCreatContext.Provider value={info}>
            {children}
        </ApiCreatContext.Provider>
    );
};

export default MainContextProvider;