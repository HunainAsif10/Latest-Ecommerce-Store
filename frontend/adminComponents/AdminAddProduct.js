import React from 'react'

export default function AdminAddProduct() {
  return (
    <div className="w-2/3">
        <h1 className="text-[#1b74e4] text-2xl font-bold pt-4 pl-8 border-b-4  w-56 ml-3 border-[#1b74e4]">Add Products</h1>
      <form action="" className="px-4 pt-4 flex  flex-wrap" >
        <div className="formItem flex flex-col w-56 pb-3 md:w-72 mx-3">
            <label className="text-[#1b74e4] text-lg pb-3 font-bold" htmlFor="">Title</label>
            <input className="py-3 px-3 border-2 border-[#1b74e4] focus:outline-none rounded" type="text" placeholder='Product Name' />
        </div> 
        <div className="formItem flex flex-col w-56 pb-3 md:w-72 mx-3 ">
            <label className="text-[#1b74e4] text-lg pb-3 font-bold" htmlFor="">Description</label>
            <input className="py-3 px-3 border-2 border-[#1b74e4] focus:outline-none rounded" type="text" placeholder='Product Name' />
        </div> 

        <div className="formItem flex flex-col w-56 pb-3 md:w-72 mx-3">
            <label  className="text-[#1b74e4] text-lg pb-3 font-bold" htmlFor="">Category Name</label>
            <input className="py-3 px-3 border-2 border-[#1b74e4] focus:outline-none rounded" type="text" placeholder='Category Name' />
        </div>
        <div className="formItem flex flex-col w-56 pb-3 md:w-72 mx-3">
            <label  className="text-[#1b74e4] text-lg pb-3 font-bold" htmlFor="">SubCategory Name</label>
            <input className="py-3 px-3 border-2 border-[#1b74e4] focus:outline-none rounded" type="number" placeholder='How Much' />
        </div>
        <div className="formItem flex flex-col w-56 pb-3 md:w-72 mx-3">
            <label  className="text-[#1b74e4] text-lg pb-3 font-bold" htmlFor="">Product Price</label>
            <input className="py-3 px-3 border-2 border-[#1b74e4] focus:outline-none rounded" type="number" placeholder='Product Price' />
        </div>
        <div className="formItem flex flex-col w-56 pb-3 md:w-72 mx-3">
            <label  className="text-[#1b74e4] text-lg pb-3 font-bold" htmlFor="">Product Image</label>
            <input  type="file"  />
        </div>
        <div className="formItem flex flex-col w-56 pb-3 md:w-72 mx-3">
            <label  className="text-[#1b74e4] text-lg pb-3 font-bold" htmlFor="">Available Sizes</label>
            <input className="py-3 px-3 border-2 border-[#1b74e4] focus:outline-none rounded" type="text" placeholder='s,m,lg,xl,2xl,3xl'  />
        </div>
        <div className="formItem flex flex-col w-56 pb-3 md:w-72 mx-3">
            <label  className="text-[#1b74e4] text-lg pb-3 font-bold" htmlFor="">Availabe Colors</label>
            <input className="py-3 px-3 border-2 border-[#1b74e4] focus:outline-none rounded" placeholder='red,blue.green' type="text"  />
        </div>
       
      </form>
      <button  className="bg-[#1b74e4] p-3 text-white text-lg rounded font-bold cursor-pointer mx-4">Add Product</button>
    </div>
  )
}