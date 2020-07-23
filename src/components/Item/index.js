import React,{Component} from "react"
import BurgerImage from '../../assets/burger.jpg'
import './style.css'

class Items extends React.Component {
    render(){
        return(
            <div class='container'>
                <img src={BurgerImage} class="food-image" alt='burger'/>
                <div class='container-content'>
                    <div class="item-detail">
                        <label>need to add icon</label>
                        <h1>{this.props.itemName}</h1>
                        <h6>Containments</h6>
                        {this.props.discount>0&&<h3>{this.props.discount}% OFFER APPLIED</h3>}
                    </div>
                    <div class='price'>
                        {this.props.discount>0?
                            <>
                            <h2 style={{textDecoration:'line-through'}}>{this.props.price}</h2>
                            <h2 >{this.props.price-(this.props.price * this.props.discount/100)}</h2>:
                            </>
                            :
                            <h2>{this.props.price}</h2>
                            }
                    </div>
                    <button className='optionbutton'>Extra Cheese</button>
                    <button className='optionbutton'>Extra suger</button>
                    <button className='optionbutton'>Extra Patty</button>

                </div>
                
                <div class = 'quantity'>
                    <button name='sub' onClick={this.props.decreasequantity}>-</button>
                    <label>{this.props.quantity}</label>
                    <button name='add' onClick={this.props.increasequantity}>+</button>
                </div>
                <div className='cancelbutton'>
                <button >X</button>

                </div>
                </div>
            
        )
    }
}

export default Items