import React from "react";
import { useState, useEffect } from "react";

const Ordercard = () => {

    const [orderNumber, setOrderNumber] = useState("")    
    useEffect(()=>{
        const generateOrder = (orderNumber) => {
            const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
            const numbers = ["0","1","2","3","4","5","6","7","8","9"]
            let orderString = "";
            for (let i = 0; i <= 8; i++){
                let letterOrNumber = Math.floor(Math.random() * 2 - 1 + 1) + 1
                let randomIndexNum = Math.floor(Math.random() * numbers.length)
                let randomIndexAlph = Math.floor(Math.random() * (alphabet.length))
                console.log(letterOrNumber, "LETTER OR NUMBER")
                console.log("RANDOM ALPHA NUM", alphabet[randomIndexAlph])
                console.log("RANDOM NUM NUM ", numbers[randomIndexNum])
                console.log(orderNumber, "ORDER NUMBER")
                
                if (letterOrNumber === 1){
                    orderString += alphabet[randomIndexAlph];
                }else{
                    orderString += numbers[randomIndexNum];
                }
            }setOrderNumber(orderString)
        }
        generateOrder();
        
    }, [])
    return (
        
            <div className="my-10 px-1 w-full lg:my-4 lg:px-4 ">
                <div className="text-center">
                    </div>
                <div className="rounded-lg shadow-lg align-center">
                <p className="mb-2 pt-2 text-center font-bold tracking-tight dark:text-black">Thank you for your order</p>
                <p className="mb-2 pt-2 text-center font-bold tracking-tight dark:text-black">Your order number is # {orderNumber}</p>
            <img className="lg:w-10/12 mx-auto" src="images/susaf.png" alt="sus-logo"/>
        
        </div>
        </div>
        
    )
}

export default Ordercard;