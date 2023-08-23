import './project.scss'
import HashLoader from "react-spinners/HashLoader"
import { useState, useEffect } from 'react'
import BackgroundDesign from '../Background/background_design'
import particleConfig2 from '../Background/ParticleConfig/particleFloat2'
import AnimatedLetter from '../AnimatedLetter'
import projectsData from '../../data/projects.json'

const Project = ()=>  {
    const [loading, setLoading] = useState(false);
    const [getLetterClass, setLetterClass] = useState('');
    const project = 'Projects'.split('')
    useEffect(()=>{
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setLetterClass('text-animate')
        },2000)

        setTimeout(() => {
            setLetterClass('text-animate-hover')
        },4000)
    }, [])

    console.log(projectsData)

    const renderProject = (project) => {
        return (
            <div className='img-container'>
                {
                    project.map((prj, idx) => {
                        return (
                            <div className='img-box' key={idx}>
                                <img src={prj.cover} alt='2D slime game' className='cover'/>
                                <div className='content'>
                                    <p className='title'>{prj.title}</p>
                                    <h4 className='description'>{prj.description}</h4>
                                    <p className='tech'>## {prj.tech} ##</p>
                                    <button className='btn' onClick={() => window.open(prj.source)}>Code</button>
                                    <button className='btn' onClick={() => window.open(prj.demo)}>Demo</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <>
            {
                loading ?
                <div className='loader'><HashLoader color="#3d0c0c" size={100}/></div>
                :
                <div className='container project-page'>
                    <div className='text-zone'>
                        <h1>
                            <AnimatedLetter letterClass={getLetterClass} strArray={project} index={4}/>
                        </h1>

                        <div className='projects'>
                           {renderProject(projectsData.projects)}
                        </div>
                    </div>

                    <div className='backgroundDynamic'>
                        <BackgroundDesign particalConfig = {particleConfig2}/>
                    </div>
                </div>
        }
        </>
    )

}

export default Project