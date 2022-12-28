import React ,{useState}from 'react'

export default function RegisterComponent() {
  const [credential,setCredentials]=useState({name:"",email:"",contact:"",password:""})
  
   

  const handleClick=async(e)=>{
    e.preventDefault();
    const data=await fetch(`${process.env.NEXT_PUBLIC_URL}/auth/createUser`,{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify({name:credential.name,email:credential.email,contact:credential.contact,password:credential.password})
    })
    const response=await data.json()
    console.log(response);
    setCredentials({name:"",email:"",contact:"",password:""})
  }
  const handleChange=(e)=>{
    setCredentials({...credential,[e.target.name]:e.target.value})

  }
  return (
    <div>
        <h1 className='text-center text-[#000080] font-bold text-2xl border-b-4 mt-3 border-[#000080] w-1/2 mx-auto md:w-52 py-4'>Register Yourself</h1>
        <p className='text-center font-semibold text-lg text-[#000080]'>Connect With Us</p>
        <form action="" className='mx-4 md:mx-auto md:w-5/6' onSubmit={handleClick}>
          <div className="formItem  flex items-center pt-3">
            <label className='text-[#000080] pr-10 text-xl' htmlFor="">Name</label>
            <input name="name" className=' focus:outline-none w-2/3 py-3 border-b-2 border-[#000080]' type="text" value={credential.name} onChange={handleChange}  placeholder='Enter Your Name'/>
          </div>
          <div className="formItem flex items-center pt-3">
            <label className='text-[#000080] text-xl pr-11' htmlFor="">Email</label>
            <input name="email" className=' focus:outline-none w-2/3 py-3 border-b-2 border-[#000080]' type="email" value={credential.email} onChange={handleChange} placeholder='Enter Your Email'/>
          </div>
          
          <div className="formItem flex items-center pt-3">
            <label className='text-[#000080] text-xl pr-6' htmlFor="">Contact</label>
            <input name="contact" className=' focus:outline-none w-2/3 py-3 border-b-2 border-[#000080]' type="Number" value={credential.contact} onChange={handleChange}  placeholder='Enter Your Contact Number'/>
          </div>
          <div className="formItem flex items-center pt-3">
            <label className='text-[#000080] pr-3 text-xl' htmlFor="">Password</label>
            <input name="password" className=' focus:outline-none w-2/3 py-3 border-b-2 border-[#000080]' type="text" value={credential.pssword} onChange={handleChange} placeholder='Enter Your Password'/>
          </div>
          <button type='submit'  className='text-white bg-[#000080] w-24 py-3 my-5 rounded text-lg'>Register</button>
        </form>

    </div>
  )
}