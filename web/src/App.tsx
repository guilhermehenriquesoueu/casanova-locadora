import { useState } from 'react'
import { Element, scroller } from 'react-scroll'

import './App.css'
import Header from './components/header/Header'
import CardContainer from './components/card-container/CardContainer'
import Search from './components/search/Search'
import NavBar from './components/navbar/Navbar'

function App() {
  const [properties, setProperties] = useState([])

  function scrollToElement() {
    scroller.scrollTo('main', {
      duration: 800,
      smooth: 'easeInOutQuint'
    })
  }

  async function getProperties(filters) {
    const data = await fetch('http://localhost:3000/properties/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        filterOptions: filters
      })
    })

    const properties = await data.json()

    setProperties(properties)

    scrollToElement()
  }

  return (
    <>
      <NavBar />
      <Header propFunctions={{ getProperties }} />
      <Element name='main'>
        <main className='container'>
          <Search propFunctions={{ getProperties }} />
          <CardContainer properties={properties} />
        </main>
      </Element>
    </>
  )
}

export default App
