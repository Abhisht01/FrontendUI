

import React, { useState } from 'react';
import './App.css';
import { SliderData } from './SliderData';
import ImageSlider from './ImageSlider';
import Navbar from './Navbar';


function App() {
  return (
    <>
      <Navbar />
      <h1 className='Feat'>Featured Items</h1>
      <ImageSlider slides={SliderData}/>
    </>
  );
}

export default App;
