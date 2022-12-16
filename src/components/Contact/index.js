import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';

const Contact = () => {
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
    <div className='container contact-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['C', 'o', 'n', 't', 'a', 't', 'o']}
            idx={15}
          />
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus arcu vel diam porttitor fermentum. Curabitur ut dolor non enim rutrum congue. Morbi sagittis tellus eget tincidunt sagittis. Mauris eget nulla dictum, sagittis tellus ac, ornare nunc. Aenean in ligula enim. Nullam erat ex, feugiat et lacus ut, ultrices egestas lectus. Nunc ullamcorper in sem bibendum fermentum. Morbi egestas erat at lectus tristique semper.
        </p>
      </div>
    </div>
  )
}

export default Contact
