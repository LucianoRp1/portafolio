import React from 'react'
import { useEffect, useState } from 'react';
import './home.css'
import Navbar from '../navbar/navbar.js'
import LandingPage from '../LandingPage/landingPage.js'
import AboutMe from '../aboutMe/aboutMe.js'
import Contact from '../contact/contact.js'
import Project from '../project/project.js'
import Skills from '../skills/skills.js'

const Home = () => {

	const [loading, setLoading] = useState(true);

	useEffect(() =>{
		setTimeout(() =>{
			setLoading(false);
		}, 5000)
	}, [])


	if(loading) return <LandingPage />
	return (
		<div id='home'> <br />
			<Navbar/>
			<br />
		<br />
		<br />
		<div id='aboutMe' className='aboutMeHome'> <br />
		<AboutMe  />
		</div>
		<br />
		<br />
		<br />
		<br />
		<div id='project' className='projectHome'>
		<Project />
		</div>
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<div id='skills' className='containerSkills'>
		<Skills />
		</div>
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<div id='contact'>
		<Contact />
		</div>
		</div>
	)
}


export default Home