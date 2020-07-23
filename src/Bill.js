import React,{Component} from "react"


class Bill extends React.Component {
    render(){
        console.log(this.props)
        return(
            <div class="bill-container">
                <div className="top-line">
                <div class="details">
                    <label>Total</label><br/>
                    <label>Tax Charges</label>
                </div>
                <div class="amount">
                   <label>{`Rs ${this.props.values[0]}`}</label> <br/>
                    <label>{`$${this.props.values[1]}`}</label>
                </div>
                </div>
                <div className="bottom-line">
                    <label>Coupon Code</label>
                    <input type="textbox" />
                    <button>Find</button>
                    
                    <label>To Pay</label>
                    <label><strong>{`$${this.props.values[2]}`}</strong></label>
                </div>
                
            </div>

        )
    }
}
 export default Bill