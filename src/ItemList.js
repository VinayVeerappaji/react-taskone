import React, { Component } from "react"
import Item from './components/Item'
import Bill from './Bill';


class ItemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [{
                itemName: 'Hamburger',
                quantity: 0,
                price: 100,
                discount: 0,
            },
            {
                itemName: 'Hamburger-1',
                quantity: 4,
                price: 50,
                discount: 10,
            },
            {
                itemName: 'Hamburger-2',
                quantity: 1,
                price: 70,
                discount: 5,
            },

            ]
        };
        this.changequantity = this.changequantity.bind(this)
        this.values = this.values.bind(this)
    }

    changequantity(index, value) {
        this.setState(prevState => {
            let newItemsStateArray = prevState.items;
            if (newItemsStateArray[index].quantity >= 0){
                newItemsStateArray[index].quantity = newItemsStateArray[index].quantity + value;

            }
            return {
                items: newItemsStateArray
            }
        })
    }

    values() {
        const total = this.state.items.reduce(function (accumulator, currentValue) {
            const valueToBeAdded = currentValue.price.discount>0 ? 
            (currentValue.price*currentValue.quantity-(currentValue.price*currentValue.quantity*(currentValue.price.discount/100)))
            :
            (currentValue.price*currentValue.quantity);
            const newTotal = accumulator + valueToBeAdded 
            return  newTotal
            }, 0);
        const tax = total*0.13
        const totalWithTax = total*1.13

        return [total, tax, totalWithTax]
    }
    render() {



        return (
            <div>
                {
                    this.state.items.map((item, index) => {
                        return <Item
                            key={index}
                            quantity={item.quantity}
                            itemName={item.itemName}
                            price={item.price}
                            discount={item.discount}
                            increasequantity={() => this.changequantity(index, 1)}
                            decreasequantity={() => this.changequantity(index, -1)}
                        />
                    })
                }
                <Bill values={this.values()} />
            </div>
        )
    }
}

export default ItemList