import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
    <a href="https://www.linkedin.com/in/alexandru-sz%C5%91ke-manea-901227217/" target="_blank"><BsLinkedin/></a>
    <a href="https://github.com/Manea-Alex" target="_blank"><FaGithub/></a>
    <a href="https://dribble.com" target="_blank"><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials