import './contact.scss'
import HashLoader from "react-spinners/HashLoader"
import { useState, useEffect, useRef } from 'react'
import AnimatedLetter from '../AnimatedLetter'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

const Contact = ()=>  {
    const [getLetterClass, setLetterClass] = useState('text-animate')
    const conttactArr = ['C','o','n','t','a','c','t',' ','m','e']
    const [loading, setLoading] = useState(false);
    const [display, setDisplay] = useState(true)
    const [curLoc, setCurLocation] = useState({})
    const [data, setData] = useState({
        temp: 0,
        city: 'Your city',
        describe: 'default',
        weatherImage: 'https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-02-256.png'
    })
    const [cityName, setCityName] = useState('Nottingham')
    const [cityNameErr, setCityNameErr] = useState('')

    const form = useRef();

    useEffect(()=> {
        getLocation()
        handleEvent()   
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getLocation = async() => {
        const location = await axios.get('https://ipapi.co/json')
        setCurLocation(location.data)
        
    }

    const handleEvent = () => {
        if (cityName !== '') {
            const weatherAPIurl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=41079a68ccf70b363fd7f893260dbbb7&units=metric`;  
         axios.get(weatherAPIurl)
        .then(result => {
            let weatherImgPath = '';
            if (result.data.weather[0].main === 'Clear') {
                weatherImgPath = 'https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-01-256.png'
            }
            else if (result.data.weather[0].main === 'Clouds'){
                weatherImgPath = 'https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-22-256.png'
            }
            else if (result.data.weather[0].main === 'Rain'){
                weatherImgPath = 'https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-32-256.png'
            }
            else if (result.data.weather[0].main === 'Drizzle'){
                weatherImgPath = 'https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-30-256.png'
            }
            else if (result.data.weather[0].main === 'Mist'){
                weatherImgPath = 'https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-29-256.png'
            }
            else if (result.data.weather[0].main === 'Thunderstom'){
                weatherImgPath = 'https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-23-256.png'
            }
            else if (result.data.weather[0].main === 'Snow'){
                weatherImgPath = 'https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-24-256.png'
            }
            setData({...data, 
                temp: Math.round(result.data.main.temp),
                city: result.data.name,
                describe: result.data.weather[0].description,
                weatherImage: weatherImgPath,
            })
            setCityNameErr('')
            console.log(result.data)
        })
        .catch(err => {
            if (err.response.status === 404) {
                setCityNameErr('Invalid name')
            }
            console.log(err)})
        }
    }

    const handleDisplayUnit = () =>{
        setDisplay(!display)
    }

    const celToFah = (temp) => {
        return temp*(9/5) + 32
    }

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
                                <input type='text' placeholder='City name' onChange={e => setCityName(e.target.value)}/>
                                <button onClick={handleEvent}><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></button>
                            </div>

                            <div className='error'>
                                <p>{cityNameErr}</p>
                            </div>
                            
                            <div className='weatherFocus'>
                                <img src={data.weatherImage} alt= "weather illustration"/>
                                <div className='tempUnitChange'>
                                    <button onClick={handleDisplayUnit}>{display ? 'Celcius' : 'Fahrenheit'}</button>
                                </div>
                                <div className='weatherInfo'>
                                    <h2 class="temp-C-or-F">{display && <span>{data.temp}°C</span>}{!display && <span>{celToFah(data.temp)}°F</span>}</h2>
                                    <h2 class="city">{data.city}</h2>
                                    <p class="describe"><small>{data.describe}</small></p>
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