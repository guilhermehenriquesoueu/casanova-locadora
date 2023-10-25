import './App.css'
import { Element } from 'react-scroll'
import Header from './components/header/Header'
import NavBar from './components/navbar/Navbar'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Element name='main'>
        <main className='container'>
          <Outlet />
        </main>
      </Element>
    </>
  )
}

export default App
