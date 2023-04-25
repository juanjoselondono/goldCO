import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './styles.module.css'
import { useState } from 'react';
import React from 'react';
const user = process.env.NEXT_PUBLIC_PANEL_USER
const password = process.env.NEXT_PUBLIC_PANEL_PASSWORD
function form({setToken}) {
  var[intentos, setIntentos] = useState(0)
  const [datos, setDatos] = useState({
    user: '',
    password: ''
  })
  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setDatos({
        ...datos,
        [event.target.name] : event.target.value
    })
  }
  const onSubmit= ()=>{
    event.preventDefault()
    if(user == datos.user && password == datos.password){
      alert('Login succesful')
      setToken(true)
    }
    else{
      alert('Try again')
      setIntentos(intentos++)
    }
    //check intentos
    console.log(intentos)
    if(intentos >= 2){
      alert('Closing Website')
      window.open("about:blank", "_self");
      window.close()
    }
  }
  return (
    <Form className={styles.container}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>ID</Form.Label>
        <Form.Control onChange={handleInputChange} name="user" type="email" placeholder="Enter ID" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={handleInputChange} name="password" type="password" placeholder="Password" />
      </Form.Group>
      <Button  onClick={onSubmit} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default form;