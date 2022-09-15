import React from 'react'
// import CV from '../../assets/CV.pdf'
import CV from '../../assets/Alexandru_Szoke-Manea_CV_2022.pdf'
const CTA = () => {
  return (
    <div className='cta'>
    <a href={CV} download className='btn'>Download CV</a>
    <a href="#contact" className='btn btn-primary'>Let's talk</a>
    </div>
  )
}

export default CTA