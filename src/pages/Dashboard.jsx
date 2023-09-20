//ruta protegida
import React, { useEffect } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from '../utils/firebase';
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const auth = getAuth(app)
  const navigate = useNavigate();

useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if(user){
      alert("bienvenido");
    }else{
      alert("inicie sesion por favor!")
      navigate("./login");
    }


  })




}, [])



  return (
   <h1 className="text-white">ruta protegida</h1>
  )
}

export default Dashboard
