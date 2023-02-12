import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Image from '../HomeImage'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['m', 'e', 'u', ' ', 'n', 'o', 'm', 'e', ' ', 'é', ' ', 'L', 'o', 'l', 'a', ',']
  const jobArray = ['e', ' ', 'e', 'u', ' ', 's', 'o', 'u', ' ', 'w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
    // wrap the async call
    const loadData = async () => {
      return setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 6000)
    };
    // then calling here
    loadData();
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
          <h2>Front-end dev | React lover | Vite enthusiast</h2>
          <Link to="/contato" className='flat-button'>Contato</Link>
        </div>
      <Image />
      </div>
    </>
  )
}

export default Home
