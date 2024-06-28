import React from "react";
import Header from "../components/NavBar";
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
      <div className="lg:mx-48">
        <VideoPlayer />
      </div>
      <div className="flex justify-center mx-10 mb-20 ">
        <Carousel />
      </div>
      <About />
      <div className="container mx-auto px-10 pb-32 text-center ">
        <YouTube src={"https://www.youtube.com/watch?v=BKpNtXmIpR0"} />
        <p className="vid-text">
          Local skater and filmer Sean Grohs and his latest video.
        </p>

        <YouTube src={"https://youtu.be/EbLRuiBVX9E?si=OT2Kc2xoZoX7Y-rQ"} />
        <p className="vid-text">Baker 3 a 2005 masterpiece.</p>

        <YouTube src={"https://youtu.be/OqstOhGpYPc?si=e4JiTTYqf94CjSfx"} />
        <p className="vid-text">
          One of the most epic early 2000's skate videos. Mainly filmed in
          Europe. A timeless classic
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Main;
