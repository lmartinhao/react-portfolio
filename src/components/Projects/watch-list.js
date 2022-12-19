import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';


const Watch = () => {

  return (
    <div className='proj-card'>
      <div className='d-flex justify-content-center'>
        <div className='proj-icon'>
          <i className="devicon-rails-plain"></i>
        </div>
        <div className='proj-title'>
          Watch List
        </div>
        <div >
          <a className="proj-link-inactive" href="#" target="_blank" rel="noopener noreferrer">visite o site</a>
        </div>
        <div className='proj-text'>
          Web page para construção de listas de filmes, onde os visitantes podem fazer comentários e avaliações (em sistema de estrelas) sobre as listas.
        </div>
        <div className='proj-stats'>
          <FontAwesomeIcon icon={faCircleXmark} color="#E87461" /> Coding | <FontAwesomeIcon icon={faPersonDigging} color="#DE8F6E" /> Working on models
        </div>
        <div className='tag-box'>
          <div className='proj-tag'>
            Ruby
          </div>
          <div className='proj-tag'>
            Rails
          </div>
          <div className='proj-tag'>
            CSS
          </div>
          <div className='proj-tag'>
            HTML
          </div>
          <div className='proj-tag'>
            SASS
          </div>
          <div className='proj-tag'>
            JavaScript
          </div>
        </div>

      </div>
      <a className="stats-link-sec" href="https://github.com/lmartinhao/rails-ever-watch-lists" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
    </div>
  )
}

export default Watch
