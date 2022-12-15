import './index.scss'
import LogoL from '../../assets/images/logo-l.png';
import Headphone from '../../assets/images/headphone.png';
import Mouse from '../../assets/images/mouse.png';

const Image = () => {
  return (
    <div className="logo-container">
      <img className="sec-image" id="mouse" src={Mouse} alt="mouse" />
      <img className="main-image" src={LogoL} alt="developer" />
      <img className="sec-image" id="headphone" src={Headphone} alt="headphone" />
    </div>
  )
}

export default Image
