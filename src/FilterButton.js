import React from "react"

function FilterButton(props){

    function handleChange(event){
        console.log(event.target.name);
        console.log(event.target.checked);

        props.passBrands(function(prevBrands){
            let newBrands=[]
            if(event.target.checked){
                newBrands=[...prevBrands]
                newBrands.push(event.target.name)
            }
            else{
                newBrands =prevBrands.filter(function(brand){
                    return brand!==event.target.name
                })
            }

            return newBrands;
        })
    }
 
    return (
        <div>
            <label>{props.brandName}({props.numProducts})</label>
            <input class="brand-checkbox" type="checkbox" name={props.brandName} onChange={handleChange}></input>
        </div>

    )
}

export default FilterButton