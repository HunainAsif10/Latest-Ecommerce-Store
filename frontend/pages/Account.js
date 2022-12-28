import React from 'react'
import SocialHeader from "../components/SocialHeader"
import Header from "../components/Header"
import PhoneBar from "../components/PhoneBar"
import Footer from "../components/Footer"
import CopyRight from "../components/CopyRight"
import AccountComponent from '../components/AccountComponent'
export default function Account() {
  return (
    <div>
        <SocialHeader/>
        <Header/>
        <PhoneBar/>
        <AccountComponent/>
        <Footer/>
        <CopyRight/>
    </div>
  )
}
