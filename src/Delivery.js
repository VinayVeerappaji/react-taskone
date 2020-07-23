import React,{Component} from "react"
import './App.css'


class Delivery extends React.Component {
    render(){
        return(
            <div>
                <hr/>
                <div className="delivery-type">
                
                <button>Take Away</button><br/>
                <button>Reserve a Table</button><br/>
                <button>Bring it to me</button><br/>
                
            </div>
            <hr/>
            </div>
            

        )
    }
}
 export default Delivery