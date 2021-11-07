import React from "react"

function Cartitem(props){

    function addQuantity(){
        // props.passCart(function(prevCart){
        //     console.log(prevCart);
        // })
        props.editCart(function(prevCart){
            console.log(prevCart)
            let newCart=[...prevCart]

            for(let i=0;i<prevCart.length;i++){
                if(prevCart[i].title===props.name){
                    newCart[i].cartq=prevCart[i].cartq+1
                }
            }

            return newCart
        })
    }

    function lessQuantity(){
        props.editCart(function(prevCart){
            console.log(prevCart)
            let newCart=[...prevCart]

            for(let i=0;i<prevCart.length;i++){
                if(prevCart[i].title===props.name){
                    newCart[i].cartq=prevCart[i].cartq-1
                }
            }

            return newCart
        })

    }
    return(
        <div className="cart-item">
            <p>
                <span className="cart-item-title">{props.name}</span>
                <span className="cart-item-total">${props.price*props.quantity}</span>
                {/* <span>x{props.quantity}</span> */}
            </p>
            <p className="cart-item-counter">
                <button className="cart-item-button" type="button" onClick={lessQuantity}>-</button> 
                <span className="cart-item-quantity">{props.quantity}</span>
                <button className="cart-item-button" type="button" onClick={addQuantity}>+</button>
            </p>
            
        </div>
    )
}

export default Cartitem