import React ,{useState}from 'react'
import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/router';

export default function LoginComponent() {
    const router=useRouter()

  const [credential,setCredentials]=useState({ email:"",password:""})
  
   

  const handleClick=async(e)=>{
    e.preventDefault();
    const data=await fetch(`${process.env.NEXT_PUBLIC_URL}/auth/loginUser`,{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify({ email:credential.email ,password:credential.password})
    })
    const response=await data.json()
    if(response.success){
        localStorage.setItem("token",response.token)
    }else{
        router.push("/Login")
    }
    const decodedJWT = jwtDecode(response.token);
    if(decodedJWT.user.isAdmin){
        router.push("/admin")
    }
    console.log(decodedJWT.user.isAdmin)

    console.log(response);
    setCredentials({ email:"" ,password:""})
  }
  const handleChange=(e)=>{
    setCredentials({...credential,[e.target.name]:e.target.value})

  }
  return (
    <div>
        <h1 className='text-center text-[#000080] font-bold text-2xl border-b-4 mt-3 border-[#000080] w-1/2 mx-auto md:w-52 py-4'>Login</h1>
        <p className='text-center font-semibold text-lg text-[#000080]'>Connect With Us</p>
        <form action="" className='mx-4 md:mx-auto md:w-5/6' onSubmit={handleClick}>
           
          <div className="formItem flex items-center pt-3">
            <label className='text-[#000080] text-xl pr-11' htmlFor="">Email</label>
            <input name="email" className=' focus:outline-none w-2/3 py-3 border-b-2 border-[#000080]' type="email" value={credential.email} onChange={handleChange} placeholder='Enter Your Email'/>
          </div>
          
           
          <div className="formItem flex items-center pt-3">
            <label className='text-[#000080] pr-3 text-xl' htmlFor="">Password</label>
            <input name="password" className=' focus:outline-none w-2/3 py-3 border-b-2 border-[#000080]' type="text" value={credential.pssword} onChange={handleChange} placeholder='Enter Your Password'/>
          </div>
          <button type='submit'  className='text-white bg-[#000080] w-24 py-3 my-5 rounded text-lg'>Login</button>
        </form>

    </div>
  )
}