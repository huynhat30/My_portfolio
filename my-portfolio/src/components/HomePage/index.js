import AnimatedLetter from '../AnimatedLetter';
import './index.scss'
import { useEffect, useState } from 'react'


const HomePage = () => {
    const [getLetterClass, setLetterClass] = useState('text-animate');
    const greetArry = ['H','e','l','l','o',',']
    const nameArry = ['I',' ','a','m',' ','Huy','/','Harry',','];
    const roleArry = ['S','o','f','t','w','a','r','e',' ','D','e','v','e','l','o','p','e','r'];

    const getAnimated = async () => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }

    useEffect(() => {getAnimated()}, [])

    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1 class-name="child my-name" id="name">
                    <AnimatedLetter letterClass={getLetterClass} strArray={greetArry} index={1}/><br />
                    <AnimatedLetter letterClass={getLetterClass} strArray={nameArry} index={9}/><br />
                    <AnimatedLetter letterClass={getLetterClass} strArray={roleArry} index={22}/>
                </h1>
                <h3>Web application Developer / Game Developer</h3>
            </div>
        </div>
    )
}

export default HomePage;