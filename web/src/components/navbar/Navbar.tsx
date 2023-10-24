import { useState } from 'react'
import './Navbar.css'
import logo from '../../images/logo.jpg'

export default function NavBar() {
  const [isActive, setIsActive] = useState(false)

  const toggleMenu = () => {
    setIsActive(!isActive)
  }

  return (
    <nav className={`navbar ${isActive ? 'is-active' : ''}`}>
      <div className='navbar-brand'>
        <a
          href=''
          className='navbar-item'
        >
          <img
            src={logo}
            alt='Logo'
          />
        </a>

        <a
          role='button'
          className={`navbar-burger ${isActive ? 'is-active' : ''}`}
          aria-label='menu'
          aria-expanded='false'
          onClick={toggleMenu}
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>

      <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className='navbar-end'>
          <a className='button is-white mx-6'>fale conosco</a>
          <a className='button is-white mx-6'>blog</a>
          <a className='button is-white mx-6'>boleto bancário</a>
          <a className='button is-white mx-6'>área restrita</a>
        </div>
      </div>
    </nav>
  )
}
