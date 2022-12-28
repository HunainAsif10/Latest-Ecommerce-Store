import React from 'react'
import SocialHeader from "../components/SocialHeader"
import Header from "../components/Header"
import PhoneBar from "../components/PhoneBar"
import Footer from '../components/Footer'
import CopyRight from '../components/CopyRight'
import LoginComponent from '../components/LoginComponent'

export default function Login() {
    return (
      <div>
        <SocialHeader/>
        <Header/>
        <PhoneBar/>
        <LoginComponent/>
        <Footer/>
        <CopyRight/>
      </div>
    )
  }