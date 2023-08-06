import AnimatedLetter from '../AnimatedLetter';
import './index.scss'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3Alt, faGithubSquare, faHtml5, faJsSquare, faReact, faUnity } from '@fortawesome/free-brands-svg-icons'
import HashLoader from "react-spinners/HashLoader"

const HomePage = () => {
    const [getLetterClass, setLetterClass] = useState('text-animate');
    const greetArry = ['H','e','l','l','o',',']
    const nameArry = ['I',' ','a','m', ' '];
    const myName1 = ['H']
    const myName2 = ['u','y']
    const roleArry = ['S','o','f','t','w','a','r','e',' ','D','e','v','e','l','o','p','e','r'];

    const getAnimated = async () => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }

    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            getAnimated()
        },2000)

    }, [])

    return (
        <>
            {
                loading ?
                <div className='loader'><HashLoader color="#36d7b7" size={100}/></div>
                :
                <div className='container home-page'>
                    <div className='text-zone'>
                        <h1 class-name="child my-name" id="name">
                            <AnimatedLetter letterClass={getLetterClass} strArray={greetArry} index={15}/><br />
                            <AnimatedLetter letterClass={getLetterClass} strArray={nameArry} index={15}/>
                            <span className='my-name1'><AnimatedLetter letterClass={getLetterClass} strArray={myName1} index={21}/></span>
                            <span className='my-name2'><AnimatedLetter letterClass={getLetterClass} strArray={myName2} index={21}/></span>
                            <br />
                            <AnimatedLetter letterClass={getLetterClass} strArray={roleArry} index={27}/>
                        </h1>
                        <h3>Web application Developer / Game Developer</h3>
                    </div>

                    <div className='stage-cube-cont'>
                        <div className='cubespinner'>
                            <div className='face_1'>
                                <FontAwesomeIcon icon={faJsSquare} color='#DD0031'/>
                            </div>

                            <div className='face_2'>
                                <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                            </div>

                            <div className='face_3'>
                                <FontAwesomeIcon icon={faCss3Alt} color='#28A4D9'/>
                            </div>

                            <div className='face_4'>
                                <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                            </div>

                            <div className='face_5'>
                                <FontAwesomeIcon icon={faUnity} color='#EFD810'/>
                            </div>

                            <div className='face_6'>
                                <FontAwesomeIcon icon={faGithubSquare} color='#EC4D28'/>
                            </div>

                        </div>
                    </div>
            </div>
            }
        </>
        
    )
}

export default HomePage;