import React, { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
 const [isAuth,setIsAuth]=useState(false)

 const toggle=()=>{
  setIsAuth(!isAuth)
 }


  return <AuthContext.Provider value={[toggle,isAuth]}>{children}</AuthContext.Provider>;
};
