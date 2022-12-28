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
    
    const { subCategory}=router.query;
    const category=router.pathname.split("/")[1]  
    console.log(category)   
    console.log(subCategory)
    
  return (
    <div> 
      <SocialHeader/>
      <Header/>
      <PhoneBar/>
       <Products products={products} category={category} subCategory={subCategory}/>
      <Footer/>
      <CopyRight/>

    </div>
  )
}
