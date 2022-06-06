import React, { useState, useContext } from "react";
import { useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import {Navigate} from "react-router-dom"
import axios from "axios"
import {useNavigate} from "react-router-dom"

const Login = () => {

const [email,setEmail]=useState("");
const [password,setPassword]=useState("")
const navigate=useNavigate();


// useEffect(()=>{

//   axios({
//     url:"https://reqres.in/api/users",
//     method:"POST",
//     data:{
//       email,
//       password
//     }
//   })
//   .then((res)=>{
    
//   alert("sucess")
 
//   }).catch((err)=>{
//   alert(err)
//   })
  
//   },[])

const handleSubmit=(e)=>{
e.preventDefault();
console.log("hi")

navigate("/product")

}



  return (
    <div>
      {/* <form onSubmit={handleSubmit}> */}
      <input data-cy="login-email" type="email" placeholder="enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input data-cy="login-password" type="password" placeholder="enter password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button data-cy="login-submit" onClick={handleSubmit}>Login</button>
      {/* </form> */}
    </div>
  );
};

export default Login;
