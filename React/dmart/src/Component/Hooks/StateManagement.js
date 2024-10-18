import { useState } from 'react'
import '../style.css'

let StateManagement = () =>{
    let [state, setState]  = useState(0)
    console.log(state);
    let handleCount = () =>{
        // setState(0)
        // setState(state + 1)
        // setState(state + 3)
         
        // setState((prevState) =>{
        //     return prevState + 1
        // })
         setState(prevState => prevState + 1)
         setState(prevState => prevState + 1)
         setState(prevState => prevState + 1)
    }
    let minusCount = () =>{
         setState(prevState => prevState - 1)
    }
    let multiplyCount = () =>{
        setState(prevState => prevState * 2)
    }
    let diviCount = () => {
        setState(prevState => prevState / 2)
    }
    return(
        <div className='train-info'>
           <h1>State Management Count: {state}</h1>
           <button onClick={handleCount}>Count++</button> 
           <br/>
           <button onClick={minusCount}>Count--</button>
           <br/> 
           <button onClick={multiplyCount}>Count**</button> 
           <br/>
           <button onClick={diviCount}>Count//</button> 
        </div>
    )
}
export default StateManagement;