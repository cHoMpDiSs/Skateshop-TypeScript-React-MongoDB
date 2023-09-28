import React from 'react';
import { useState } from 'react';
import {Route, Routes} from "react-router-dom"
import Main from './pages/Main';
import Skateboards from './pages/Skateboards';
import Cart from './pages/Cart';


interface CartItem {
  item: Item;
  size: string;
  quantity: number;
 
}

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


const App: React.FC = () => {
  const [checkOutItems, setCheckOutItems] = useState<CartItem[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const onAdd = (item: Item, size: string) => {
    const exist = cartItems.find((x) => x.item._id === item._id && x.size === size);
    console.log(exist, 'exist');
    if (exist && item.sizes[size].quantity >= 1 && exist.size === size) {
      const newArr: CartItem[] = [...cartItems];
      for (let i = 0; i < newArr.length; i++) {
        if (newArr[i].item._id === item._id && newArr[i].size === size) {
          console.log('NEW ARR', newArr[i].item._id);
          console.log('PRODUCT ID', item._id);
          newArr[i].quantity++;
          console.log(newArr[i].quantity, 'NEW ARRRAYYYYYY Quantity');
        }
      }
      setCartItems(newArr);
      console.log(cartItems + ' adding more cart items.');
    } else {
      setCartItems([...cartItems, { item:item, size, quantity: 1 }]);
      console.log(cartItems + ' empty cart or new item being added');
    }
  };

  console.log(cartItems, 'CART ITEMS');

  const onRemove = (item: Item, size: string) => {
    const newCartArr = [...cartItems];
    console.log('ITEM----->', item, 'size---->', size);
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].item._id === item._id && cartItems[i].size === size) {
        newCartArr[i].quantity--;
        if (newCartArr[i].quantity === 0) {
          newCartArr.splice(i, 1);
        }
      }
    }
    setCartItems(newCartArr);
  };

  const checkOut = () => {
    console.log(cartItems, 'CART ITEMS IN CHECKOUT');

    for (let i = 0; i < cartItems.length; i++) {
      const newSizes = { ...cartItems[i].item.sizes };
      const idString = cartItems[i].item._id;
      const typeString = cartItems[i].item.product;
      const size = cartItems[i].size;
      newSizes[size].quantity = cartItems[i].item.sizes[size].quantity - cartItems[i].quantity;
      console.log(typeString, 'TYPE STRING');
      console.log(idString, 'ID STRING');
      const productSize = cartItems[i].size;
      console.log(productSize, 'PRODUCT SIZE');

      fetch(`https://susaf-b1c07c666ead.herokuapp.com/api/${typeString}/${idString}`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'PATCH',
        body: JSON.stringify({
          sizes: newSizes,
        }),
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {});

      setCheckOutItems([]);
      setCartItems([]);
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Main onAdd={onAdd} cartItems={cartItems}/>}/>
      <Route path="/skateboards" element={<Skateboards onAdd={onAdd} cartItems={cartItems}/>}/>
      <Route path="/cart" element={<Cart onAdd={onAdd} checkOut={checkOut} onRemove={onRemove}cartItems={cartItems}/>}/>
    </Routes>
  );
}










export default App;