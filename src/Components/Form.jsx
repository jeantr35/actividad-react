import React, { Fragment, useState, useContext, createContext } from "react";
import { useForm } from "react-hook-form";
import '../Styles/FormStyle.css'
import Age from "./Age";

const Formulario = ({ setData }) => {

  const [user, setUser] = useState({
    name: '',
    age: -1,
    occupation: ''
  });

  const SendData = () => {
    let name = user.name;
    let age = user.age;
    let occupation = user.occupation;
    setData({ name, age, occupation });
  }

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (event) => {
    console.log(user.name + " " + user.age + " " + user.occupation)
  };
  const handleInputChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });

  }



  return (
    <Fragment>
      <form className="form-data" onSubmit={handleSubmit(SendData)}>

        <input onChange={handleInputChange}
          type="text"
          name="name"
          className="form-control my-2"
          placeholder="Ingrese su nombre"
        />
        <input onChange={handleInputChange}
          type="number"
          name="age"
          className="form-control my-2"
          placeholder="Ingrese su edad"
        />
        <select name="occupation" onChange={handleInputChange}>
          <option value="choose">--Seleccione la profesion--</option>
          <option value="student">Estudiante</option>
          <option value="employee">Empleado</option>
          <option value="retired">Jubilado</option>
        </select>

        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
          <Age age={user.age} />
      </form>
    </Fragment>
  );
};

export default Formulario;
