import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Card from "../components/Card";

const Pants = (props) =>{
    const [pant, setPant] = useState([]);
    const {onAdd, cartItems} = props;
    useEffect(() =>{
    pants()
    },[])
    

    const pants = async () =>{
    const response = await fetch('https://susaf-b1c07c666ead.herokuapp.com/api/pants');
    setPant(await response.json())
    }

    return(
        <div>
            <Header/>
            <h2 className="mb-4 mt-10 text-4xl font-extrabold text-center ">Pants</h2>
            <div className="container my-12 mx-auto px-4 md:px-12">
                <div className="flex flex-wrap -mx-1 lg:-mx-">
                {pant.map((product)=>{
             
                        return(
      
                            <Card
                            key={product._id}
                            name = {product.name}
                            img = {product.img}
                            price = {product.price}
                            cartItems = {cartItems}
                            onAdd ={onAdd}
                            product={product}
                           
                        />
  
                        
            
                )}
                )}
            </div>
            </div>
        </div>
    )
 }


export default Pants;