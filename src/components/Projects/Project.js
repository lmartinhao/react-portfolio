import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons'

export function Project(props) {
  function isDeployedIcon() {
    if (props.deployed) {
      return <FontAwesomeIcon icon={faCircleCheck} color="#52b788" />
    } else {
      return <FontAwesomeIcon icon={faCircleXmark} color="#E87461" />
    }
  }

  function isDeployedText() {
    if (props.deployed) {
      return 'Deployed'
    } else {
      return 'Undeployed'
    }
  }

  function hasSite() {
    if (props.url === '') {
      return <a className="proj-link-inactive" href="https://github.com/lmartinhao" target="_blank" rel="noopener noreferrer">visite o site</a>
    } else {
      return <a className="proj-link" href={props.url} target="_blank" rel="noopener noreferrer">visite o site</a>
    }
  }

  return (
    <div className='proj-card'>
      <div>
        <div className='proj-icon'>
          {<img src={props.icon} alt='logotipo do framework/library' />}
        </div>
        <div className='proj-title'>
          {props.title}
        </div>
        <div >
          {hasSite()}
        </div>
        <a className="stats-link" href={props.github} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
        <div className='proj-text'>
          {props.text}
        </div>
        <div className='proj-stats'>
          {isDeployedIcon()} {isDeployedText()} | <FontAwesomeIcon icon={faPersonDigging} color="#DE8F6E" /> {props.update}
        </div>

        <div className='tag-box'>
          {props.tags.map(tag => (
            <div className='proj-tag'>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
