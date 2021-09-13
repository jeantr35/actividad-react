import React, { Fragment, useState } from 'react'
import { useForm } from "react-hook-form";

const Age = (props) => {

    const [categoria, setcategoria] = useState("")

    const categorizar = () => {
        if(props.age <= 12 && props.age >= 0){
            return "Nino"
        }
        else if(props.age <= 30 && props.age >= 0){
            return "Joven"
        }
        else if(props.age <= 50 && props.age >= 0){
            return "Adulto"
        }
        else if(props.age > 50 && props.age >= 0){
            return "Mayor"
        }
        else{
            return "No definido"
        }
    }



    return ( 
        
        <Fragment>
            <h5>Usted esta categorizado como: {categorizar()}</h5>
        </Fragment>

     );
}
 
export default Age;