import React from 'react'
import { useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './project.css'
import piVideogames from '../../Media/piVideogames.mp4'


const Proyect = () => {

	 useEffect(() => {
        AOS.init({
            duration: 2000,
        })
    }, [])

	return (
		<div className="card2" data-aos="zoom-in">
    <div className="img-container2">

        <div className="img">

        <div className='containerVideo'>
        <video src={piVideogames} autoPlay loop muted controls />
        </div>
        </div>
        <div  className='descriptionProyect' data-aos="zoom-in">
        <h1 className='h1Proyect'>Project Description:</h1><p className='pProject'>I come to share with you my Henry's individual project in which I have promoted, it is a Raw type page using <a className='linkApi' href='https://rawg.io/apidocs' target='-blank'>https://rawg.io/apidocs </a>(includes music 🎧) . Used technology: <br/>
🔹 Javascript <br/>
🔹 Front-End: Html, React, Redux, CSS .<br/>
🔹 Back-End: Node.js con Express.<br/>
🔹 Database: PostgreSQL y Sequelize.<br/>

It is a Videogame App that has:<br/>
✔ Landing Page.<br/>
✔ Home with search engine, combined filters and orders.<br/>
✔ Details of each video game.<br/>
✔ Controlled form to create new video games.<br/>
✔ controlled prev and next buttons.<br/>
✔ Submit button disabled until the form fields are completed.<br/></p></div>
        <div className="description card2">

            <span className="title">
                Pi-VideoGames
            </span>
        </div>

    </div>
</div>	)
}



export default Proyect
