import './contact.scss'
import HashLoader from "react-spinners/HashLoader"
import { useState, useEffect, useRef } from 'react'
import AnimatedLetter from '../AnimatedLetter'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Contact = ()=>  {
    const [getLetterClass, setLetterClass] = useState('text-animate')
    const conttactArr = ['C','o','n','t','a','c','t',' ','m','e']
    const [loading, setLoading] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_6oruksh', 'template_ja0ma0k', form.current, '1XxFvgHjp3_1PFOKO')
          .then((result) => {
                alert('Message sent!')
                window.location.reload(false)
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    const getAnimated = async () => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }


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
                <div className='container contact-page'>
                    <div className='text-zone'> 
                        <h1>
                            <AnimatedLetter letterClass={getLetterClass} strArray={conttactArr} index={3}/>
                        </h1>
                        <p>
                            I am looking for opportunity in working as a Junior Web Developer or Junior Game Developer. If you have any querry, feel free to contact me using contact form below.
                        </p>

                        <div className="contact-form">
                            <form ref={form} onSubmit={sendEmail}>
                                <ul>
                                    <li className='title'>
                                        <span>Name</span>
                                    </li>
                                    <li className="half">
                                        <input placeholder="Last Name" type="text" name="last_name" required />
                                    </li>

                                    <li className="half">
                                        <input placeholder="First Name" type="text" name="first_name" required />
                                    </li>

                                    <li className='title'>
                                        <span>Email</span>
                                    </li>
                                    <li>  
                                        <input placeholder="mail@address.host"  type="email"  name="email" required />
                                    </li>

                                    <li className='title'>
                                        <span>Subject</span>
                                    </li>
                                    <li>
                                        <input placeholder="Email subject" type="text" name="subject" required />
                                    </li>

                                    <li className='title'>
                                        <span>Message</span>
                                    </li>
                                    <li>
                                        <textarea placeholder="State your message here..." name="message" required/>
                                    </li>
                                    
                                    <li>
                                        <input type="submit" className="flat-button" value="Send" />
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                    
                    <div className='contactInfo'>
                        <h3>
                            Contact Info
                        </h3>
                        <label>Phone: </label>
                        <span>07756166550 (UK)</span><br />
                        <label>Email: </label>
                        <span>huyvt0893@gmail.com</span><br />
                    </div>

                    <div className='weatherApp'>
                        <div className='row'>
                            <div className='search'>
                                <input type='text' placeholder='City name' />
                                <button><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></button>
                            </div>
                            <div className='weatherFocus'>
                                <img src="https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-01-256.png" alt= "weather illustration"/>
                                <div className='weatherInfo'>
                                    <h2 class="temp-C-or-F">22°C</h2>
                                    <p class="City">Nottingham</p>
                                    <p class="card-text"><small>Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        }
        </>
    )

}

export default Contact