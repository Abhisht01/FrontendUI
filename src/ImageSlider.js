import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const handleNextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const handlePrevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={handlePrevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={handleNextSlide} />
      <div className='dots'>
        {SliderData.map((_, index) => (
          <span
            key={index}
            className={index === current ? 'dot active' : 'dot'}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
      {SliderData.map((slide, index) => {
        let slideIndex = index;
        if (index < current) {
          slideIndex = index + length;
        } else if (index > current) {
          slideIndex = index - length;
        }
        return (
          <div
            className={index === current ? 'slide active' : index < current ? 'slide left-animation' : 'slide right-animation'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className='image' />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
