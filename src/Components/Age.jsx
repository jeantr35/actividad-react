import React, { Fragment } from 'react'
import { useForm } from "react-hook-form";

const Age = (props) => {

    const categorizar = () => {
        if(props.age <= 12){
            return "Nino"
        }
        else if(props.age <= 30){
            return "Joven"
        }
        else if(props.age <= 50){
            return "Adulto"
        }
        else{
            return "Mayor"
        }
    }

    return ( 
        
        <Fragment>
            <h5>Usted esta categorizado como: {categorizar()}</h5>
        </Fragment>

     );
}
 
export default Age;