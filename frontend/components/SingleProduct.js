import React, { useState,useEffect, useContext } from 'react'
import cartContext from '../context/CartContext'
 
export default function SingleProduct(props) {
  const context=useContext(cartContext)
  const {cart,addToCart,clearCart,removeFromCart,subTotal}=context;
  const [product,setProduct]=useState()
 
  const [quantity,setQunatity]=useState(1)
  const handleQuantity=(direction)=>{
    if(direction==="left"){
      setQunatity(quantity-1)
    }
    else if(direction === "right"){
      setQunatity(quantity+1)
    }
  }
  const host=process.env.NEXT_PUBLIC_URL;
  const {id}=props
  console.log(id)
 
  const getProduct=async()=>{
   console.log(id)
   const data=await fetch(`${host}/product/getProduct/${id}`,{
    method:"GET",
    headers:{
      "Content-type":"application/json"
    },
   })
    const res=await data.json()
    setProduct(res.product)
  }
  useEffect(()=>{
    getProduct();
  },[])
  return (
    <>
   {product && <div className='mx-2 mt-4 mb-3  md:w-full '>
      <div className='md:flex sm:flex md:mx-16 space-x-7 mx-auto'>
        <div className="img h-56 mx-auto sm:h-64 w-full  md:h-[30rem] md:w-96   md:flex-[1]">
            <img src={product.image} className=' w-ful h-full mx-auto rounded' alt="" />
        </div>
        <div className="desc flex flex-col md:flex-[1] md:mt-16 mx-auto">
            <span className='title text-2xl font-bold text-center md:mt-3'>{product.title}</span>
            <span className='desc font-light text-xl py-2'>{product.description}</span>
            <span className='text-xl'>$<span className='text-2xl font-semibold'>{product.price}</span></span>
            <div className="opt space-y-2 flex flex-col mr-3 md:flex-row md:space-x-3 md:items-center">

            <select name="size" id="" className='focus:outline-[#00008B] mb-4 mt-3 md:mt-5 p-2 md:w-44 border-2 md:h-11'>
              {product.size.map((item)=>{
                return <option value="" key={item}>{item}</option>
              })}
              
              
            </select>
            <select name="color" id=""  className='focus:outline-[#00008B] mb-4  p-2 md:w-44 border-2 md:h-11'>
               
              {product.color.map((item)=>{
                return <option value={item} key={item}>{item}</option>
              })}
            </select>
            <div className='qty flex items-center'>
            <button className='bg-[#00008B] text-white px-2 text-xl rounded mr-2'  onClick={()=>{handleQuantity("left")}}>-</button>
            <button>{quantity}</button>
            <button className='bg-[#00008B] text-white px-2 text-xl rounded ml-2' onClick={()=>{handleQuantity("right")}}>+</button>
            </div>
            </div>
        </div>
        </div>
        <div className='btn flex space-x-2 w-full mt-4 justify-center   mx-auto'>
            <button onClick={()=>{addToCart(id,product.title,"size","color",product.price,quantity,product.image)}} className='bg-[#00008B] text-white w-36 p-2 rounded font-semibold'>Add To Cart</button>
            <button className='bg-[#00008B] text-white w-36 p-2 rounded font-semibold '>Add To WishList</button>
        </div>
    </div>}
    </>
  )
}
