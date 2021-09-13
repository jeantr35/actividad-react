import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';

const Formulario = () => {

    const[user, setUser] = useState({
        name:'',
        age:0,
        occupation:''
    });

    const {register,handleSubmit, formState: { errors }} = useForm();

    const onsubmit = (data, e) =>{
        setName(data.name)
        e.target.reset()
    }

    const setName = (name) => {
        setUser({
            ...user,
            ["name"]: name
        })
    }

    const setAge = (age) => {
        setUser({
            ...user,
            ["age"]: age
        })
    }

   return(

    <Fragment>
        <h2>Formulario</h2>
        <form onSubmit={handleSubmit(onsubmit)}>
            <input
                className="form-control my-2"
                name="name"
                {...register("name", { 
                    required:{
                        value: true,
                        message: 'name required' 
                    }
                })}   
            />
            <span className="text-danger text-small d-block mb-2">
                {errors.name &&  errors.name.message}
            </span>
            <button className="btn btn-primary" >Send</button>
        </form>

    </Fragment>

   )

}

export default Formulario;
