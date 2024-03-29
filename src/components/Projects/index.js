import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { Project } from './Project';
import { projectList } from './projects';

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')


  useEffect(() => {
    // wrap the async call
    const loadData = async () => {
      return setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    };
    // then calling here
    loadData();
  }, [])

  return (
    <div className='container proj-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters letterClass={letterClass}
            strArray={['P', 'r', 'o', 'j', 'e', 't', 'o', 's']}
            idx={15}
          />
        </h1>
        <p>
          Mais do meu <a className="text-link" href="https://github.com/lmartinhao" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="text-link" icon={faGithub} color="#fff" />GitHub</a>
        </p>
        <p>
          Me ensinaram que <strong>sempre vale a pena se você estiver aprendendo</strong>, então eu busco sempre tentar algo novo. Minha última aventura foi com React para fazer este portfolio!
          Nesta página você encontra os projetos maiores aos quais tenho me dedicado.
        </p>
        <p>
          <FontAwesomeIcon icon={faCircleInfo} color="#fff" /> Você encontra informações úteis para o uso das aplicações no read.me dos projetos no GitHub, estes estão linkados nos cards.
        </p>
      </div>
      <h1 className='title-sign text-center'>
        Destaques
      </h1>
      <div className='card-zone'>
        <div className='cards'>
          {projectList.map(project => {
            return (
              <div key={project.id.toString()}>
                <Project
                  icon={project.icon}
                  title={project.title}
                  url={project.url}
                  text={project.text}
                  deployed={project.deployed}
                  update={project.update}
                  tags={project.tags}
                  github={project.github}
                  />
                </div>
            )
          }).reverse()
        }
        </div>
      </div>
    </div>
  )
}

export default Projects
