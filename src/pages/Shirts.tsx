import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/NavBar";
import Card from "../components/Card";
import Footer from "../components/Footer";

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

const Shirts: React.FC<Props> = (props) => {
    const [shirt, setShirt] = useState<Item[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const {onAdd, cartItems} = props;
    const areShirtsRendered = shirt.length > 0;
    
    useEffect(() => {
        shirts();
    }, []);

    const shirts = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('https://susaf-b1c07c666ead.herokuapp.com/api/shirts');
            const data = await response.json();
            setShirt(data);
        } catch (error) {
            console.error('Error fetching shirts:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="pt-16 pb-8 bg-black text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-extrabold text-center tracking-tight">
                        Shirts
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-center text-gray-300">
                        Premium quality apparel for skaters
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {isLoading ? (
                    <div className="flex justify-center items-center min-h-[400px]">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {shirt.map((product) => (
                            <div key={product._id} className="transform hover:scale-105 transition-transform duration-300">
                                <Card
                                    cartItems={cartItems}
                                    onAdd={onAdd}
                                    item={product}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
            
            {areShirtsRendered && <Footer />}
        </div>
    );
};

export default Shirts;