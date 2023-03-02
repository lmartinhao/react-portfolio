import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Sobre = () => {
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
    <div className='container about-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters letterClass={letterClass}
              strArray={['S', 'o', 'b', 'r', 'e', ' ', 'm', 'i', 'm']}
              idx={15}
            />
          </h1>
          <p>
          <a className="text-link" href="https://drive.google.com/file/d/1aoCv6J4LK6OOyl9VyJYZMHsGxu6aggwr/view?usp=sharing" target="_blank" rel="noopener noreferrer">Currículo (pt-br)</a>
          </p>
          <p>
          <FontAwesomeIcon icon={faCoffee} color="#fff" /> <strong>Oi! Sou uma desenvolvedora front-end </strong> focada em React com TypeScript.
            Nesta página você encontra as linguagens, tools, frameworks e libraries que eu tenho mais familiaridade, mas já adianto que sou super esforçada para aprender coisas novas e aprofundar o que eu já tenho conhecimento!
          </p>
          <p>
            Antes de fazer a migração para dev, construí uma carreira sólida em CX, o que me proporcionou muita experiência em suporte e atenção ao usuário, além da gestão de pessoas.
            Minhas soft skills incluem colaboração, comunicação não violenta, atenção aos detalhes, mediação de conflitos, pensamento estratégico voltado para o negócio e maturidade para tomada de decisões.
          </p>
          <p>
            Tenho experiência em startups, inclusive as que estão passando/ vão passar por hypergrowth &#40;tks <strong>Nubank</strong> e <strong>Kavak</strong> ♥&#41;. E aí, vamos trabalhar juntos? :&#41;
          </p>
        </div>
        <h1 className='title-sign-skill text-center'>
          Skills
        </h1>
        <div className='card-zone'>
          <div className='cards'>
            <div className='card'>
              <div className='card-icon'>
                <i className="devicon-html5-plain"></i>
              </div>
              {'\n'}
              HTML 5
            </div>
            <div className='card'>
              <div className='card-icon'>
                <i className="devicon-css3-plain"></i>
              </div>
              {'\n'}
              CSS3
            </div>
            <div className='card'>
              <div className='card-icon'>
                <i className="devicon-javascript-plain"></i>
              </div>
              {'\n'}
              JavaScript
            </div>
            <div className='card'>
              <div className='card-icon'>
                <i className="devicon-typescript-plain"></i>
              </div>
              {'\n'}
              TypeScript
            </div>
            <div className='card'>
              <div className='card-icon'>
                <i className="devicon-react-original"></i>
              </div>
              {'\n'}
              React
            </div>
            <div className='card'>
              <div className='card-icon'>
                <i className="devicon-ruby-plain"></i>
              </div>
              {'\n'}
              Ruby
            </div>
            <div className='card'>
              <div className='card-icon'>
                <i className="devicon-rails-plain"></i>
              </div>
              {'\n'}
              Ruby on Rails
            </div>
            <div className='card'>
              <div className='card-icon'>
                <i className="devicon-sass-original"></i>
              </div>
              {'\n'}
              SASS
            </div>
            <div className='card'>
              <div className='card-icon'>
                <i className="devicon-nodejs-plain"></i>
              </div>
              {'\n'}
              NodeJs
            </div>
            <div className='card'>
              <div className='card-icon'>
                <i className="devicon-bootstrap-plain"></i>
              </div>
              {'\n'}
              Bootstrap
            </div>
            <div className='card'>
              <div className='card-icon'>
                <i className="devicon-webpack-plain"></i>
              </div>
              {'\n'}
              Webpack
            </div>
            <div className='card'>
              <div className='card-icon'>
                <i className="devicon-git-plain"></i>
              </div>
              {'\n'}
              Git
            </div>
            <div className='card'>
              <div className='card-icon'>
                <i className="devicon-github-original"></i>
              </div>
              {'\n'}
              GitHub
            </div>
            <div className='card'>
              <div className='card-icon'>
                <i className="devicon-nextjs-original"></i>
              </div>
              {'\n'}
              Next.js
            </div>
            <div className='card'>
              <div className='card-icon'>
                <i className="devicon-postgresql-plain"></i>
              </div>
              {'\n'}
              PostgreSQL
            </div>
            <div className='card'>
              <div className='card-icon'>
                <i className="devicon-yarn-plain"></i>
              </div>
              {'\n'}
              Yarn
            </div>

          </div>
        </div>
    </div>
  )
}

export default Sobre
