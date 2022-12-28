import React from 'react'
import AdminAddProduct from '../../../adminComponents/AdminAddProduct'
import AdminNavbar from '../../../adminComponents/AdminNavBar'
import AdminSideBar from '../../../adminComponents/AdminSideBar'


export default function Users() {
  return (
    <div>
      <AdminNavbar/>
      <div  className='flex  w-[100%]  h-full'>
       <AdminSideBar/>
       <AdminAddProduct/>
      </div>
    </div>
  )
}