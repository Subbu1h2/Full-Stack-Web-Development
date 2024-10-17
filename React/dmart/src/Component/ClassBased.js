import {Component} from 'react'
import './style.css'
class ClassBased extends Component{
    constructor(){
        super()
        this.state = {
            trainInfo : "Morning class Express at 8:00 Am"
        }
    }
    handleChangeTrainInfo=()=>{
        this.setState({trainInfo:"Evening class Express at 9:00 PM"})
    }
   render() {
    return(
        <div className='train-info'>
        <h1>This is class based Component</h1>
        <h2>{this.state.trainInfo}</h2>
        <button onClick={this.handleChangeTrainInfo}>Update</button>
        </div>

    )
}
}

export default ClassBased;