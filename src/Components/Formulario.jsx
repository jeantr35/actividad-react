import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";

const Formulario = () => {

  const[user, setUser] = useState({
        name:'',
        age:0,
        occupation:''
    });

  const { register, handleSubmit, errors } = useForm();

  const [arrayUsers, setArrayUsers] = useState([])
  
  const onSubmit = (event) => {
    setUser({
        ...user,
        [event.target.name] : event.target.value
        
      });
  };
  const handleInputChange = (event) =>{
    setUser({
      ...user,
      [event.target.name] : event.target.value
      
    });
    
  }

  
  const [registered, setRegistered] = useState(false);

  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input onChange = {handleInputChange}
            type="text"
            name="name"
            className="form-control my-2"
            placeholder="Ingrese su nombre"
          />
          <button type="submit" className="btn btn-primary">
               Enviar
            </button>
        </div>
      </form>
    </Fragment>
  );
};

export default Formulario;
