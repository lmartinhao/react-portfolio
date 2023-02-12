import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { Project } from './Project';

const projects = [
  {
    id: 2,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
    title: 'AluraMIDI',
    url: 'https://aluramidi-two.vercel.app/',
    text: 'Teclado em HTML e CSS com sons via JavaScript',
    deployed: true,
    update: 'Finished',
    tags: [
      'html', 'css', 'javascript'
    ],
    github: 'https://github.com/lmartinhao/aluramidi'
  },
  {
    id: 3,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg',
    title: 'Landing page',
    url: 'https://landing-page-sweetestclub.netlify.app/',
    text: 'Landing page com formulário de cadastro em HTML e CSS',
    deployed: false,
    update: 'Finished',
    tags: [
      'html', 'css'
    ],
    github: 'https://github.com/lmartinhao/sweetest-club-landing-page'
  },
  {
    id: 4,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg',
    title: 'Le WaCar',
    url: 'https://react-todo-list-lmartinhao.vercel.app/',
    text: 'App em Ruby on rails com Devise, Pundit e dados no PostgreSQL',
    deployed: true,
    update: 'App Style',
    tags: [
      'ruby', 'rails', 'html', 'sass', 'javascrip'
    ],
    github: 'https://github.com/lmartinhao/rails-lewacar'
  },
  {
    id: 5,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    title: 'React Burger',
    url: 'https://react-burger-lmartinhao.vercel.app/',
    text: 'Aplicação fictícia de carrinho de compras',
    deployed: false,
    update: 'Componente do carrinho',
    tags: [
      'react', 'javascript', 'html', 'css'
    ],
    github: 'https://github.com/lmartinhao/react-burger'
  },
  {
    id: 6,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg',
    title: 'vizinAPP',
    url: 'https://vizinapp.herokuapp.com/',
    text: 'App em Ruby on rails com Devise, Active Admin e dados no PostgreSQL',
    deployed: true,
    update: 'Ajustar admin style',
    tags: [
      'ruby', 'rails', 'html', 'sass', 'javascrip', 'figma'
    ],
    github: 'https://github.com/lmartinhao/vizinapp'
  },
  {
    id: 7,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    title: 'Ignite Feed',
    url: 'https://react-feed-page.vercel.app/',
    text: 'Social feed desenhado no Figma e criado em React com TypeScript',
    deployed: true,
    update: 'Finished',
    tags: [
      'react', 'typescrip', 'html', 'css module', 'figma'
    ],
    github: 'https://github.com/lmartinhao/react-feed-page'
  },
  {
    id: 8,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    title: 'Cool ToDo',
    url: 'https://react-todo-list-lmartinhao.vercel.app/',
    text: 'Task management desenhado no Figma e criado em React com TypeScript',
    deployed: true,
    update: 'Finished',
    tags: [
      'react', 'typescrip', 'html', 'css module', 'figma'
    ],
    github: 'https://github.com/lmartinhao/react-todo-list'
  },
  {
    id: 9,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    title: 'Bubble Tasks',
    url: 'https://bubble-tasks.vercel.app/',
    text: 'Task management criado em React com TypeScript e animações feitas em CSS',
    deployed: false,
    update: 'Finished',
    tags: [
      'react', 'typescrip', 'html', 'css module'
    ],
    github: 'https://github.com/lmartinhao/dream-task-react'
  },
  {
    id: 10,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    title: 'Setup Habits',
    url: 'https://setup-habits.vercel.app/',
    text: 'App de tracking de hábitos disponível em vs web e mobile com API própria',
    deployed: false,
    update: 'Deploying server',
    tags: [
      'react', 'typescrip', 'node', 'react native', 'tailwind'
    ],
    github: 'https://github.com/lmartinhao/setup'
  },
  {
    id: 11,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    title: 'Ignite Timer',
    url: 'https://lola-ignite-timer.vercel.app/',
    text: 'Sistema de timer tipo pomodoro com dados armazenados em local storage',
    deployed: true,
    update: 'Finished',
    tags: [
      'react', 'typescrip', 'styled components', 'react hook form', 'local storage'
    ],
    github: 'https://github.com/lmartinhao/02-ignite-timer'
  },
  {
    id: 12,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    title: 'Coffee App',
    url: '',
    text: 'Sistema delivery de café com sacola de compras e forms de endereço para entrega',
    deployed: false,
    update: 'Coding context',
    tags: [
      'react', 'typescrip', 'styled components', 'react hook form', 'local storage'
    ],
    github: 'https://github.com/lmartinhao/coffee-delivery'
  },
  {
    id: 13,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    title: 'Multiform',
    url: 'https://multiform-one.vercel.app/',
    text: 'Forms separados em pages sob um mesmo context para manutenção do state',
    deployed: true,
    update: 'Finished',
    tags: [
      'react', 'typescrip', 'styled components', 'context api'
    ],
    github: 'https://github.com/lmartinhao/multiform'
  },
]

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
          {projects.map(project => {
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
