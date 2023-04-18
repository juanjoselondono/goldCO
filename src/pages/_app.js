import '@/styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import Navbar from '@/components/NavBar/NavBar'
// If loading a variable font, you don't need to specify the font weight
export default function App({ Component, pageProps }) {
  return (
  <>
    <Navbar></Navbar>
    <Component {...pageProps}></Component>
  </>
  )
}
