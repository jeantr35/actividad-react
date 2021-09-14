import React from 'react'
import Table from './Table'

function attitudes(props) {

    const allAttitudes = 
        {
            Nino:["Curiosidad", " - ", "Respeto", " - ", "Obediencia"],
            Joven:["Sentido comun", " - ", "Generosidad", " - ", "Prudencia"],
            Adulto:["Responsabilidad", " - ", "Paciencia", " - ", "Organización"],
            Mayor:["Patriotismo", " - ", "Empatia", " - ", "Gratitud"]
        }
    

    const selectAttitudes = () =>{
        if (props.category === "Nino") {
            return allAttitudes["Nino"]
        }else if (props.category === "Joven") {
            return allAttitudes["Joven"]
        }else if (props.category === "Adulto") {
            return allAttitudes["Adulto"]
        }else if (props.category === "Mayor"){
            return allAttitudes["Mayor"]
        }
    }

  
    return (
        <div>
            <h5>{selectAttitudes()}</h5>
            <Table user= {props.user} category = {props.category} />
        </div>
    )
}

export default attitudes
