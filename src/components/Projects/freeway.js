import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';


const Freeway = () => {

  return (
    <div className='proj-card'>
      <div className='d-flex justify-content-center'>
        <div className='proj-icon'>
          <i className="devicon-rails-plain"></i>
        </div>
        <div className='proj-title'>
          Freeway
        </div>
        <div >
          <a className="proj-link" href="https://javascript-freeway.vercel.app/" target="_blank" rel="noopener noreferrer">visite o site</a>
        </div>
        <div className='proj-text'>
          Esta é uma releitura de construção do jogo Freeway, onde usando as setas do teclado você ganha pontos ao ajudar a atravessar um gatinho em uma rodovia.
        </div>
        <div className='proj-stats'>
          <FontAwesomeIcon icon={faCircleCheck} color="#E87461" /> Deployed | <FontAwesomeIcon icon={faPersonDigging} color="#DE8F6E" /> Adding scores system
        </div>
        <div className='tag-box'>
          <div className='proj-tag'>
            JavaScript
          </div>
          <div className='proj-tag'>
            HTML
          </div>
          <div className='proj-tag'>
            CSS
          </div>
        </div>

      </div>
      <a className="stats-link-trd" href="https://github.com/lmartinhao/javascript-freeway" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
    </div>
  )
}

export default Freeway
