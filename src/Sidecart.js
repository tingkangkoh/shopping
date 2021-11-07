import React from "react"
import Cartitem from "./Cartitem"
function Sidecart(props){



    let cards="";
    let priceTotal=0;
    if(props.cart!==undefined){
        cards=props.cart.map(function(product){
            if(product.cartq>0){
                return <Cartitem key={product.id} editCart={props.passCart}name={product.title} quantity={product.cartq} price={product.price}/>
            }
            return ""
           
        })
        priceTotal=props.cart.reduce(function(total,product){
            if(product.cartq>0){
                return total+product.cartq*product.price
            }
            else{
                return total
            }
        },0)

    }


    function clearCart(){

       props.passCart([])

        
            
        
    }

    

    return(
        <div className="cart" style={{display: "none"}}>
            <h1>Shopping Cart</h1>
            {cards}
            <p className="side-cart-title">Total:<span className="total-price">${priceTotal}</span></p>
            <button className="add-cart" type="button" onClick={clearCart}>Clear Cart</button>
        </div>
    )
}

export default Sidecart