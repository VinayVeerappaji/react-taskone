import React,{Component} from "react"


class Bill extends React.Component {
    render(){
        console.log(this.props)
        return(
            <div class="bill-container">
                <div class="details">
                    <h3>Total</h3>
                    <h3>Tax Charges</h3>
                </div>
                <div class="price">
                    {`Rs ${this.props.values[0]}`}
                    {`$${this.props.values[1]}`}
                </div>
                <h3>Coupon Code</h3>
                <input type="textbox" />
                <button>Find</button>
                <h4>To Pay</h4>
                <h2>{`$${this.props.values[2]}`}</h2>
            </div>

        )
    }
}
 export default Bill