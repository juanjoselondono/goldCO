import React from 'react'
import {useState} from 'react'
import Form from '@/components/Form/Form'
import addData from "@/firebase/firestore/addData";

const index = () => {
//   const storage = getStorage();
  const [token, setToken] = useState();
  const click = async () => {
    const data = {
      name: 'Gold Bracelet',
      description: 'Gorgeous 24K gold bracelet with a intricate pattern.',
      price: '$799.99',
      image: 'https://image.reliancejewels.com/Jewels/images/productImages/978/22-kt-gold-bracelet-large_c2b09d2ab30f3af9e1763f46e03b2a5a.jpg',
      gallery:['https://cdn.shopify.com/s/files/1/0275/4917/1784/products/las-villas-cuban-link-bracelet-11mm-solid-cuban-link-bracelet-in-18k-yellow-gold-28234343612488_large.jpg?v=1628063610', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX-urxIJA-pi_Qls-SU9gU_gYQhEDVfz6p15Hw-yY&s'],
      stock: 6
    }
    const { result, error } = await addData('products', data)

    if (error) {
      return console.log(error)
    }
    console.log(result)
  }
  //change this to false work faster
  //if(!token){...}
  if(false){
    return (
        <div>
            <Form setToken = {setToken}></Form>
        </div>
      )
  }
  else{
    return(
        <div>
            <h1 style = {{color:'white', textAlign:'center'}}>Welcome to admin panel mr JLD</h1>
            <div  style= {{marginTop:'10%',display: 'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', marginBottom:'20%', gap:'5vh'}}>
                <h1>Logged in</h1>
                <button onClick={()=>{click()}}>Button</button>
            </div>           
        </div>
    )
  }

}

export default index