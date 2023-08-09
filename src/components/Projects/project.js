import './project.scss'
import HashLoader from "react-spinners/HashLoader"
import { useState, useEffect } from 'react'
import BackgroundDesign from '../Background/background_design'
import particleConfig2 from '../Background/ParticleConfig/particleFloat2'

const Project = ()=>  {
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
                <div className='container project-page'>
                    Helloooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo

                    <div className='backgroundDynamic'>
                    <BackgroundDesign particalConfig = {particleConfig2}/>
                </div>
                </div>
        }
        </>
    )

}

export default Project