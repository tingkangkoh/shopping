import React,{useState} from "react"
import {Link}from "react-router-dom"
function Header(props){


    function getQuantity(){
        let quantity=0;
        if(props.currentcart!==undefined){
            for(let i=0;i<props.currentcart.length;i++){
                quantity+=props.currentcart[i].cartq
            }
        }
        
        return quantity;
    }

    let quantity=getQuantity()
  
    return(
        <header>
            <nav>
                <ul>
                    <li className="logo"><h1 className="title">Electronic Mafia</h1></li>
                    {/* <li><Link to="/">Home</Link></li> */}
                    {/* <li><Link to="/shop">Shop</Link></li> */}
                    {/* <li>
                        <Link to={{ pathname: `/cart`, state: {cart:props.currentcart } }}> 
                        <i className="fas fa-shopping-cart"></i></Link> 
                    </li>
                    <li>
                        <div className="cart-number"><span className="cart-quantity">{quantity}</span></div>
                    </li> */}
                </ul>
            </nav>
        </header>
    )
}

export default Header