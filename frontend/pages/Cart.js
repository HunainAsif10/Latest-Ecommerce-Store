import React from 'react'
import SocialHeader from '../components/SocialHeader'
import Header from '../components/Header'
import PhoneBar from '../components/PhoneBar'
import Footer from '../components/Footer'
import CopyRight from '../components/CopyRight'
import CartComponent from '../components/CartComponent'

export default function Cart() {
  return (
    <div>
        <SocialHeader/>
        <Header/>
        <PhoneBar/>
        <CartComponent/>
        <Footer/>
        <CopyRight/>

    </div>
  )
}
