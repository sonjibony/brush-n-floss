import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    //STATE
    const [user, setUser] = useState(null);
const[loading, setLoading] = useState(true);

    //signUp
    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    }

    //sign in
    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

//update user name/ photo
const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
}

    //SIGN OUT
    const logOut = () =>{
        setLoading(true);
return signOut(auth);
    }

    //observer
    useEffect( () => {
    const unsubscribe =    onAuthStateChanged(auth, currentUser =>{
            console.log('observing');
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    },[])

const authInfo ={
createUser,
signIn,
updateUser,
logOut,
user,
loading,
}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;