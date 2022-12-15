import { Link } from 'react-router-dom';
import './index.scss';
import Logo from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => (
  <div className='nav-bar'>
    <Link className='logo' to='/'>
      <img src={Logo} alt="logo" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" className="icon" to="/">
        <FontAwesomeIcon icon={faHome} color="#2d1243" />
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="icon" to="/about">
        <FontAwesomeIcon icon={faUser} color="#2d1243" />
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="icon" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#2d1243" />
      </NavLink>
    </nav>

    <ul>
      <li>
        <a target="blank" rel='noreferrer' href='https://www.linkedin.com/in/lola-martinhao/'>
          <FontAwesomeIcon icon={faLinkedin} color="#2d1243" />
        </a>
      </li>
      <li>
        <a target="blank" rel='noreferrer' href='https://github.com/lmartinhao'>
          <FontAwesomeIcon icon={faGithub} color="#2d1243" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
