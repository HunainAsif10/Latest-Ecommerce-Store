import React from 'react'
import Link from 'next/link'
import HomeIcon from '@mui/icons-material/Home';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

export default function AdminSideBar() {
  return (
    <div className=" ">
        <ul className="bg-[#f0f2f5] w-16 h-full flex  flex-col space-y-8 md:justify-center  md:w-40    pl-2 pt-4 pb-3 text-[#00008B] flex-[1]  ">
            
          <Link href={"/admin"}>  <li className=" cursor-pointer flex flex-col md:my-6   md:flex-row md:items-center md:py-3 text-blue-600 md:px-2"><HomeIcon style={{fontSize:"35px"}}/><span className="w-12 md:text-xl">Home</span></li></Link>
          <Link href={"/admin/users"}> <li className=" cursor-pointer flex flex-col  md:my-6    md:flex-row md:items-center md:py-3 text-blue-600 md:px-2"><PeopleAltIcon style={{fontSize:"35px"}}/><span className="w-12 md:text-xl">Users</span></li></Link>
           <Link href={"/admin/orders"}> <li className=" cursor-pointer flex flex-col  md:my-6     md:flex-row md:items-center md:py-3 text-blue-600 md:px-2  "><AccountBalanceIcon style={{fontSize:"35px"}}/><span className="w-12 md:text-xl">Orders</span></li></Link>
           <Link href={"/admin/products"}> <li className=" cursor-pointer flex flex-col  md:my-6     md:flex-row md:items-center md:py-3 text-blue-600 md:px-2  "><ProductionQuantityLimitsIcon style={{fontSize:"35px"}}/><span className="w-12 md:text-xl">Products</span></li></Link>
           <Link href={"/"}> <li className=" cursor-pointer flex flex-col  md:my-6    md:flex-row md:items-center md:py-3 text-blue-600 md:px-2 border-b-4 border-blue-500"><ShoppingBasketIcon style={{fontSize:"35px"}}/><span className="w-12 md:text-xl">Shop</span></li></Link>
           
           
            
        </ul>
    </div>
  )
}