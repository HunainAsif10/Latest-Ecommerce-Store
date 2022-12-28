import React, { useContext, useRef } from 'react'
import Link from "next/link"
import Image from "next/image"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
 import cartContext from '../context/CartContext';
export default function Header() {

  const firstRef=useRef()
  const handleFirstClick=()=>{
    if(firstRef.current.classList.contains('hidden')){
      firstRef.current.classList.remove('hidden')
      firstRef.current.classList.add('block')
    }
    else if(firstRef.current.classList.contains('block')){
      firstRef.current.classList.remove('block')
      firstRef.current.classList.add('hidden')
    }
  }
  return (
    <div className='flex pt-3 px-3 justify-between'>
      <div className="left">
       <Link href={"/"}>
          <Image src="/img/logo.png" width={160} height={160} alt=""/>
       </Link>
      </div>
      <div className="center flex space-x-3 pt-2 ">
        <div className="text-xl"><Link href={"/categories/men"}>Men</Link><ArrowDropDownIcon onClick={handleFirstClick}/></div>
        <ul ref={firstRef} className='absolute top-24 hidden w-36  pl-4 bg-white z-20'>
            <Link href={"/men/shirts"}> <li className="text-xl font-semibold">Shirts</li></Link>
            <Link href={"/men/bottoms"}> <li className="text-xl font-semibold">Bottoms</li></Link>
            <Link href={"/men/shoes"}> <li className="text-xl font-semibold">Shoes</li></Link>
            <Link href={"/men/jackets"}> <li className="text-xl font-semibold">Jackets</li></Link>
        </ul>
        <div className="text-xl"><Link href={"/categories/women"}>Women</Link></div>
        <div className="text-xl"><Link href={"/categories/kids"}>Kids</Link></div>
      </div>
      <div className="right pr-12 pt-3">
       <Link href={"/Cart"}>
      <ShoppingCartIcon />
       </Link>
     
      </div>
    </div>
  )
}
