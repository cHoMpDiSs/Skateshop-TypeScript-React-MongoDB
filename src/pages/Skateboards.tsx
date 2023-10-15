import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Card from  '../components/Card'

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
interface Props {

    onAdd: (item: Item, size: string) => void;
    cartItems: CartItem[]; 
}

const Skateboards: React.FC<Props> = (props) => {
  const [skateboard, setSkateboard] = useState<Item[]>([]);
  const { onAdd, cartItems } = props;

  useEffect(() => {
    skateboards();
  }, []);

  const skateboards = async () => {
    const response = await fetch('https://susaf-b1c07c666ead.herokuapp.com/api/skateboards');
    setSkateboard(await response.json());
  };

  return (
    <div>
      <Header />
      <h2 className="mb-4 mt-10 text-4xl font-extrabold text-center">Skateboards</h2>
      <div className="container my-12 mx-auto px-4 md:px-12 ">
        <div className="flex flex-wrap -mx-1 lg:-mx-">
          {skateboard.map((product) => {
            return (
              <Card
                key={product._id}
                cartItems={cartItems}
                onAdd={onAdd}
                item={product}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skateboards;
