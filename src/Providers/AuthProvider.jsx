import {  getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Children, createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
// import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

//   const axiosPublic = useAxiosPublic();




  const signIn =(email, password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  }


  const logOut =()=>{
    setLoading(true);
    return signOut(auth);
  }

  useEffect(()=>{
    const unsubcribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser);
        setLoading(false);
    })

    return ()=> unsubcribe();
  })

  const authInfo = {
    user,
    loading,
    signIn,
    logOut

  }

  return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
  );
};

export default AuthProvider;
