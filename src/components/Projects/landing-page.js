import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';


const Landing = () => {

  return (
    <div className='proj-card'>
      <div className='d-flex justify-content-center'>
        <div className='proj-icon'>
          <i class="devicon-html5-plain"></i>
        </div>
        <div className='proj-title'>
          Landing Page
        </div>
        <div >
          <a className="proj-link" href="https://landing-page-sweetestclub.netlify.app/" target="_blank" rel="noopener noreferrer">visite o site</a>
        </div>
        <div className='proj-text'>
          Web page, construída com interface responsiva que se ajusta a diferentes tipos de tela, foi pensada e desenvolvida para atender uma empresa fictícia de assinatura de doces, criada apenas para fins didáticos.
        </div>
        <div className='proj-stats'>
          <FontAwesomeIcon icon={faCircleCheck} color="#52b788" /> Deployed | <FontAwesomeIcon icon={faPersonDigging} color="#DE8F6E" /> Finished
        </div>
        <div className='tag-box'>
          <div className='proj-tag'>
            React
          </div>
          <div className='proj-tag'>
            JavaScript
          </div>
          <div className='proj-tag'>
            HTML
          </div>
          <div className='proj-tag'>
            SASS
          </div>
          <div className='proj-tag'>
            CSS
          </div>
        </div>

      </div>
      <a className="stats-link-sec" href="https://github.com/lmartinhao/sweetest-club-landing-page" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
    </div>
  )
}

export default Landing
