import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import styles from './styles.module.css'
const SpinnerCustom = () => {
  return (
    <Spinner className={styles.spinner_container} animation="grow" role="status"></Spinner>
  )
}

export default SpinnerCustom