import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoBig from '../../assets/images/profile.jpg'
import LogoSmall from '../../assets/images/name_logo2.png'
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome'
import { faCogs, faEnvelope, faGamepad, faHome, faMugHot, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    return (
    <div className="nav-bar">
        <Link className='logo' to='/about'>
            <img alt='front page logo' src={LogoBig} className='profile-logo'/>
            <img alt='small logo' src={LogoSmall} className='name-logo'/>
        </Link>

        <nav>
            <NavLink id='link' exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} className='icon'/>
            </NavLink>

            <NavLink id='link' exact='true' activeclassname='active' className='about' to='/about'>
                <FontAwesomeIcon icon={faUser} className='icon'/>
            </NavLink>

            <NavLink id='link' exact='true' activeclassname='active' className='skill' to='/skill'>
                <FontAwesomeIcon icon={faCogs} className='icon'/>
            </NavLink>

            <NavLink id='link' exact='true' activeclassname='active' className='project' to='/projects'>
                <FontAwesomeIcon icon={faMugHot} className='icon'/>
            </NavLink>

            <NavLink id='link' exact='true' activeclassname='active' className='contact' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} className='icon'/>
            </NavLink>

            <NavLink id='link' exact='true' activeclassname='active' className='hobby' to='/hobby'>
                <FontAwesomeIcon icon={faGamepad} className='icon'/>
            </NavLink>
        </nav>

        <ul>
            <li>
                <a href="https://www.linkedin.com/in/nhat-huy-giang-50abb7201" target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </li>
            <li>
                <a href="https://github.com/huynhat30" target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </li>
        </ul>
    </div>)
}

export default Sidebar;