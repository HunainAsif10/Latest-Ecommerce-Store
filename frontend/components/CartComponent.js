import React,{useContext,useEffect, useState} from 'react'
import cartContext from '../context/CartContext';

import Link  from "next/link"
import Image from 'next/image'
export default function CartComponent() {
    const [open,setOpen]=useState(false);

 
  
    const context =useContext(cartContext);
    const {cart,setCart,addToCart,clearCart,removeFromCart,subTotal}=context;
    

    useEffect(() => {
       try {
        if(localStorage.getItem("cart")){
            setCart(JSON.parse(localStorage.getItem("cart")))
        }
       } catch (error) {
        localStorage.clear();
       }
    
       
    },[setCart])

    console.log(Object.keys(cart))
  return (
     <div className='w-[90%]  mx-auto mt-4 '>
        <h1 className='text-2xl text-[#00008B] text-center py-3 font-bold'>Your Orders</h1>
        <ul className='flex  justify-between items-center px-3 mb-2 bg-[#00008B] text-white rounded-lg p-2'>
            <li className='text-lg font-semibold'>Products</li>
            <li className='text-lg font-semibold'>Qunatity</li>
            <li className='text-lg font-semibold'>Total</li>
            
        </ul>
        {/* items */}   
         
              {Object.keys(cart).map(item=>{
                return <div key={item} className='flex justify-between  bg-gray-200 pt-4 px-5 md:items-center'>

            
                <div className="left flex-[1] md:flex md:mb-2 ">
                    <div className="img w-16  md:w-32 md:mr-3">
                        <img src={cart[item].productImage} className='rounded' alt="" />
                    </div>
                    <div className="desc flex flex-col md:mt-4 ">
                        <span className='text-base font-light '>{cart[item].productName}</span>
                        <span className='text-base font-medium'>${cart[item].productPrice}</span>
                    </div>
                </div>
                <div className="center">
                <div className='qty flex items-center flex-[1] ml-7 '>
                <span className='text-xl font-bold '>{cart[item].productQuantity}</span>
                    </div>
                </div>
                <div className="right text-xl font-semibold flex-[1] text-right">${cart[item].productPrice *cart[item].productQuantity}.00</div>
            </div>
              }) }
               
                 

            {Object.keys(cart).length >=1?<div className="checkout">
                <h1 className='text-center text-2xl text-[#00008B] font-bold'>CheckOut to Pay</h1>
                 <div className="total bg-gray-200 px-3 py-5  md:w-1/3 md:mx-auto">
                    <div className="total flex justify-between border-b-2 border-[#00008B] py-2">
                    <span className='text-2xl font-bold text-[#00008B]'>SubTotal</span>
                    <span className='text-xl font-semibold text-[#00008B]'>${subTotal}</span>
                    </div>
                    <div className="total flex justify-between border-b-2 border-[#00008B] py-2">
                    <span className='text-2xl font-bold text-[#00008B]'>Shipping</span>
                    <span className='text-xl font-semibold text-[#00008B]'>$20</span>
                    </div>
                    <div className="total flex justify-between border-b-2 border-[#00008B] py-2">
                    <span className='text-2xl font-bold text-[#00008B]'>Total</span>
                    <span className='text-xl font-semibold text-[#00008B]'>$200</span>
                    </div>
                 </div>
                 <div className="checkout mt-2 md:mx-auto w-40 ">
                    
                <Link href="/Checkout"><button className='bg-[#00008B] text-white font-semibold w-40 p-2 rounded'>CheckOut To Pay</button></Link>
                 <button onClick={clearCart} className='bg-[#00008B] text-white font-semibold w-40 p-2 mt-3 rounded'>Clear Cart</button>
                 </div>
            </div>: <div className="text-center font-semibold">Your Cart is Empty!</div>
}
     </div>
       
  )
}
