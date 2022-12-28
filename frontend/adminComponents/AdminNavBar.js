import React from 'react'
export default function AdminNavbar() {
  return (
    <div className="bg-blue-400 h-16 flex items-center w-full justify-between px-3 text-white md:sticky top-0 left-0">
       <div className="profile flex items-center justify-between space-x-2">
         <span>Abc-xyz</span>
        
      </div>
      <div className="logo flex">
      <img className="w-12 h-12 border-2 border-white rounded-full" src="/img/logo.png" alt="" />
        
      </div>
      <div className="menu">
         <button className='text-xl border-2 border-white p-2 rounded'>Logout</button>
      </div>
     
     
    </div>
  )
}