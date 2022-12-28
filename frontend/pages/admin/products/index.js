import React, {useEffect, useContext } from 'react'
import AdminNavbar from '../../../adminComponents/AdminNavBar'
import AdminSideBar from '../../../adminComponents/AdminSideBar'
import AdminProductTable from '../../../adminComponents/AdminProductTable'
import productContext from "../../../context/admin/ProductContext";
export default function Users() {
  const context=useContext(productContext)
  const {getAllProducts,product}=context;

  useEffect(()=>{
    getAllProducts();
  })
  return (
    <div>
      <AdminNavbar/>
      <div  className='flex  w-[100%]  h-full'>
       <AdminSideBar/>
       <AdminProductTable product={product}/>
      </div>
    </div>
  )
}