import './index.scss'

const Lewacar = () => {

  return (
    <div className='proj-card'>
      <div>
        <div className='proj-icon'>
          <i className="devicon-rails-plain"></i>
        </div>
        <div className='proj-title'>
          LeWacar
        </div>
        <div >
          <a className="proj-link" href="https://lewacar.herokuapp.com/" target="_blank" rel="noopener noreferrer">visite o site</a>
        </div>
        <div className='proj-text'>
          E-commerce fictício que simula a compra e venda de caronas para pontos turísticos famosos, com possibilidade de pagamento por Pix integrado ao sistema.
        </div>
      </div>
      <div className='tag-box'>
          <div className='proj-tag'>
            Ruby
          </div>
          <div className='proj-tag'>
            Rails
          </div>
          <div className='proj-tag'>
            JavaScript
          </div>
          <div className='proj-tag'>
            HTML
          </div>
          <div className='proj-tag'>
            SASS
          </div>
        </div>
    </div>
  )
}

export default Lewacar
