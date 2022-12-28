import React from 'react'
import AdminNavbar from '../../../adminComponents/AdminNavBar'
import AdminSideBar from '../../../adminComponents/AdminSideBar'
import AdminUserTable from '../../../adminComponents/AdminUserTable'

export default function Users() {
  return (
    <div>
      <AdminNavbar/>
      <div  className='flex  w-[100%]  h-full'>
       <AdminSideBar/>
       <AdminUserTable/>
      </div>
    </div>
  )
}