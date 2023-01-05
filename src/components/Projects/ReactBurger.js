import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';


const ReactBurger = () => {

  return (
    <div className='proj-card'>
      <div className='d-flex justify-content-center'>
        <div className='proj-icon'>
          <i className="devicon-rails-plain"></i>
        </div>
        <div className='proj-title'>
          React Burger
        </div>
        <div >
          <a className="proj-link" href="https://react-burger-lmartinhao.vercel.app/" target="_blank" rel="noopener noreferrer">visite o site</a>
        </div>
        <div className='proj-text'>
          React app no modelo SPA que simula um pedido online em uma hamburgueria fictícia. Os itens adicionados no carrinho modificam o contador.
        </div>
        <div className='proj-stats'>
          <FontAwesomeIcon icon={faCircleXmark} color="#E87461" /> Coding | <FontAwesomeIcon icon={faPersonDigging} color="#DE8F6E" /> Working on cart
        </div>
        <div className='tag-box'>
          <div className='proj-tag'>
            React
          </div>
          <div className='proj-tag'>
            Vite
          </div>
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
      <a className="stats-link-sec" href="https://github.com/lmartinhao/react-burger" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
    </div>
  )
}

export default ReactBurger
