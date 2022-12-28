import React from 'react'
import SocialHeader from "../components/SocialHeader"
import Header from "../components/Header"
import PhoneBar from "../components/PhoneBar"
import Footer from '../components/Footer'
import CopyRight from '../components/CopyRight'
import RegisterComponent from '../components/RegisterComponent'


export default function Register() {
    return (
      <div>
        <SocialHeader/>
        <Header/>
        <PhoneBar/>
       <RegisterComponent/>
        <Footer/>
        <CopyRight/>
      </div>
    )
  }