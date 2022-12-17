import './index.scss'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Vizinapp = () => {

  return (
    <div className='proj-card'>
      <div className='d-flex justify-content-center'>
        <div className='proj-icon'>
          <i className="devicon-rails-plain"></i>
        </div>
        <div className='proj-title'>
          vizinAPP
        </div>
        <div>
          <a className="proj-link" href="https://vizinapp.herokuapp.com/" target="_blank" rel="noopener noreferrer">visite o site</a>
        </div>
        <div className='proj-text'>
          Comunicação e gestão em condomínios. A aplicação possui 2 interfaces (admin ou residente), permitindo interação leve e eficiente entre os moradores, uso organizado das áreas comuns e acesso rápido a informações e documentos relevantes.
        </div>
        <div className='proj-stats'>
          <FontAwesomeIcon icon={faCircleCheck} color="#52b788" /> Deployed |
        </div>
        <div className='tag-box'>
          <div className='proj-tag'>
            Figma
          </div>
          <div className='proj-tag'>
            Ruby
          </div>
          <div className='proj-tag'>
            Rails
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
        </div>
        <a className="stats-link" href="https://github.com/lmartinhao/vizinapp" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
      </div>
    </div>
  )
}

export default Vizinapp
