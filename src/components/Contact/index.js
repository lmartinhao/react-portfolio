import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

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

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_om2w8mj', 'template_vrjjyao', refForm.current, '9pYbBxJ36tuu3lv7-')
    .then(
      () => {
        alert('Mensagem enviada! Obrigada :)')
        window.location.reaload(false)
      },
      () => {
        alert('Falha ao enviar, por favor tente novamente')
      }
    )
  }

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
          Preparei esse forms pra facilitar o seu contato! Se preferir, também pode me chamar no <a className="text-link" href="https://www.linkedin.com/in/lola-martinhao/" target="_blank" rel="noopener noreferrer">LinkedIn</a> ♥
        </p>
        <div className='contact-form'>
          <form ref={refForm} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input type="text" name="name" placeholder="Nome" required />
              </li>
              <li className="half">
                <input type="email" name="email" placeholder="e-mail" required />
              </li>
              <li>
                <input placeholder="Assunto" type="text" name="subject" required />
              </li>
              <li>
                <textarea placeholder="Mensagem" name="message" required></textarea>
              </li>
              <li>
                <input type="submit" className='contact-button' value="ENVIAR" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
