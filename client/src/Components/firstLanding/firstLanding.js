import React from 'react'
import { useEffect} from 'react';
import {
    Link
} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './firstLanding.css'
const FirstLanding = props => {

			 useEffect(() => {
        AOS.init({
            duration: 2000,
        })
    }, [])

	return (
		<div>

<div className='hero'>
  <div className="hero-one" data-aos="fade-right"></div>
  <div className="hero-two" data-aos="fade-left"></div>
  <h1  className="header-title"><span className="header-primary" data-aos="flip-down">Hi !</span><span className="header-sub" data-aos="flip-up">Welcome To My Portfolio</span> <div className='containerbtn'>
   < Link className='linkLanding'  to = '/home' > < button data-aos="flip-down" className = 'btnPress' >  <span></span>
  <span></span>
  <span></span>
  <span></span> Press click< /button> < /Link>
</div></h1>

</div>

</div>



	)
}



export default FirstLanding