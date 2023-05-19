import React from 'react'
import styles from './ShippingForm.module.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'
import Row from 'react-bootstrap/Row';
import addData from '@/firebase/firestore/addData';
import { useRouter } from 'next/navigation';

const ShippingForm = ({products,total}) => {
  const [validated, setValidated] = useState(false);
  const [formValues, setFormValues] = useState({});
  const { push } = useRouter();

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value
    }));
  };
  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      event.stopPropagation();
      formValues.date = new Date().toLocaleString('en-US', { timeZone: 'America/Bogota' });
      formValues.order = products
      formValues.total = total
      console.log(formValues)
      form
      Swal.fire({
        title: 'Generando pedido, espera un momento',
        text: '...',
        showCancelButton: false, 
        showConfirmButton: false,
        imageUrl: '/order.gif',
        allowOutsideClick: false,
      });
      await addData('/orders', formValues).then(()=>{
        Swal.fire({
          icon: 'success',
          title: 'Ordern creada exitosamente',
          showConfirmButton: false,
          timer: 1500
        }).then(()=>{
          push(`/payment/${total}`)
        })
      })
    }
  
    setValidated(true);
  };
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className={styles.container}>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="nombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Primer Nombre"
            onChange={handleInputChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="apellido">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Apellido"
            defaultValue="Otto"
            onChange={handleInputChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="ciudad">
          <Form.Label>Cuidad</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Ciudad" 
            required 
            onChange={handleInputChange}
          />
          <Form.Control.Feedback type="invalid">
          Por favor selecciona una cuidad válida
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="departamento">
          <Form.Label>Departamento</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="State" 
            required 
            onChange={handleInputChange}
            />
          <Form.Control.Feedback type="invalid">
            Por favor selecciona un departamento válido
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="codigoPostal">
          <Form.Label>Código postal</Form.Label>
          <Form.Control 
            onChange={handleInputChange}
            type="text" 
            placeholder="Zip" 
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="address">
          <Form.Label>Dirección</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="address" 
            required 
            onChange={handleInputChange}
          />
          <Form.Control.Feedback type="invalid">
            Porfavor provee una dirección válida
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Provee información adicional</Form.Label>
          <Form.Control 
            placeholder="Número de apartamento, dejarlo en la puerta ... etc" as="textarea" 
            rows={3} 
            required
            onChange={handleInputChange}
          />
          <Form.Control.Feedback type="invalid">
            Necesitamos saber tu ubicación exacta para generar el servicio
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="name@example.com" 
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group as={Col} md="6" className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Número de telefono</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="name@example.com" 
            required
            onChange={handleInputChange}
          />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Acceder a términos y condiciones"
          feedback="Debes acceder a los términos y condiciones"
          feedbackType="invalid"
        />
      </Form.Group>
      <p>Envios gratis en Medellín, envios nacionales precio $10.000cop</p>
      <Button type = "submit">Submit form</Button>
    </Form>
  )
}

export default ShippingForm