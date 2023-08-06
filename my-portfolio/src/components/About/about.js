import { useState, useEffect } from 'react'
import AnimatedLetter from '../AnimatedLetter'
import './about.scss'

import HashLoader from "react-spinners/HashLoader"

const About = ()=>  {
    const [getLetterClass] = useState('text-animate')
    
    const aboutMe = ['A','b','o','u','t',' ','m','e']
    
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        },2000)

    }, [])

    return (
        <>
            {
                loading ?
                <div className='loader'><HashLoader color="#36d7b7" size={100}/></div>
                :
                <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetter letterClass={getLetterClass} strArray={aboutMe} index={3}/>
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
        }
        </>
    )

}

export default About