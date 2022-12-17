import './index.scss'

const Portfolio = () => {

  return (
    <div className='proj-card'>
      <div className='d-flex justify-content-center'>
        <div className='proj-icon'>
          <i className="devicon-rails-plain"></i>
        </div>
        <div className='proj-title'>
          $Planner
        </div>
      </div>
      <div >
        <a className="proj-link-inactive" href="#" target="_blank" rel="noopener noreferrer">visite o site</a>
      </div>
      <div className='proj-text'>
        E-commerce fictício que simula a compra e venda de passeios para pontos turísticos famosos, com possibilidade de pagamento por Pix integrado ao sistema.
      </div>
      <div className='proj-tags'>

      </div>
    </div>
  )
}

export default Portfolio
