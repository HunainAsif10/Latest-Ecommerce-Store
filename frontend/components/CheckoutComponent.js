import React,{useState,useEffect} from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
export default function CheckoutComponent() {
    const [open,setOpen]=useState(false);
    // Stripe Credentials
    const [token,setToken]=useState(null)

    const onToken=(token)=>{
        console.log(token)
        console.log(token.id)
       setToken(token);

    }

    useEffect(()=>{
        const makeRequest=async()=>{
            const data=await fetch(`${process.env.NEXT_PUBLIC_URL}/pay/payment`,{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify({tokenId:token.id,amount:2000})
            })
            const res=await data.json();
            console.log(res);
        }
      token && makeRequest();
    },[token])
//    Paypal Option
    const initialOptions = {
        "client-id": "AcIHtwr6OBcGqXIzqoD3zaAmY-c77D-QU2uEU6WCNhdnbZ9meuODcezaHnB_UdYm6Ubu8rfBS8kYZAzQ",
        currency: "USD",
        "disable-funding":"credit,card,p24,venmo"
        
    };
  return (
    <div>
   <h1 className='text-center text-[#000080] font-bold text-2xl border-b-4 mt-3 border-[#000080] w-2/3 py-4 mx-auto md:w-72'>Enter Your Shiping Details</h1>
      <form action="" className='my-3 mx-4  md:w-3/4 md:ml-32'>
        <div className="formItem flex flex-col py-3">
            <label className='text-lg text-[#000080] px-2 ' htmlFor="">Name</label>
            <input className='p-2 border-b-2 w-5/6 focus:outline-none md:w-2/3' type="text" placeholder='Enter Your Name' />
        </div>
      
        <div className="formItem flex flex-col py-3">
            <label className='text-lg text-[#000080] px-2 ' htmlFor="">Email</label>
            <input  className='p-2 border-b-2 w-5/6 focus:outline-none  md:w-2/3 ' type="text" placeholder='Enter Your Email'/>
        </div>
      
        <div className="formItem flex flex-col py-3">
            <label className='text-lg text-[#000080] px-2 ' htmlFor="">Contact</label>
            <input  className='p-2 border-b-2 w-5/6 focus:outline-none  md:w-2/3' type="text" placeholder='Enter Your Contact Number' />
        </div>
        <div className="formItem flex flex-col py-3">
            <label className='text-lg text-[#000080] px-2 ' htmlFor="">Address</label>
            <input  className='p-2 border-b-2 w-5/6 focus:outline-none  md:w-2/3' type="text" placeholder='Enter Your Shipping address' />
        </div>
        {!open ?<button onClick={()=>{setOpen(true)}} className="bg-[#000080] text-white p-2  rounded text-lg">Pay</button>
        :<>
        <StripeCheckout
        name="HONEY"
        description="Best It Solutions" 
        image="/img/logo.png"
        shippingAddress
        billingAddress
        amount={2000}
        token={onToken}
        stripeKey={process.env.NEXT_PUBLIC_STRIPE_KEY}
       >
       <button  className='bg-[#2727db] my-2 text-white font-semibold w-40 p-2 rounded'>Pay with Stripe</button>
       </StripeCheckout>
       <PayPalScriptProvider options={initialOptions}>
       <PayPalButtons className='w-40  font-semibold' />
   </PayPalScriptProvider>
   </>
        }
      </form>
    </div>
  )
}