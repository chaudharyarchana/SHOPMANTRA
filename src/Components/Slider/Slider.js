import React, { useState } from 'react';
import './Slider.css';

import img0 from '../../img/pexels-juan-mendez-1536619.jpg'
import img1 from '../../img/pexels-andrea-piacquadio-837140.jpg';
import img2 from '../../img/pexels-cottonbro-studio-10679171 (1).jpg';

import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

const Slider = () => {
   
    const[currentSlide,setSlide]=useState(0)
    const slideback = () => {
        setSlide(currentSlide===0?2: prev=>prev-1)
    }

    const slidenext = () => {
        setSlide(currentSlide===2?0: prev=>prev+1)
    }

    return <div className='slider'>
        <div className='container' style={{transform:`translateX(-${currentSlide*100}vw)`}}>
          
            <img src={img2} className='slider-img' alt="" />
            <img src={img0} className='slider-img' alt="" />
            <img src={img1} className='slider-img' alt="" />
        </div>
        <div className='slider-icons'>
            <ArrowCircleLeftIcon className='sicon' style={{width:"40px", height:"40px"}} onClick={slideback}/>
            <ArrowCircleRightIcon className='sicon' style={{width:"40px", height:"40px"}} onClick={slidenext} />
        </div>
    </div>;
}



export default Slider;