import './contact.scss'
import HashLoader from "react-spinners/HashLoader"
import { useState, useEffect } from 'react'
import AnimatedLetter from '../AnimatedLetter'


const Contact = ()=>  {
    const [getLetterClass, setLetterClass] = useState('text-animate')
    const conttactArr = ['C','o','n','t','a','c','t',' ','m','e']
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
                <div className='container contact-page'>
                    <div className='text-zone'> 
                    <h1>
                        <AnimatedLetter letterClass={getLetterClass} strArray={conttactArr} index={3}/>
                    </h1>
                    <p>

                    </p>

                    <div className="contact-form">
                        <form>
                        <ul>
                            <li className="half">
                                <input placeholder="Name" type="text" name="name" required />
                            </li>

                            <li className="half">
                                <input
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    required
                                />
                            </li>

                            <li>
                                <input
                                    placeholder="Subject"
                                    type="text"
                                    name="subject"
                                    required
                                />
                            </li>

                            <li>
                                <textarea
                                    placeholder="Message"
                                    name="message"
                                    required
                                ></textarea>
                            </li>
                            
                            <li>
                                <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                        </form>
                    </div>

                    </div>
                </div>
        }
        </>
    )

}

export default Contact