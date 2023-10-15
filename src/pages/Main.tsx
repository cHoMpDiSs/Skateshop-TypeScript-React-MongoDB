import React from "react";
import Header from "../components/Header";
import VideoPlayer from "../components/VideoPlayer";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import About from "../components/About";
import YouTube from "../components/YouTube";


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
  cartItems: CartItem[];
}


const Main: React.FC<Props> = (props) => {
  return (
    <div>
      <Header />
      <div className="lg:mr-48 lg:ml-48">
        <VideoPlayer />
      </div>
      <div className="flex justify-center ml-10 mr-10 mb-20 ">
        <Carousel/>
      </div>
      <About />
      <div className="lg:mr-48 lg:ml-48">
   
      <YouTube
      src={"https://www.youtube.com/watch?v=BKpNtXmIpR0"}
      />
       <YouTube
      src={"https://youtu.be/EbLRuiBVX9E?si=OT2Kc2xoZoX7Y-rQ"}
      />

      <YouTube
      src={"https://youtu.be/OqstOhGpYPc?si=e4JiTTYqf94CjSfx"}
      />
  </div>
      <Footer />
    </div>
  );
};

export default Main;