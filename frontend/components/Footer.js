import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import Image from 'next/image'
import Link from 'next/link'
export default function Footer() {
  return (
    <div className="flex flex-col bg-[#f0f2f5] border-b-2 border-white text-[#00008B] md:flex-row md:justify-between md:w-full md:px-6 md:pb-5">
      <div className="links ml-4 border-b-2 border-white md:flex-1 md:mt-4 ">
        <h1 className="text-lg font-bold border-b-4 w-1/3 border-[#00008B] ">Quick Links</h1>
        <ul className='font-semibold  pt-2 md:pt-4'>
         <Link href={"/"}> <li className="hover:border-b-2 border-[#00008B] w-12 cursor-pointer">Home</li></Link>
         <Link href={"/About"}><li className="hover:border-b-2 border-[#00008B] w-12 cursor-pointer">About</li></Link>
         <Link href={"/Contact"}><li className="hover:border-b-2 border-[#00008B] w-16 cursor-pointer">Contact</li></Link>
        </ul>
      </div>
      <div className="help ml-4 md:flex-1 md:mt-4">
        <h1 className="text-lg font-bold border-b-4  w-1/3 border-[#00008B]">Need Help</h1>
        <ul className='flex flex-col space-y-2 pt-2 md:pt-4'>
          <li>info@bszsurgico.com</li>
          <li><LocalPhoneIcon className="pr-2"/>055-7373737</li>
          <li><ContactPhoneIcon className="pr-2"/>+923239292929</li>
          <li><WhatsAppIcon className="pr-2"/>+92338383838</li>
        </ul>
      </div>
      <div className="about ml-4 mt-4 md:flex-1 ">
        <h1 className="font-bold text-lg border-b-4 w-1/6 md:w-1/5 border-[#00008B]">About</h1>
        <p className=' w-2/3 font-semibold pt-2 md:pt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing  delectus omnis cumque dolorum vitae, sit mollitia eaque aliquid?</p>
      </div>
      <div className="payments flex-1 md:mt-4 ml-4">
        <h1 className="font-bold text-lg border-b-4 w-1/4 md:w-1/3 border-[#00008B ]">Payments</h1>
        <Image  src="/img/payment.png" width={80} height={80} alt="" />
        <p className='font-semibold'>if you have any incovinence in payment method you can place your order through whatsapp</p>
      </div>
    </div>
  )
}