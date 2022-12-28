import  React,{useContext, useEffect, useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
// import { productRows } from '../adminData';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import Link from "next/link"



const columns  = [
  { field: '_id', headerName: 'ID', width: 120 },
  { field: 'title', headerName: 'Product', width: 130,renderCell:(params)=>{
    return (
      <div className="flex items-center ">
      <img className='w-8 h-8 rounded-full  border-2 border-black mr-3 object-cover' src={params.row.image} alt="" />
      {params.row.title}
   </div>
    )
  } },
  {
    field: 'price',
    headerName: 'Price',
    width: 130,
  },
  {
    field: 'category',
    headerName: 'Category Name',
    width: 120,
  },
  {
    field: 'subCategory',
    headerName: 'Sub Category Name',
    width: 170,
  },
   {
    field:'action',
    headerName:"Actions",
    width:150,
    renderCell:(params)=>{
      return (
        <div className='text-blue-800'>
          <Link href={"/"}>
        <RemoveRedEyeIcon className="text-[#00008B]"/>
          </Link>
          <Link href={"/"}>
        <DeleteIcon className="text-[#00008B]"/>
          </Link>
        </div>

      )
    }
   },
   
  
   
];
 
export default function AdminProductTable({product}) {
 
  // console.log(product)
  return ( <>
    {product &&
   
    <div  className='w-3/4  mx-auto mt-4' >
       <h1 className='text-center text-2xl font-bold text-[#00008B] py-3'>Products</h1>
     
    <div style={{height:530}}>
      <DataGrid
        rows={product}
        columns={columns}
        pageSize={8}
        getRowId={(row)=>row._id}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
    </div>
    }</>
  );
}
