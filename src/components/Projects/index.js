import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react'

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
    <div className='container about-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters letterClass={letterClass}
              strArray={['D', 'e', 's', 't', 'a', 'q', 'u', 'e', 's']}
              idx={15}
            />
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus arcu vel diam porttitor fermentum. Curabitur ut dolor non enim rutrum congue. Morbi sagittis tellus eget tincidunt sagittis. Mauris eget nulla dictum, sagittis tellus ac, ornare nunc. Aenean in ligula enim. Nullam erat ex, feugiat et lacus ut, ultrices egestas lectus. Nunc ullamcorper in sem bibendum fermentum. Morbi egestas erat at lectus tristique semper.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus arcu vel diam porttitor fermentum. Curabitur ut dolor non enim rutrum congue. Morbi sagittis tellus eget tincidunt sagittis. Mauris eget nulla dictum, sagittis tellus ac, ornare nunc. Aenean in ligula enim. Nullam erat ex, feugiat et lacus ut, ultrices egestas lectus. Nunc ullamcorper in sem bibendum fermentum. Morbi egestas erat at lectus tristique semper.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus arcu vel diam porttitor fermentum. Curabitur ut dolor non enim rutrum congue. Morbi sagittis tellus eget tincidunt sagittis. Mauris eget nulla dictum, sagittis tellus ac, ornare nunc. Aenean in ligula enim. Nullam erat ex, feugiat et lacus ut, ultrices egestas lectus. Nunc ullamcorper in sem bibendum fermentum. Morbi egestas erat at lectus tristique semper.
          </p>
        </div>
        <div className='card-zone'>
          <h1 className='title-sign text-center'>
            Projetos
          </h1>
          <div className='cards'>
            <div className='proj-card'>
              <div class='card-icon'>
                <i class="devicon-html5-plain"></i>
              </div>
              {'\n'}
              HTML 5
            </div>
            <div className='proj-card'>
              <div class='card-icon'>
                <i class="devicon-css3-plain"></i>
              </div>
              {'\n'}
              CSS3
            </div>
            <div className='proj-card'>
              <div class='card-icon'>
                <i class="devicon-javascript-plain"></i>
              </div>
              {'\n'}
              JavaScript
            </div>
            <div className='proj-card'>
              <div class='card-icon'>
                <i class="devicon-typescript-plain"></i>
              </div>
              {'\n'}
              TypeScript
            </div>
          </div>
        </div>
    </div>
  )
}

export default Projects
