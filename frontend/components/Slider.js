import React,{useState} from 'react'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {slides} from "../data"
import Image from 'next/image'
export default function Slider() {
  const [index,setIndex]=useState(0)
  const handleClick=(direction)=>{
    if(direction==="left"){
          setIndex(index >0 ? index-1 :2)
    }
    else if(direction ==="right"){
      setIndex(index <2 ? index+1 :0 )
    }
  }
  console.log(index)
  return (
    <div className='h-56 sm:h-72 md:h-[30rem] bg-pink-400 relative '>
      <ArrowLeftIcon className=' cursor-pointer absolute top-0 bottom-0 m-auto left-1 bg-[#00008B] text-white rounded-full z-20' style={{fontSize:"35px"}} onClick={()=>{handleClick("left")}}/>
      <div className="wrapper flex overflow-x-hidden w-[300vw]  h-full transition-transform"  style={{transform:`translateX(${-100*index}vw)`}} >
        {
          slides.map((item)=>{  

            return <div key={item.id} className="w-[100vw] relative"> <img   src={item.image} className='object-cover h-full w-full' alt="slider" /> </div>  
          })
        }
      </div>
      <ArrowRightIcon className=' cursor-pointer absolute top-0 bottom-0 m-auto right-2  bg-[#00008B] text-white rounded-full  z-20' style={{fontSize:"35px"}} onClick={()=>{handleClick("right")}}/>
    </div>
  )
}
