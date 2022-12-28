import { useState } from "react";
import cartContext from "./CartContext"

const CartState=(props)=>{
    const [cart,setCart]=useState({})
    const [subTotal,setSubTotal]=useState(0)

    const addToCart=(productId,productName,productSize,productColor,productPrice,productQuantity,productImage)=>{
        let newCart=cart;
        if(productId in newCart){
            newCart[productId].productQuantity =cart[productId].productQuantity + productQuantity;
        }
        else{
          newCart[productId] ={productQuantity, productName,productSize,productColor,productPrice}
        }
        setCart(newCart);
        saveCart(newCart);

    }
    const saveCart=(myCart)=>{
        localStorage.setItem("cart",JSON.stringify(myCart))
        let subt=0;
        let keys=Object.keys(cart)
        for(let i=0 ;i<keys.length; i++){
            subt+=myCart[keys[i]].productPrice * myCart[keys[i]].productQuantity

        }
        setSubTotal(subt);
    }
    const clearCart=()=>{
         setCart({})
         saveCart({})
    }
    const removeFromCart=(productId,productName,productSize,productColor,productPrice,productQuantity)=>{
        let newCart=cart;
        if(productId in newCart){
            newCart[productId].productQuantity =cart[productId].productQuantity - productQuantity;
        }
         if(newCart[productId].productQuantity<=0){
            delete newCart[productId]
         }
        setCart(newCart);
        saveCart(newCart);
    }
   return (
    <cartContext.Provider value={{cart,setCart,addToCart,clearCart,removeFromCart,subTotal}}>
        {props.children}
    </cartContext.Provider>
   )


}

export default CartState;