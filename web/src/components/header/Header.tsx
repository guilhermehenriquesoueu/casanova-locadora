import Button from '../button/Button'
import './Header.css'
import image from '../../images/background-header.jpg'
import { useMyContext } from '../../context/ContextApi'

export default function Header() {
  const { getProperties } = useMyContext()

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
              myFunction: getProperties,
              parameters: { buy_or_rent: 'rent' }
            }}
            href='/search'
          />
          <Button
            text='comprar'
            width='150px'
            height='50px'
            fontSize='20px'
            onClick={{
              myFunction: getProperties,
              parameters: { buy_or_rent: 'buy' }
            }}
            href='/search'
          />
        </div>
      </section>
    </header>
  )
}
