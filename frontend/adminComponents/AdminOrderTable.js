import  React,{useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { orderRows } from '../adminData';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import Link from "next/link"



const columns  = [
  { field: 'id', headerName: 'ID', width: 120 },
  { field: 'email', headerName: 'Email', width: 130 },
  {
    field: 'amount',
    headerName: 'Amount',
    width: 100,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 120,
  },
  
   {
    field:'action',
    headerName:'Actions',
    width:150,
    renderCell:(params)=>{
      return (
        <div className='text-blue-800'>
          <Link href={`/orders/${params.row.id}`}>
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
 
export default function AdminOrderTable() {
  
  return (
    <div  className='w-3/4 md:w-1/2  mx-auto mt-4' >
       <h1 className='text-center text-2xl font-bold text-[#00008B] py-3'>Orders</h1>
     
    <div style={{height:530}}>
      <DataGrid
        rows={orderRows}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
    </div>
  );
}
