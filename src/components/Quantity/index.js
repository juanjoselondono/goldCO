import React, { useState } from 'react';
import styles from './styles.module.css'
function Counter({count, setCount}) {
  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    if(count > 1){
        setCount(count - 1);
    }
  }

  function handleInputChange(event) {
    const newValue = event.target.value;
      const parsedValue = parseInt(newValue);
      if (!isNaN(parsedValue)) {
        setCount(parsedValue);
      } else {
        setCount('');
      }
  }
  

  return (
    <div className={styles.container}>
      <p className={styles.label}>Cantidad</p>
      <div className={styles.buttons_container}>
        <button className={styles.button} onClick={handleIncrement}>+</button>
          <input className={styles.input} type="number" value={count} onChange={handleInputChange} />
        <button className={styles.button} onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
}

export default Counter;
