import React from "react"
import Header from "./Header"
import {Link}from "react-router-dom"
function Home(){
    return(
        
        <div class="home" div style={{ 
            backgroundImage: `url("./logitech.png")` 
          }}>
            <Header/>
            
                
                <Link to="/shop"><button type="button" className="shop-now">Shop Now</button></Link>
                
            </div>
       
        
    )
}

export default Home