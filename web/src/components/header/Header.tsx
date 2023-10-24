import Button from '../button/Button'
import './Header.css'
import image from '../../images/background-header.jpg'

export default function Header({ propFunctions }) {
  return (
    <header
      style={{
        backgroundImage: `url(${image})`
      }}
    >
      <section className='container'>
        <p className='hero-subtitle'> A SUA CASA NOVA A UM CLIQUE</p>
        <p className='hero-title'>O QUE VOCÊ DESEJA?</p>
        <div className='buttons'>
          <Button
            text='alugar'
            width='150px'
            height='50px'
            fontSize='20px'
            onClick={{
              f: propFunctions.getProperties,
              p: { buy_or_rent: 'rent' }
            }}
          />
          <Button
            text='comprar'
            width='150px'
            height='50px'
            fontSize='20px'
            onClick={{
              f: propFunctions.getProperties,
              p: { buy_or_rent: 'buy' }
            }}
          />
        </div>
      </section>
    </header>
  )
}
