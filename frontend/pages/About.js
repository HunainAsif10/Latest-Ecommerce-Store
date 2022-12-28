import React from 'react'
import SocialHeader from "../components/SocialHeader"
import Header from "../components/Header"
import PhoneBar from "../components/PhoneBar"
import Footer from '../components/Footer'
import CopyRight from '../components/CopyRight'
import AboutComponent from '../components/AboutComponent'
import Choose from '../components/Choose'
export default function About() {
  return (
    <div>
      <SocialHeader/>
      <Header/>
      <PhoneBar/>
      <AboutComponent/>
      <Choose/>
      <Footer/>
      <CopyRight/>
    </div>
  )
}
