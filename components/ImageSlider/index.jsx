import React, { useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';


import { sliderData } from './sliderData';

import styles from './slider.module.css';

import { FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa'

const ImageSlider = ({slides}) => {
  const [index, setIndex] = useState(0);
  const length = slides.length

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return (
    <Carousel>
      {
        sliderData.map((slide, index) => {
          return (
            <Carousel.Item>
        <img
          className={styles.slidingimage}
          src={slide.image}
          alt={slide.alt}
        />
      </Carousel.Item>
          )
        })  
      }
        
    </Carousel>
  )
}

export default ImageSlider