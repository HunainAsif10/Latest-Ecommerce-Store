import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from "next/link"
export default function SocialHeader() {
  return (
    <div className='  justify-between bg-[#ebebeb]  px-3 hidden md:flex'>
     <div className="left ml-4 space-x-1 py-2 ">
      <FacebookIcon className="text-[#7e7e7e] text-3xl rounded hover:text-[#3b5998] cursor-pointer"/>
      <InstagramIcon className="text-[#7e7e7e] text-3xl rounded hover:text-[#8a3ab9] cursor-pointer"/>
      <TwitterIcon className="text-[#7e7e7e] text-3xl rounded hover:text-[#00acee] cursor-pointer"/>
      <WhatsAppIcon className="text-[#7e7e7e] text-3xl rounded hover:text-[#25D366] cursor-pointer"/>
     </div>
     <div className="right">
        <div className="buttons space-x-2 py-1">
            <Link href={"/Login"}><button className="text-white bg-[#00008B] p-2 font-semi-bold rounded hover:bg-[#2a52be]">Login</button></Link>
            <Link href={"/Register"}> <button className="text-[#00008B] bg-white p-2 font-bold rounded hover:bg-gray-300 ">Register</button></Link>
        </div>
     </div>
    </div>
  )
}
