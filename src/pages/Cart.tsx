import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/NavBar";
import Cartcard from "../components/Cartcard";


interface Item {
    
    _id: string;
    product: string;
    name: string;
    img: string;
    price: number;
    sizes:{
    [size: string]: {
      size: string;
      quantity: number;
    }
  }
}

interface CartItem {
    item: Item;
    size: string;
    quantity: number;
   
  }

interface Props  {
    onAdd: (item:Item, size: string) => void;
    onRemove: (item:Item, size:string) => void;
    checkOut: () => void;
    cartItems: CartItem[];
  
}



const Cart: React.FC<Props> = (props) =>{
    const {cartItems, onAdd, onRemove, checkOut} = props;
    const navigate = useNavigate();
    const navigateToThankYou = () => {
        navigate('/order');
    };
    console.log("CART ITEMS IN CART", cartItems)
    
    let total = 0
    let tax = 0;
    let finalTotal = 0

    const calculateTotal = () =>{
        for(let i = 0; i < cartItems.length; i++){
            total = cartItems[i].quantity * cartItems[i].item.price + total
            tax = total * .075
            finalTotal = total + tax
        } 
    }
    calculateTotal()
    return(
    <div>
   <Header/>
   <h2 className="mb-4 mt-10 text-4xl font-extrabold text-center ">Your Cart</h2>
        <div className="container my-12 mx-auto px-4 md:px-12 ">
                <div className="flex flex-wrap -mx-1 lg:-mx- ">

                
            {cartItems.length === 0 && <div>Cart is empty</div>}
            {cartItems.map((item) => {
                return(
                <Cartcard
                key={item.size + item.item._id }
                product={item}
                img={item.item.img}
                onAdd={onAdd}
                onRemove={onRemove}
                />
                )}
           
        )}
         </div>
            </div>
        <div className="ml-auto px-20 pb-20 flex justify-end ">
            <div className="relative">   
            </div>
            {total !== 0 &&  <div>    
                <div className="text-right">
                <p> ${total.toFixed(2)} </p>
                <p>Tax ${tax.toFixed(2)}</p>
                <p>Total:${finalTotal.toFixed(2)}</p>
                </div>
        {cartItems.length !== 0 && <button className="mr-auto bg-transparent hover:bg-black-400 text-black-700  font-semibold
                        py-.75 px-2 border border-black hover:border-transparent rounded "
                      onClick={()=>{checkOut();navigateToThankYou()}}>Check Out</button>}
                      
                    </div>
                      }
            </div>
       
    </div>
)};





export default Cart;



