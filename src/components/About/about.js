import { useState, useEffect } from 'react'
import AnimatedLetter from '../AnimatedLetter'
import TagCloud from 'TagCloud'
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

    const container = '.content'
    const textTagCloud = [
                'HTML',
                'CSS',
                'SASS',
                'Javascript',
                'Java',
                'Python',
                'C#',
                'React',
                'Android',
                'Git',
                'Github',
                'GameDev',
                'OOP'
            ]

    const options = {
        radius: 300,
        // animation speed
        // slow, normal, fast
        maxSpeed: 'fast',
        initSpeed: 'fast',
        // 0 = top
        // 90 = left
        // 135 = right-bottom
        direction: 135,
        // interact with cursor move on mouse out
        keep: true
        }

        useEffect(() => {
            TagCloud(container, textTagCloud, options);
        })

    return (
        <>
            {
                loading ?
                <div className='loader'><HashLoader color="#36d7b7" size={100}/></div>
                :
                <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetter letterClass={getLetterClass} strArray={aboutMe} index={1}/>
                    </h1>

                    <div className='info'>
                        <div className='about'>
                        <p>
                        I'm a very ambitious front-end developer looking for a role in an
                    established IT company with the opportunity to work with the latest
                    technologies on challenging and diverse projects.
                        </p>
                        </div>

                        <div className='education'>
                            
                        </div>

                        <div className='working'>
                            
                        </div>
                        

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

                <div className='text-sphere'>
                    <div className='skill-lable'>
                        <h1>Skills</h1>
                    </div>
                    <span className='content'></span>
                </div>
                
            </div>
        }
        </>
    )

}

export default About