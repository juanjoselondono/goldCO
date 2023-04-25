import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import styles from './ProductSlider.module.css'
const ProductSlider = ({images}) => {
  return (
    <div className={styles.container}>
      {
        images != undefined &&
        <Carousel prevLabel="" nextLabel="" variant="dark" slide = {false}>
          {images.gallery.map((url, index) => (
            <Carousel.Item key={index}>
              <img
                className={styles.carousel_image}
                src={url}
                alt={`Slide ${index}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      }
    </div>
  )
}

export default ProductSlider