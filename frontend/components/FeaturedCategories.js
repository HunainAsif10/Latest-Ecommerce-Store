import React from 'react'
import { feautred } from '../data'
import FeaturedCategoriesItem from './FeaturedCategoriesItem'
export default function FeaturedCategories() {
  return (
    <div >
      <h1 className="text-3xl text-[#000080] font-extrabold text-center py-3 border-b-3  border-b-4 w-3/4 pb-2 mx-auto border-[#000080] md:w-72">Featured Products</h1>
      <div className="flex flex-col mx-4 my-3 md:flex-row md:mx-3 "  >

      {
        feautred.map((item)=>{
          return <FeaturedCategoriesItem item={item} key={item.id}/>
        })
      }
      </div>


    </div>
  )
}