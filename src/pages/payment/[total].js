import React from 'react'
import styles from './styles.module.css'
import { useRouter } from 'next/router';

const index = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
        <p className={styles.text_cta}>Escanea el código qr y paga el valor de ${router.query.total}</p>
        <img className = {styles.qr_code} src="https://api.qrserver.com/v1/create-qr-code/?data=YOUR_PAYMENT_CODE_OR_DATA" alt="QR Code" />
        <p className={styles.text_steps}>Envia el comprobante a +56784 y verificaremos éxitosamente tu compra</p>
    </div>
  )
}

export default index