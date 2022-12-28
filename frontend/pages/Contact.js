import React from 'react'
import SocialHeader from "../components/SocialHeader"
import Header from "../components/Header"
import PhoneBar from "../components/PhoneBar"
import ContactComponent from '../components/ContactComponent'
import Footer from '../components/Footer'
import CopyRight from '../components/CopyRight'


export default function Contact() {
    return (
      <div>
        <SocialHeader/>
        <Header/>
        <PhoneBar/>
         <ContactComponent/>
        <Footer/>
        <CopyRight/>
      </div>
    )
  }