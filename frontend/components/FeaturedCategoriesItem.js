import React from 'react'
import Image from 'next/image'
import Link from "next/link"
export default function FeaturedCategoriesItem({item}) {
  return (
    <div className=" flex w-[90%]  mx-auto my-3 md:mx-3   flex-col">

       <Image className=" mx-auto cursor-pointer  border-none h-full object-contain border-b-2 py-2 px-3" src={item.image} width={350} height={300} alt="" />
       <h1 className="text-center py-2 font-bold text-lg text-white bg-[#000080]">{item.title}</h1>
       <Link href={`/categories/${item.title}`}>
      <button className='text-[#000080] w-full p-4 bg-white text-lg  font-semibold ' >Show More</button>
       </Link>
    </div>
  )
}