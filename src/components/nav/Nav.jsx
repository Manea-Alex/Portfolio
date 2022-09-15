import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {GiArchiveResearch} from 'react-icons/gi';
import { useState } from 'react'
// <=== In functie de href stie la care componenta sa mearga linia 15-19. Fiecare componenta are
// un block de sectiune cu un id specificat, hreful sare la acea sectiune cu acel id ==> 
const Nav = () => {
  const[activeNav,setActiveNav] = useState('#')
  return (
   <nav>
   <a href="#" onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active':''}><AiOutlineHome/></a>
   <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active':''}><AiOutlineUser/></a>
   <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active':''}><BiBook/></a>
   <a href="#portofolio" onClick={()=>setActiveNav('#portofolio')} className={activeNav === '#portofolio' ? 'active':''}><GiArchiveResearch/></a> 
   <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active':''}><BiMessageSquareDetail
   /></a>
   </nav>
  )
}

export default Nav