import React, { useRef } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PersonIcon from '@mui/icons-material/Person';
import Image from "next/image"
import Link from "next/link"
export default function PhoneBar() {
  const closeRef=useRef()
  const handleClose=()=>{
     if(closeRef.current.classList.contains("translate-x-[-200px]")){
      closeRef.current.classList.remove("translate-x-[-200px]")
      closeRef.current.classList.add("translate-x-[0px]")
     }
     else if(closeRef.current.classList.contains("translate-x-[0px]")){
      closeRef.current.classList.remove("translate-x-[0px]")
      closeRef.current.classList.add("translate-x-[-200px]")
     }
  }
  const refFirst=useRef()
  const refSecond=useRef()
  const refThird=useRef()

  const handleFirst=()=>{
     if(refFirst.current.classList.contains("hidden")){
      refFirst.current.classList.remove("hidden")
      refFirst.current.classList.add("block")
     }
     else if(refFirst.current.classList.contains("block")){
      refFirst.current.classList.remove("block")
      refFirst.current.classList.add("hidden")
  }
}
  const handleSecond=()=>{
     if(refSecond.current.classList.contains("hidden")){
      refSecond.current.classList.remove("hidden")
      refSecond.current.classList.add("block")
     }
     else if(refSecond.current.classList.contains("block")){
      refSecond.current.classList.remove("block")
      refSecond.current.classList.add("hidden")
  }
}
  const handleThird=()=>{
     if(refThird.current.classList.contains("hidden")){
      refThird.current.classList.remove("hidden")
      refThird.current.classList.add("block")
     }
     else if(refThird.current.classList.contains("block")){
      refThird.current.classList.remove("block")
      refThird.current.classList.add("hidden")
  }
}
  return (
    <div className="bg-[#00008B] h-14 flex text-white px-5 pt-2 items-center justify-center md:hidden">
        <div ref={closeRef} className="sidebar absolute top-0 left-0 bg-white text-[#00008B] w-36  flex px-2 pb-5 translate-x-[-200px] transition-transform  z-30">
          <div>
           <div className='pt-6 pl-2 space-y-1'>
            <div>
            <Link href={"/"}>
                    <div className='text-xl font-semibold'>Home</div>
                    </Link>
            </div>
           
                <div className="flex items-center">
                    <Link href={"/categories/men"}>
                    <div className='text-xl font-semibold'>Men</div>
                    </Link>
                <ArrowDropDownIcon onClick={handleFirst}/>
                </div>
               <ul className="pl-5 font-medium hidden  " ref={refFirst}>
                <Link href={"/men/shirts"}><li>Shirts</li>  </Link>
                <Link href={"/men/jackets"}><li>Jackets</li>  </Link>
                <Link href={"/men/bottoms"}><li>Bottoms</li>  </Link>
                <Link href={"/men/shoes"}><li>Shoes</li>  </Link>
             
               </ul>
               <div className="flex items-center">
               <Link href={"/categories/women"}>  
                  <div className='text-xl font-semibold'>Women  </div>
                 </Link>
                 <ArrowDropDownIcon onClick={handleSecond}/> 
              </div>
            <ul className="pl-5 font-medium hidden  " ref={refSecond}>
            <Link href={"/men/shirts"}><li>Shirts</li>  </Link>
                <Link href={"/women/jackets"}><li>Jackets</li>  </Link>
                <Link href={"/women/bottoms"}><li>Bottoms</li>  </Link>
                <Link href={"/women/shoes"}><li>Shoes</li>  </Link>
             </ul>
            
             <div className="flex items-center">
               <Link href={"/categories/kids"}>  
                  <div className='text-xl font-semibold'>Kids  </div>
                 </Link>
                 <ArrowDropDownIcon onClick={handleThird}/> 
              </div>
            <ul className="pl-5 font-medium hidden  " ref={refThird}>
              
                <Link href={"/kids/clothes"}><li>Clothes</li>  </Link>
                <Link href={"/kids/toys"}><li>Toys</li>  </Link>
                <Link href={"/kids/shoes"}><li>Shoes</li>  </Link>
               </ul>
               <div>
            <Link href={"/About"}>
                    <div className='text-xl font-semibold'>About</div>
                    </Link>
            </div>
            <div>
            <Link href={"/Contact"}>
                    <div className='text-xl font-semibold'>Contact</div>
                    </Link>
            </div>
            <div>
            <Link href={"/Login"}>
                    <div className='text-xl font-semibold'>Login</div>
                    </Link>
            </div>
            <div>
            <Link href={"/Register"}>
                    <div className='text-xl font-semibold'>Register</div>
                    </Link>
            </div>
           </div>
           </div>
           <CloseIcon style={{fontSize:"20px"}} className="bg-[#00008B] text-white rounded-full absolute top-2 right-2" onClick={handleClose}/>
          </div>
      <div className="flex w-full justify-between py-4">
        <div>
      <MenuIcon onClick={handleClose}/>
        </div>
          
      <div>
         <Image src="/img/logo.png" width={100} height={100} alt=""/> 
      </div>
      <div className='flex items-center space-x-1'>  
        <Link href={"/Account"}>
        <PersonIcon/>
        </Link>
        <Link href={"/Cart"}>
        <ShoppingCartIcon/>
        </Link>
      </div>
      </div>
    </div>
  )
}
