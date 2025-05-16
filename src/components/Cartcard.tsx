import React from 'react';

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

interface Props {
    img: string;
    product: {
      item: Item; 
      size: string; 
      quantity: number;
    };
    onAdd: (product: Item, size: string) => void;
    onRemove: (product: Item, size: string) => void;
}

const Cartcard: React.FC<Props> = (props) => {
    const {product, onAdd, onRemove, img} = props;
    const isMaxQuantity = product.quantity >= product.item.sizes[product.size].quantity;

    return (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="flex items-center p-4">
                <div className="flex-shrink-0 w-32 h-32">
                    <img 
                        className="w-full h-full object-cover rounded-md" 
                        src={img} 
                        alt={product.item.name}
                    />
                </div>
                
                <div className="ml-6 flex-1">
                    <div className="flex justify-between">
                        <div>
                            <h3 className="text-lg font-medium text-gray-900">
                                {product.item.name}
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                                Size: {product.size}
                            </p>
                        </div>
                        <p className="text-lg font-medium text-gray-900">
                            ${(product.quantity * product.item.price).toFixed(2)}
                        </p>
                    </div>

                    <div className="mt-4 flex items-center">
                        <div className="flex items-center border border-gray-200 rounded-md">
                            <button 
                                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-150"
                                onClick={() => onRemove(product.item, product.size)}
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"/>
                                </svg>
                            </button>
                            <span className="px-4 py-2 text-gray-900">
                                {product.quantity}
                            </span>
                            <button 
                                className={`p-2 transition-colors duration-150 ${
                                    isMaxQuantity 
                                    ? 'text-gray-400 cursor-not-allowed' 
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                }`}
                                onClick={() => !isMaxQuantity && onAdd(product.item, product.size)}
                                disabled={isMaxQuantity}
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
                                </svg>
                            </button>
                        </div>
                        {isMaxQuantity && (
                            <span className="ml-3 text-sm text-gray-500">
                                Maximum quantity reached
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cartcard;