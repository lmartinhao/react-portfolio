import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';


const AluraMidi = () => {

  return (
    <div className='proj-card'>
      <div className='d-flex justify-content-center'>
        <div className='proj-icon'>
          <i className="devicon-rails-plain"></i>
        </div>
        <div className='proj-title'>
          AluraMidi
        </div>
        <div >
          <a className="proj-link" href="https://aluramidi-two.vercel.app/" target="_blank" rel="noopener noreferrer">visite o site</a>
        </div>
        <div className='proj-text'>
          Esta é uma releitura de construção do AluraMidi, onde é simulada uma bateria com os sons produzidos por um teclado através de JavaScript.
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
      <a className="stats-link-sec" href="https://github.com/lmartinhao/aluramidi" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
    </div>
  )
}

export default AluraMidi
