import React from 'react'
import { useEffect} from 'react';
import './contact.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
   useEffect(() => {
        AOS.init({
            duration: 2000,
        })
    }, [])
   
	return (
    <div data-aos="fade-right"> <br />
		    <div className="container">
        <div className="btn fb-btn">
           <a href='https://www.facebook.com/luciano.rodriguez.96592/' target='-blank'> <i className="fa fa-facebook" aria-hidden="true" id="fb"></i> </a>
        </div>
        <div className="btn ig-btn">
          <a href='https://www.instagram.com/rodriguezluciano_/' target='-blank'>  <i className="fa fa-instagram" aria-hidden="true" id="ig"></i> </a>
        </div>
        <div className="btn g-btn">
          <a href='mailto:rodriguezpepon5@gmail.com' target='-blank'>  <i className="fa fa-google" aria-hidden="true" id="g"></i> </a>
        </div>
        <div className="btn tw-btn">
           <a href='https://www.linkedin.com/in/luciano-rodriguez-766371228/' target='-blank'> <i className="fa fa-linkedin" aria-hidden="true" id="tw"></i> </a>
        </div>
          <div className="btn wp-btn">
           <a href='https://wa.me/qr/RYZTWTCY4FAHE1' target='-blank'> <i className="fa fa-whatsapp" aria-hidden="true" id="wp"></i> </a>
        </div>
    </div>
    </div>
	)
}


export default Contact