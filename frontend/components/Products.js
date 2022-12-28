import React, { useEffect, useState } from 'react'
 
import ProductsItem from './ProductsItem'
 
export default function Products(props) {
  const host=process.env.NEXT_PUBLIC_URL;
 
    const {category,subCategory}=props;
    const [products,setProducts]=useState();
    
   
    const getProducts=async()=>{
     
      const data=await fetch(subCategory?`${host}/product/get/${category}/${subCategory}`:`${host}/product/get/${category}`,{
        method:"GET",
        headers:{
          "Content-Type":"application/json"
        }
      })
     
      const res=await data.json()
       
      setProducts(res)
    }
    useEffect(()=>{
      getProducts();
    })
   
    
  return (
    <div className='mt-3'>
      
       {subCategory?  <h1 className=' text-center text-3xl font-bold text-[#000080] '>{category} | {subCategory}</h1> : <div className=' text-center text-3xl font-bold text-[#000080] '>{category} </div>}
        <div className='flex flex-wrap w-full mt-6  mx-auto'>
          
    {products && products.map((item)=>{
        return <ProductsItem key={item._id} item={item}/>
    }) }
    </div>
    </div>
  )
}



