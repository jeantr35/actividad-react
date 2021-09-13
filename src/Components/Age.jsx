import React, { Fragment, useState } from 'react'
import { useForm } from "react-hook-form";
import Attitudes from "./Attitudes";


const Age = (props) => {

    const [categoria, setcategoria] = useState("")

    
        if (props.age <= 12 && props.age >= 0) {
            if(categoria != "Nino"){setcategoria("Nino")}
            
        }
        else if (props.age <= 30 && props.age >= 0) {
            if(categoria != "Joven"){setcategoria("Joven")}
            
        }
        else if (props.age <= 50 && props.age >= 0) {
            if(categoria != "Adulto"){setcategoria("Adulto")}
            
        }
        else if (props.age > 50 && props.age >= 0) {
            if(categoria != "Mayor"){setcategoria("Mayor")}
            
        }
        else {
            if (categoria != "No definido") {
                setcategoria( "No definido")
            }
        }
    


    return (

        <Fragment>
            <div className="category">
               
                <h5 >Usted esta categorizado como: {categoria}</h5>
            </div>
            <div className="attitudes">
                <Attitudes category={categoria}/>
            </div>
        </Fragment>

    );
}

export default Age;