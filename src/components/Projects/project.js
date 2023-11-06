import './project.scss'
import HashLoader from "react-spinners/HashLoader"
import { useState, useEffect } from 'react'
import BackgroundDesign from '../Background/background_design'
import particleConfig2 from '../Background/ParticleConfig/particleFloat2'
import AnimatedLetter from '../AnimatedLetter'
import { collection, getDocs } from 'firebase/firestore/lite'
import { db } from '../../firebase'

const Project = ()=>  {
    const [loading, setLoading] = useState(false);
    const [getLetterClass, setLetterClass] = useState('');
    const [proj, setProj] = useState([]);

    const pageTitle = 'Projects'.split('')
    useEffect(()=>{
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setLetterClass('text-animate')
        },2000)

        setTimeout(() => {
            setLetterClass('text-animate-hover')
        },4000)

        getProjectFromDB()
    }, [])

   const getProjectFromDB = async () => {
        const querySnapshot = await getDocs(collection(db, 'portfolio'))
        setProj(querySnapshot.docs.map((doc) => {
            return doc.data()
        }))
   }

    const renderProject = (project) => {
        return (
            <div className='img-container'>
                {
                    project.map((prj, idx) => {
                        return (
                            <div className='img-box' key={idx}>
                                <img src={prj.img} alt='2D slime game' className='cover'/>
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
                <div className='loader'><HashLoader color="#36d7b7" size={100}/></div>
                :
                <div className='container project-page'>
                    <div className='text-zone'>
                        <h1>
                            <AnimatedLetter letterClass={getLetterClass} strArray={pageTitle} index={4}/>
                        </h1>

                        <div className='projects'>
                           {renderProject(proj)}
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