import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';


const Pong = () => {

  return (
    <div className='proj-card'>
      <div className='d-flex justify-content-center'>
        <div className='proj-icon'>
          <i className="devicon-rails-plain"></i>
        </div>
        <div className='proj-title'>
          Pong
        </div>
        <div >
          <a className="proj-link-inactive" href="#" target="_blank" rel="noopener noreferrer">visite o site</a>
        </div>
        <div className='proj-text'>
          Minha primeira experiência em JavaScript, é uma releitura de construção do famoso jogo Pong utilizando o p5.js.
        </div>
        <div className='proj-stats'>
          <FontAwesomeIcon icon={faCircleXmark} color="#E87461" /> Undeployed | <FontAwesomeIcon icon={faPersonDigging} color="#DE8F6E" /> Finished
        </div>
        <div className='tag-box'>
          <div className='proj-tag'>
            JavaScript
          </div>
        </div>

      </div>
      <a className="stats-link-trd" href="https://github.com/lmartinhao/pong" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
    </div>
  )
}

export default Pong
