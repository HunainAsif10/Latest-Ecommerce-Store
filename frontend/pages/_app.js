import { useState,useEffect } from 'react'
import ProductState from '../context/admin/ProductState'
import CartState from '../context/CartState'
import '../styles/globals.css'
import LoadingBar from 'react-top-loading-bar'
import { useRouter } from 'next/router'
 

export default function App({ Component, pageProps }) {

  const router =useRouter()
  const [progress, setProgress] = useState(0)
  useEffect(() => {
     
    router.events.on('routeChangeStart',()=>{
      setProgress(40)
    })
    router.events.on('routeChangeComplete',()=>{
      setProgress(100)
    })
  }, [])
  
  return<>
  <LoadingBar
        color='#000080'
        height={4}
        progress={progress}
        waitingTime={400}
        onLoaderFinished={() => setProgress(0)}
      />
  
   <ProductState>
      <CartState>
           <Component {...pageProps} />
      </CartState>
  </ProductState>
  
  </>
}
