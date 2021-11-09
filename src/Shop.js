import React ,{useState} from "react"
import Header from "./Header"
import Card from "./Card"
import Sidecart from "./Sidecart"
import FilterButton from "./FilterButton"

function Shop(){

    const [quantity,setQuantity]=useState(0);
    const [cart,setCart]=useState([]);
    const [selectedBrands,setSelectedBrands]=useState([])
    let products=[ 
        {brand:"Logitech",name:"Logitech G Pro Wireless",image:"./gprowireless.png",price:888 ,key:1},
        {brand:"Logitech",name:"Logitech G502",image:"./logitechg502.jpg",price:520,key:2},
        {brand:"Razer",name:"Razer Viper",image:"./razerviper.jpg",price:580,key:3},
        {brand:"Corsair",name:"Corsair K100 RGB Optical",image:"./corsairk100rgb.jpg",price:1080,key:4},
        {brand:"Logitech",name:"Logitech G915 Lightspeed",image:"./logitechg915.jpg",price:1200,key:5},
        {brand:"Keychron",name:"Keychron K6",image:"./keychronk6.jpg",price:820,key:6},
        {brand:"Razer",name:"Razer Huntsman Elite",image:"./razerhuntsmanelite.jpg",price :940,key:7},
        {brand:"Steelseries",name:"SteelSeries Apex Pro",image:"./steelseries7pro.jpg",price:1200,key:8},
        {brand:"LG",name:" LG 27GN950-B",image:"./lg27gn.jpg",price:4500,key:9},
        {brand:"Gigabyte",name:"Gigabyte G27Q",image:"./gigabyteg27q.jpg",price:3680,key:10},
        {brand:"Alienware",name:" Alienware 25 AW2521HF",image:"./alienware25aw.jpg",price:2580,key:11},
        {brand:"Pixio",name:"Pixio PX277 Prime",image:"./pixiopx277.jpg",price:2630,key:12},
        {brand:"Steelseries",name:"Steelseries Arctis 7P Wireless",image:"./steelseries7pro.jpg",price:1550,key:13},
        {brand:"Asus",name:"Asus ROG Delta S",image:"./asusrogdeltas.jpeg",price:1220,key:14},
        {brand:"Steelseries",name:"Steelseries Arctis 1",image:"./steelseriesarctis1.jpeg",price:580,key:15},
        {brand:"Razer",name:"Razer Barracuda X",image:"./razerbarracudax.jpeg",price:800,key:16},
        {brand:"Astro",name:"Astro A50 Gen 4",image:"./astroaa50gen4.jpeg",price:1200,key:17},
        {brand:"AOC GH300",name:"AOC GH300",image:"./aocgh300.jpeg",price:580,key:18},
        {brand:"Razer",name:"Razer Blackshark V2",image:"./razerblacksharkv2.jpg",price:880,key:19},
        {brand:"Steelseries",name:"Steelseries Arctis Pro Wireless",image:"./steelseriesapexpro.png",price:1220,key:20},
        {brand:"Razer",name:"Razer Blackshark V2 Pro",image:"./razerblacksharkv2.jpg",price:1340,key:21},
        {brand:"Razer",name:"Razer Strider",image:"./razerstrider.jpg",price:200,key:22},
        {brand:"Corsair",name:"Corsair MM300 Extended",image:"./corsairmm300.jpg",price:180,key:23}
    ]

    let brands=products.reduce(function(arr,product){
        return arr[product.brand]?++arr[product.brand]:arr[product.brand]=1,arr
    },{})

    let brandList=Object.keys(brands).map(function(brand){
        return <FilterButton passBrands={setSelectedBrands}brandName={brand} numProducts={brands[brand]}/>
    })

    // function brandChange(){
    //     let brandList=document.querySelectorAll(".brand-checkbox");

    //     let checkedBrands=[]
    //     for (let i=0;i<brandList.length;i++){
    //         if(brandList[i].checked===true){
    //             checkedBrands.push(brandList[i].name)
    //         }
            

    //     }

    //     console.log(checkedBrands);

    //     setSelectedBrands(checkedBrands);

    //     console.log(selectedBrands);

    // }
    let outputProducts="";
    if(selectedBrands.length===0){
        outputProducts=products
        .map(function(product){
            return <Card passQuantity={setQuantity} passCart={setCart}key={product.key}title={product.name} image={product.image} price={product.price} id={product.key}/>
        })
    }else{
        outputProducts=products
        .filter(function(product){
            return selectedBrands.includes(product.brand)
        })
        .map(function(product){
            return <Card passQuantity={setQuantity} passCart={setCart}key={product.key}title={product.name} image={product.image} price={product.price} id={product.key}/>
        })
    }

    function toggleCart(){
        if( document.querySelector(".cart").style.display === "block"){
            document.querySelector(".cart").style.display = "none";
        }
        else if(document.querySelector(".cart").style.display === "none"){
            document.querySelector(".cart").style.display ="block"
        }
       
    }


    function getQuantity(){
        let quantity=0;
        if(cart!==undefined){
            for(let i=0;i<cart.length;i++){
                quantity+=cart[i].cartq
            }
        }
        
        return quantity;
    }

    let cartquantity=getQuantity();
       
    return(
        <div>
            <Header cartQuantity={quantity} currentcart={cart}/>
            <div className="main">
                <div className="filter">
                    <h1>Brand</h1>
                    {brandList}
                    {/* <button type="button" onClick={brandChange}>Search</button> */}
                </div>
                <div className="products-list">
                    {outputProducts}
                </div>
                <Sidecart cart={cart} passCart={setCart}/>
                <button onClick={toggleCart}id="show-cart" type="button"><i className="fas fa-shopping-cart fa-3x"></i><span className="circle-cart-size">{cartquantity}</span></button>

            </div>

            
        </div>
   
    )
}

export default Shop

  // "homepage":"http://tingkangkoh.github.io/Ecommerce",