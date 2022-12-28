import { useState } from "react";
import productContext from "./ProductContext";


const ProductState=(props)=>{
    const host=process.env.NEXT_PUBLIC_URL;
    const [product,setProduct]=useState()
    const addProduct=()=>{

    }
    const getProduct=()=>{

    }
    const deleteProducts=()=>{

    }
    const updateProduct=()=>{

    }
    const getAllProducts=async()=>{
        const data=await fetch(`${host}/product/getAllProducts`,{
            method:"GET",
            headers:{
                "Content-type":"application/json"
            }
        })
        const res=await data.json();
        // console.log(res)
        setProduct(res.products)
      
    }
    
    return (
        <productContext.Provider value={{getAllProducts,product}}>
            {props.children}
        </productContext.Provider>
    )
}

export default ProductState;