import React from 'react'
import { useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './navbar.css'
import {FaHome, FaProjectDiagram, FaUser, FaAward, FaMailBulk} from 'react-icons/fa';



const Navbar = () => {


   useEffect(() => {
        AOS.init({
            duration: 2000,
        })
    }, [])

	return (
		<div>
		<nav className='containerNav'>
		<ul className='ulNav'>
		<li data-aos="flip-left"><a href='#home' className='btnNav' ><FaHome data-aos="flip-left" /></a></li>
		<li data-aos="flip-left"><a href='#aboutMe' className='btnNav'><FaUser  /></a></li>
		<li data-aos="flip-left"><a href='#project' className='btnNav'><FaProjectDiagram  /></a></li>
		<li data-aos="flip-left"><a href='#skills' className='btnNav'><FaAward  /></a></li>
		<li data-aos="flip-left"><a href='#contact' className='btnNav'><FaMailBulk /></a></li>
		
		</ul></nav> 				
</div>


	)
}



export default Navbar