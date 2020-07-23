import React,{Component} from "react"


class Bill extends React.Component {
    render(){
        console.log(this.props)
        return(
            <div class="bill-container">
                <hr/>
                <div className="top-line">
                <div class="details">
                    <label>Total</label><br/>
                    <label>Tax Charges</label>
                </div>
                <div class="amount">
                   <label>{`Rs ${this.props.values[0].toFixed(2)}`}</label> <br/>
                    <label>{`Rs ${this.props.values[1].toFixed(2)}`}</label>
                </div>
                </div>
                <div className="bottom-line">
                    <div className="coupon">
                        <label>Coupon Code</label>
                        <input type="textbox" />
                        <button>Find</button>
                    </div>
                    
                    <div className="total">
                    <label>To Pay</label>
                    <label><strong>{`$${this.props.values[2].toFixed(2)}`}</strong></label>
                    </div>
                </div>
                
            </div>

        )
    }
}
 export default Bill