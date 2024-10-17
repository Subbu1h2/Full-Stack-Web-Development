
import { useState } from "react";

import './style.css'

let FunctionBased = () =>{
   const [state,setState] = useState({
    trainInfo: "Morning Function Express at 8:00 AM"
   });
   let handleChangeTrainInfo = ()=>{
       setState({trainInfo: "Evening Funtion Express at 5:00 PM"})
   }
    return(
        <div className='func-info'>
        <h1>This is Function based Component</h1>
        <h2>{state.trainInfo}</h2>
        <button onClick={handleChangeTrainInfo}>Update</button>
        </div>
    )
}

export default FunctionBased;