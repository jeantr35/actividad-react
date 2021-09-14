import React, { Fragment, useState, useContext, createContext } from "react";
import { useForm } from "react-hook-form";
import '../Styles/FormStyle.css'
import Age from "./Age";
import Table from './Table'

const Formulario = ({ setData }) => {

  const [users, setUsers] = useState([])

  const [user, setUser] = useState({
    name: '',
    age: -1,
    occupation: '',
    category: '',
    attitudes: []
  });

  const SendData = (e) => {
    let name = user.name;
    let age = user.age;
    let occupation = user.occupation;
    let category = user.category;
    let attitudes = user.attitudes;
    setData({ name, age, occupation, category, attitudes});
    setUsers([
      ...users,
      user
    ])
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
      <form className="formData" onSubmit={handleSubmit(SendData)}>
        <h1>Prueba React</h1>
        <input onChange={handleInputChange}
          type="text"
          name="name"
          className="form-control my-2"
          placeholder="Ingrese su nombre"
        />
        <input  onChange={handleInputChange}
          type="number"
          name="age"
          className="form-control my-2"
          placeholder="Ingrese su edad"
        />
        <select name="occupation" onChange={handleInputChange}>
          <option value="choose">--Seleccione la profesion--</option>
          <option value="Estudiante">Estudiante</option>
          <option value="Empleado">Empleado</option>
          <option value="Jubilado">Jubilado</option>
        </select>

        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
          <Age age={user.age} user={user} />
      </form>
      <Table users={users}/>
    </Fragment>
  );
};

export default Formulario;
