import React from "react";
import Header from "../components/Header";
import VideoPlayer from "../components/VideoPlayer";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import About from "../components/About";


interface Item {
    _id: string;
    product: string;
    name: string;
    img: string;
    price: number;
    sizes: {
      [size: string]: {
        size: string;
        quantity: number;
      };
    };
  }

  interface CartItem {
    item: Item;
    size: string;
    quantity: number;
   
  }
  

interface Props {
  onAdd: (item: Item, size: string) => void;
  cartItems: CartItem[]; // Update to expect Item[]
}


const Main: React.FC<Props> = (props) => {
  return (
    <div>
      <Header />
      <div className="lg:mr-48 lg:ml-48">
        <VideoPlayer />
      </div>
      <div className="flex justify-center mb-20">
        <Carousel />
      </div>
      <About />
      <Footer />
    </div>
  );
};

export default Main;