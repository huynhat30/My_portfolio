import { useState, useEffect } from 'react'
import AnimatedLetter from '../AnimatedLetter'
import './about.scss'

import ClipLoader from "react-spinners/ClipLoader"

const About = ()=>  {
    const [getLetterClass] = useState('text-animate')
    
    const aboutMe = ['A','b','o','u','t',' ','m','e']
    

    return (
        <>
                <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetter letterClass={getLetterClass} strArray={aboutMe} index={15}/>
                    </h1>

                    <div className='info'>
                        <p>
                        I'm a very ambitious front-end developer looking for a role in an
                    established IT company with the opportunity to work with the latest
                    technologies on challenging and diverse projects.
                        </p>

                        <p>
                        I'm a very ambitious front-end developer looking for a role in an
                    established IT company with the opportunity to work with the latest
                    technologies on challenging and diverse projects.
                        </p>

                        <p>
                        I'm a very ambitious front-end developer looking for a role in an
                    established IT company with the opportunity to work with the latest
                    technologies on challenging and diverse projects.
                        </p>
                    </div>
                    
                </div>
                
            </div>
            
        </>
    )

}

export default About