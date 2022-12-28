import React from 'react'

export default function ContactComponent() {
  return (
    <div>
   <h1 className='text-center text-[#000080] font-bold text-2xl border-b-4 mt-3 border-[#000080] w-2/3 py-4 mx-auto md:w-72'>Feel free to Contact Us</h1>
      <form action="" className='my-3 mx-4  md:w-3/4 md:ml-32'>
        <div className="formItem flex flex-col py-3">
            <label className='text-lg text-[#000080] px-2 ' htmlFor="">Name</label>
            <input className='p-2 border-b-2 w-5/6 focus:outline-none md:w-2/3' type="text" placeholder='Enter Your Name' />
        </div>
      
        <div className="formItem flex flex-col py-3">
            <label className='text-lg text-[#000080] px-2 ' htmlFor="">Email</label>
            <input  className='p-2 border-b-2 w-5/6 focus:outline-none  md:w-2/3 ' type="text" placeholder='Enter Your Email'/>
        </div>
      
        <div className="formItem flex flex-col py-3">
            <label className='text-lg text-[#000080] px-2 ' htmlFor="">Contact</label>
            <input  className='p-2 border-b-2 w-5/6 focus:outline-none  md:w-2/3' type="text" placeholder='Enter Your Contact Number' />
        </div>
        <button className="bg-[#000080] text-white p-2  rounded text-lg">Submit</button>
      </form>
    </div>
  )
}