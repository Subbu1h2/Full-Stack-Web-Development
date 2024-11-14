 import React,{useState} from "react"
 

  const NewComponent=() =>{

    const [state,setState] = useState('');

      const handleChange = (e) =>{
         setState(e.target.value);
      }
      const handleClear =() =>{
         setState('');
      }

 return(
    <div>
      <h2>Type something</h2>
      <input type="text" value={state} onChange={handleChange} placeholder="Type here"/>
      <p>{state}</p>
      <button onClick={handleClear}>Clear text</button>
    </div>
 )
}
export default NewComponent;