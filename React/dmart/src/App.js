import "./App.css";
import  ClassBased  from './Component/ClassBased'
import  FunctionBased  from "./Component/FunctionBased";
import StateManagement from "./Component/Hooks/StateManagement";
function App() {
  // (conditional rendering)
  // let showComponent = false;
  // return (
  // showComponent ? <ClassBased/> : <FunctionBased/>
  // )
  return (
    <div className="App">

      welcome to react js classes
      <ClassBased/>
      <FunctionBased/>
      <StateManagement/>
    </div>
  );
}

export default App;
