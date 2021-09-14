import React, {useState} from 'react';
import Form from './Components/Form';



function App() {
  
  const[NewUser, SetNewUser] = useState({
        name:'',
        age:-1,
        occupation:'',
        category: '',
        attitudes: []
    })

    

    const setData = (NewUser) =>{
        SetNewUser(NewUser)
        
    }

  return (
    <div className="App">
      <Form setData = {setData}/>
    </div>
  );
}

export default App;
