import './index.scss'
import { Link } from 'react-router-dom'
import LogoBig from '../../assets/images/logo-s.png'
import LogoSmall from '../../assets/images/logo_sub.png'

const Sidebar = () => {
    return (
    <div className="nav-bar">
        <Link className='logo' to='/'>
            <img alt='front page logo' src={LogoBig} />
            <img alt='small logo' src={LogoSmall} />
        </Link>
    </div>)
}

export default Sidebar;