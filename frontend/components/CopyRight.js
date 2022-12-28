import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';
import Link from 'next/link'
export default function CopyRight() {
  return (
    <div className="bg-[#00008B] flex  flex-col md:flex-row md:justify-between md:px-10 items-center space-y-1 py-3">
      <div className='left text-white space-x-2'>
        <CopyrightIcon/>
        <span>All Rights are Reserved</span>
      </div>
      <div className="right text-white space-x-2">
        <span >Developed By</span>
        <span className="text-lg font-serif cursor-text border-b-2 border-white"  rel="noreferrer">Bathall</span>
      </div>

    </div>
  )
}