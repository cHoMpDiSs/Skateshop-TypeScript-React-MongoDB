import React from 'react';


const Cartcard = (props) => {
    const {product, onAdd, onRemove, img } = props;
    return(
        <div className="my-1 px-1 w-full lg:my-4 lg:px-4 lg:w-1/3 ">
        <div className="rounded-lg shadow-lg ">
            <img className="object-cover h-96 mx-auto" src={img} alt={product.item.name}></img>
            <div className="text-center pb-3 ">
            <p className="mb- pt- text-center tracking-tight dark:text-black">{product.item.name}</p>
            {product.quantity} x ${product.item.price}                        
                        {product.quantity < product.item.sizes[product.size].quantity ?  <div>
                    <button className="bg-transparent hover:bg-black-400 text-black-700 font-semibold
                             py-.75 px-2 ms- border border-black hover:border-transparent rounded" 
                             onClick={()=>onRemove(product.item,product.size)}>-</button>
                    <button className="bg-transparent hover:bg-black-400 text-black-700 font-semibold
                             py-.75 px-2 ms-2 border border-black hover:border-transparent rounded " 
                             onClick={()=>onAdd(product.item,product.size)}>+</button>
                    </div>
                     : <div className="flex items-center justify-center">
                     <button className="bg-transparent hover:bg-black-400 text-black-700 font-semibold
                             py-.75 px-2 ms-2 border border-black hover:border-transparent rounded"
                             onClick={()=>onRemove(product.item,product.size)}>-</button>
                     <p>You have the maximum {product.item.name} available</p>
                    </div>}
    </div>
    </div>
    </div>
    )
}

export default Cartcard;