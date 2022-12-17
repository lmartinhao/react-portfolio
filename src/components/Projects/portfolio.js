import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

const Portfolio = () => {

  return (
    <div className='proj-card'>
      <div>
        <div className='proj-icon'>
          <i className="devicon-react-plain"  ></i>
        </div>
        <div className='proj-title'>
          Portfolio
        </div>
        <div >
          <a className="proj-link" href="https://lewacar.herokuapp.com/" target="_blank" rel="noopener noreferrer">visite o site</a>
        </div>
        <div className='proj-text'>
          E-commerce fictício que simula a compra e venda de passeios para pontos turísticos famosos, com possibilidade de pagamento por Pix integrado ao sistema.
        </div>
        <div className='proj-stats'>
          <FontAwesomeIcon icon={faCircleCheck} color="#52b788" /> Deployed |
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
      <a className="stats-link" href="https://github.com/lmartinhao/react-portfolio" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
    </div>
  )
}

export default Portfolio
