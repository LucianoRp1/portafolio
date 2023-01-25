import React from 'react'
import { useEffect} from 'react';
import './skills.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Skills = props => {
	const hmtl5 ='https://cdn-icons-png.flaticon.com/512/1216/1216733.png'
	const javaScript='https://cdn-icons-png.flaticon.com/512/5968/5968292.png'
	const css='https://cdn-icons-png.flaticon.com/128/732/732190.png'
	const react='https://cdn-icons-png.flaticon.com/128/3334/3334886.png'
	const redux='https://img.icons8.com/color/2x/redux.png'
	const nodeJs='https://img.icons8.com/fluency/2x/node-js.png'
	const express='https://img.icons8.com/office/2x/express-js.png'
	const sql='https://cdn-icons-png.flaticon.com/128/603/603201.png'
	const postgres='https://cdn-icons-png.flaticon.com/128/5968/5968342.png'
	const git ='https://img.icons8.com/color/2x/git.png'
	const gitHub='https://img.icons8.com/ios-filled/2x/github.png'
	const npm='https://img.icons8.com/color/2x/npm.png'
	const typeScript='https://img.icons8.com/fluency/2x/typescript--v2.png'

		 useEffect(() => {
        AOS.init({
            duration: 2000,
        })
    }, [])

	return (
<div className="card4" data-aos="fade-right">
<div className='card5'>
<h1 className='skills'>My Skills </h1>
<div className='imgContainer'>
<div className='skillsTitle'>
<img src={hmtl5} alt='img not found' data-aos="flip-left" />
<h3 data-aos="flip-left">HTML5</h3>
</div> <br />
<div className='skillsTitle'>
<img src={css} alt='img not found' data-aos="flip-left" />
<h3 data-aos="flip-left">CSS3</h3>
</div> <br />
<div className='skillsTitle'>
<img src={javaScript} alt='img not found' data-aos="flip-left" />
<h3 data-aos="flip-left">JAVASCRIPT</h3>
</div> <br />
<div className='skillsTitle'>
<img src={typeScript} alt='img not found' data-aos="flip-left" />
<h3 data-aos="flip-left">TYPESCRIPT</h3>
</div> <br />
<div className='skillsTitle'>

<img src={react} alt='img not found' data-aos="flip-left" />
<h3 data-aos="flip-left">REACT</h3>
</div> <br />
<div className='skillsTitle'>
<img src={redux} alt='img not found' data-aos="flip-left" />
<h3 data-aos="flip-left">REDUX</h3>
</div> <br />
<div className='skillsTitle'>
<img src={nodeJs} alt='img not found' data-aos="flip-left" />
<h3 data-aos="flip-left">NODE.js</h3>
</div> <br />
<div className='skillsTitle'>
<img src={express} alt='img not found' data-aos="flip-left" />
<h3 data-aos="flip-left">EXPRESS.js</h3>
</div> <br />
<div className='skillsTitle'>
<img src={sql} alt='img not found' data-aos="flip-left" />
<h3 data-aos="flip-left">SQL</h3>
</div> <br />
<div className='skillsTitle'>
<img src={postgres} alt='img not found' data-aos="flip-left" />
<h3 data-aos="flip-left">POSTGRESSQL</h3>
</div> <br />
<div className='skillsTitle'>
<img src={git} alt='img not found' data-aos="flip-left" />
<h3 data-aos="flip-left">GIT</h3>
</div> <br />
<div className='skillsTitle'>
<img src={gitHub} alt='img not found' data-aos="flip-left" />
<h3 data-aos="flip-left">GITHUB</h3>
</div><br />
<div className='skillsTitle'>
<img src={npm} alt='img not found' data-aos="flip-left" />
<h3 data-aos="flip-left">NPM</h3>
</div><br />
</div>
</div>
</div>
	)
}



export default Skills