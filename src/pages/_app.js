import '@/styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import {useRouter} from 'next/router';
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import Navbar from '@/components/NavBar/NavBar'
// If loading a variable font, you don't need to specify the font weight
export default function App({ Component, pageProps }) {
  const router = useRouter()
  // const firebaseConfig = {
  //   apiKey: "AIzaSyCXQo6QnGysqEjmV9LKAwd9nMa2VvOnRwg",
  //   authDomain: "gold-commerce.firebaseapp.com",
  //   projectId: "gold-commerce",
  //   storageBucket: "gold-commerce.appspot.com",
  //   messagingSenderId: "845268519742",
  //   appId: "1:845268519742:web:8aa70aecf08939c4dbfa6f"
  // };
  // // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  // // Initialize Cloud Storage and get a reference to the service
  // const storage = getStorage(app);
  return (
  <>
    {router.pathname !== '/dashboard' &&  <Navbar></Navbar>}
    <Component {...pageProps}></Component>
  </>
  )
}
