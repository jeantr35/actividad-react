import React, {useState} from 'react';
import Form from './Components/Form';


function App() {


  
  
  const[NewUser, SetNewUser] = useState({
        name:'',
        age:-1,
        occupation:''
    })

    const setData = (NewUser) =>{
        SetNewUser(NewUser)
        
    }

  return (
    <div className="App">
      <Form setData = {setData}/>
      <h1>HOLA{NewUser.name}</h1>
    </div>
  );
}

export default App;
