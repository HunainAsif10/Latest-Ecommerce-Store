import  React,{useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { userRows } from '../adminData';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import Link from "next/link"



const columns  = [
  { field: 'id', headerName: 'ID', width: 120 },
  { field: 'name', headerName: 'Name', width: 130},
  {
    field: 'email',
    headerName: 'Email',
    width: 130,
  },
  {
    field: 'contact',
    headerName: 'Contact',
    width: 120,
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
 
export default function AdminUserTable() {
  
  return (
    <div  className='md:w-1/2 w-3/4  mx-auto mt-4' >
       <h1 className='text-center text-2xl font-bold text-[#00008B] py-3'>Users</h1>
     
    <div style={{height:540}}>
      <DataGrid
        rows={userRows}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
    </div>
  );
}
