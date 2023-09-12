import React, { useState } from "react";
import { useForm } from "react-hook-form";
//importar firebase
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import app from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import useLoadin from "../hooks/useLoading";

//morales.elvin.16@gmail.com
//moralees.elvin.16@gmail.com
//123456



const Signup = () => {
    const auth = getAuth(app);
//useState para API
//importar usestate para manejar errores en la intefaz
  const [error,setError ]=useState()

  //para que el boton diga cargando
  //const [loading,setLoading] =useState(false)
  const {loading, startLoading, alto}= useLoadin()

  const { register, handleSubmit, formState: { errors } } = useForm();
  
  //navegar a otras paginas 
  // hooks
  const navigate = useNavigate();
  
  const onSubmit = async  (data) =>{
    
//destructore
const {email, password} = data
//creando nuevo usuario
    try {
      //es para que cree un usuario y se desactive el boton y carga 
     // setLoading(true)
     startLoading
      const use=await createUserWithEmailAndPassword(auth,email,password)
      navigate('/login')
      //setLoading(false)
      alto
    } catch (error) {
      setError(error.message);
      //console.log(error)
      //setLoading(false)
      alto
    }

//promesa
/*createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
      console.log(userCredential);
    })
    .catch((error) => {
      console.log(error);
     
     
    });
*/
}
  return (
    <>
    <div className="container mt-5 d-flex align-items-center justify-content-center">
      <div className="card" style={{ width: 18 + "rem" }}>
        <div className="card-body">
          <h5 className="card-title text-center">Create new account</h5>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <input
                type="text"
                className="form-control"
                {...register('email',{required: true})}
                placeholder="correo electronico"
              />
              {errors.email && <p >el correo es obligatorio</p>}
            </div>
            <div className="mb-2">
              <input
                type="password"
                className="form-control"
                {...register('password',{required: true})}
                placeholder="contraseña******"
              />
              {errors.password && <p >la contraseña es obligatorio</p>}
            </div>
            <div className="d-grid gap-2">
              {
                //if ternario php
                //boton diferente dependiendo 
                loading ? (
                  <button className="btn btn-primary btn-block mt-3" disabled>creando usuario...</button>

                )  : (
                  <button className="btn btn-primary btn-block mt-3">
                Sign up
              </button>
                )
              }
              
            </div>
            {
              /*manejar errores en la pagina */
              error && (
                <div className="alert alert-danger mt-3">
                  {error}
                </div>
              )
            }

          </form>
        </div>
      </div>
    </div>
  </>
    
    );
};

export default Signup