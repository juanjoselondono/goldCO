import '@/styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import {useRouter} from 'next/router';
import Navbar from '@/components/NavBar/NavBar'
import { CartProvider } from '../contexts/CartContext';

// If loading a variable font, you don't need to specify the font weight
export default function App({ Component, pageProps }) {
  const router = useRouter()
  return (
  <>
    <CartProvider>
      {router.pathname !== '/dashboard' && router.pathname !== '/payment/[total]' &&  <Navbar></Navbar>}
      <Component {...pageProps}></Component>
    </CartProvider>
  </>
  )
}
