import './index.scss'

const Portfolio = () => {

  return (
    <div className='proj-card'>
      <div>
        <div className='proj-icon'>
          <i className="devicon-react-plain"  ></i>
        </div>
        <div className='proj-title'>
          Portfolio
        </div>
        <div >
          <a className="proj-link" href="https://lewacar.herokuapp.com/" target="_blank" rel="noopener noreferrer">visite o site</a>
        </div>
        <div className='proj-text'>
          E-commerce fictício que simula a compra e venda de passeios para pontos turísticos famosos, com possibilidade de pagamento por Pix integrado ao sistema.
        </div>
      </div>
    </div>
  )
}

export default Portfolio
