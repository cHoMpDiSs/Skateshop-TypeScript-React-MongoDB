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

interface Props {
    onAdd: (item:Item, size: string) => void;
    onRemove: (item:Item, size:string) => void;
    checkOut: () => void;
    cartItems: CartItem[];
}

const Cart: React.FC<Props> = (props) => {
    const {cartItems, onAdd, onRemove, checkOut} = props;
    const navigate = useNavigate();
    
    const navigateToThankYou = () => {
        navigate('/order');
    };

    const calculateTotals = () => {
        const subtotal = cartItems.reduce((total, item) => total + (item.quantity * item.item.price), 0);
        const tax = subtotal * 0.075;
        const finalTotal = subtotal + tax;
        return { subtotal, tax, finalTotal };
    };

    const { subtotal, tax, finalTotal } = calculateTotals();

    return (
        <div className="min-h-screen bg-gray-50">
            <Header/>
            <div className="pt-16 pb-8 bg-black text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-extrabold text-center tracking-tight">
                        Your Cart
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-center text-gray-300">
                        {cartItems.length === 0 ? "Your cart is empty" : `${cartItems.length} item${cartItems.length > 1 ? 's' : ''} in your cart`}
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {cartItems.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-xl text-gray-600">Your cart is empty</p>
                        <button 
                            onClick={() => navigate('/')}
                            className="mt-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 transition duration-300"
                        >
                            Continue Shopping
                        </button>
                    </div>
                ) : (
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                        <div className="lg:col-span-8">
                            <div className="space-y-8">
                                {cartItems.map((item) => (
                                    <Cartcard
                                        key={item.size + item.item._id}
                                        product={item}
                                        img={item.item.img}
                                        onAdd={onAdd}
                                        onRemove={onRemove}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-4 mt-8 lg:mt-0">
                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <h3 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h3>
                                <div className="flow-root">
                                    <dl className="text-sm">
                                        <div className="py-2 flex items-center justify-between">
                                            <dt className="text-gray-600">Subtotal</dt>
                                            <dd className="font-medium text-gray-900">${subtotal.toFixed(2)}</dd>
                                        </div>
                                        <div className="py-2 flex items-center justify-between border-t border-gray-200">
                                            <dt className="text-gray-600">Tax</dt>
                                            <dd className="font-medium text-gray-900">${tax.toFixed(2)}</dd>
                                        </div>
                                        <div className="py-2 flex items-center justify-between border-t border-gray-200">
                                            <dt className="text-base font-medium text-gray-900">Total</dt>
                                            <dd className="text-base font-medium text-gray-900">${finalTotal.toFixed(2)}</dd>
                                        </div>
                                    </dl>
                                    <div className="mt-6">
                                        <button
                                            onClick={() => {checkOut(); navigateToThankYou();}}
                                            className="w-full bg-black text-white py-3 px-4 rounded-md hover:bg-gray-800 transition duration-300 font-medium"
                                        >
                                            Checkout
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;



