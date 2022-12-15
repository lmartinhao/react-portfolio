import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['m', 'e', 'u', ' ', 'n', 'o', 'm', 'e', ' ', 'é', ' ', 'L', 'o', 'l', 'a', ',']
  const jobArray = ['e', ' ', 'e', 'u', ' ', 's', 'o', 'u', ' ', 'w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
          <span className={letterClass}>O</span>
          <span className={`${letterClass} _13`}>i</span>
          <span className={`${letterClass} _14`}>,</span>
          <br />
          <AnimatedLetters letterClass={letterClass}
          strArray={nameArray}
          idx={15} />
          <br />
          <AnimatedLetters letterClass={letterClass}
          strArray={jobArray}
          idx={30} />
          </h1>
          <h2>Fullstack dev | Ruby on rails enthusiast | React newbie</h2>
          <Link to="/contact" className='flat-button'>CONTACT ME</Link>
        </div>

      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
