import React,{useContext} from 'react'
import Image from 'next/image'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Link from 'next/link';
import cartContext from '../context/CartContext';

export default function ProductsItem({item}) {
  const context=useContext(cartContext)
  const {cart,addToCart,clearCart,removeFromCart,subTotal}=context;
  return (
    <div className='w-1/2 md:w-1/4 mx-auto my-4 px-3  flex flex-col flex-wrap relative '>
          <div className="img flex justify-center">
            <img src={item.image} className="object-contain h-52 md:h-96"  alt=""/>
          </div>
            <div className='desc flex flex-col'>
            <span className='text-center font-light text-base'>{item.title}</span>
            <div className='flex justify-center flex-col'>
            <span className='text-xl font-medium text-center'>$<span className='text-2xl font-semibold'>{item.price}</span></span>
                
                </div>
          </div>
          <div className="btns flex mx-auto space-x-1 items-center">
              <div  className='bg-[#000080] text-white rounded-full p-1   '><ShoppingCartIcon onClick={()=>{addToCart(item._id,item.title,"size","color",item.price,1,item.image)}} style={{fontSize:"30px"}}/></div>
              <div  className='bg-[#000080] text-white rounded-full   p-1   '><FavoriteBorderIcon style={{fontSize:"30px"}}/></div>
              <Link href={"/product/"+item._id}>
              <div   className='bg-[#000080] text-white rounded-2xl p-[5px]  md:p-2  '><VisibilityIcon style={{fontSize:"30px"}}/></div></Link>
            </div>
        
    </div>
  )
}
