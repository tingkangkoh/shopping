import React from "react"

function Card(props){

    let idname="quantity"

    idname+=props.id

    function addQuantity(){

        let quantity=document.getElementById(idname).value;
        if(quantity==""){
            alert("Please input quantity");
            return
        }
        else if(quantity<0||quantity>100){
            alert("Quantity must be greater than 0 and less than 100")
            document.getElementById(idname).value="";
            return 
        }
        else{
            document.getElementById(idname).value="";
        }
        props.passQuantity(function(prevQuantity){
            return prevQuantity+parseInt(quantity);
        })


        props.passCart(function(prevCart){
            let found=false;
            let newCart=[...prevCart]
            for(let i=0;i<prevCart.length;i++){
                if(newCart[i].title===props.title){
                    newCart[i].cartq=prevCart[i].cartq+parseInt(quantity)
                    found=true
                }
            }
            if(found===true){
                return newCart
            }else{
                // return prevCart.concat({key:props.id,title:props.title,cartq:parseInt(quantity),price:props.price})
                return ([...prevCart,{id:props.id,key:props.id,title:props.title,cartq:parseInt(quantity),price:props.price}])
            }   
           
        })
        console.log(quantity)
    }

  
    return(
        <div className="card">
            <p className="card-title">{props.title}</p>
            <img className="card-image" src={props.image} alt=""></img>
            <p>Price: ${props.price}</p>
            <form>
                <label>Quantity</label>
                <input name="quantity" id={idname} type="number" min="0" max="100">{props.cartq}</input><br></br>
                <button type="button" className="add-cart" onClick={()=>addQuantity()}>Add to Cart</button>
            </form>
            
        </div>
    )
}

export default Card