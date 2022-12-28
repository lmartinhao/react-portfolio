import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';


const Brigaderia = () => {

  return (
    <div className='proj-card'>
      <div className='d-flex justify-content-center'>
        <div className='proj-icon'>
          <i className="devicon-rails-plain"></i>
        </div>
        <div className='proj-title'>
          Brigaderia
        </div>
        <div >
          <a className="proj-link-inactive" href="#" target="_blank" rel="noopener noreferrer">visite o site</a>
        </div>
        <div className='proj-text'>
          Aplicação para organização financeira que ajuda o usuário a calcular a quantia de dinheiro que deveria aplicar em cada setor do dia a dia, a depender da entrada e saída de ativos.
        </div>
        <div className='proj-stats'>
          <FontAwesomeIcon icon={faCircleXmark} color="#E87461" /> Structuring | <FontAwesomeIcon icon={faPersonDigging} color="#DE8F6E" /> Working on schema
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
      <a className="stats-link-sec" href="https://github.com/lmartinhao/rails-brigaderia" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
    </div>
  )
}

export default Brigaderia
