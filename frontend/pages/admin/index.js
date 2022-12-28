import React, { useContext, useEffect } from 'react'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CategoryIcon from '@mui/icons-material/Category';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import  Link from "next/link"
import AdminNavbar from '../../adminComponents/AdminNavBar';
import AdminSideBar from '../../adminComponents/AdminSideBar';
import AdminChart from '../../adminComponents/AdminChart';
 
export default function AdminHome() {
 
  return (
    <div className='w-full'>
      <AdminNavbar />
      <div className="flex  w-[100%]  md:min-h-screen">
      <AdminSideBar/>
      <div className="flex flex-col flex-[3]">

        <div className='buttons md:items-center flex flex-col mt-5 ml-3 md:h-54 w-52 md:w-[800px] pl-4 space-y-4 md:flex-row md:space-x-5 p-3'>
          <Link href={"/admin/products/addProduct"}>
            <button className="bg-[#00008B]  text-white text-lg rounded font-bold cursor-pointer  p-2 w-48"> Add Products <ProductionQuantityLimitsIcon/></button>
          </Link>
        </div>
        
       <AdminChart/>
      </div>
      </div>
    </div>
  )
}