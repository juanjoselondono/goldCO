import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/NavBar/NavBar'
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })
export default function App({ Component, pageProps }) {
  return (
  <>
    <Component className={inter.className}{...pageProps} />
  </>
  )
}
