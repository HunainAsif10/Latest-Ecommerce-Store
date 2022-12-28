import { useRouter } from 'next/router'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import PhoneBar from '../../components/PhoneBar'
import CopyRight from '../../components/CopyRight'
import SocialHeader from '../../components/SocialHeader'
import Products from '../../components/Products'
import { products } from '../../data'


export default function category() {
    const router=useRouter()
    const {category}=router.query;
    console.log(category)
  return (
    <div> 
      <SocialHeader/>
      <Header/>
      <PhoneBar/>
       <Products products={products} category={category}/>
      <Footer/>
      <CopyRight/>

    </div>
  )
}
