import { useRouter } from "next/router"
import CopyRight from "../../components/CopyRight"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import PhoneBar from "../../components/PhoneBar"
import SingleProduct from "../../components/SingleProduct"
import SocialHeader from "../../components/SocialHeader"


export default function id() {
    const router=useRouter()
    const {id}=router.query
  return (
    <div>
        <SocialHeader/>
        <Header/>
        <PhoneBar/>
        <SingleProduct id={id}/>
        <Footer/>
        <CopyRight/>
        </div>
  )
}
