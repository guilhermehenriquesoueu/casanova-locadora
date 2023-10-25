import { createContext, useContext, useState } from 'react'
import { scroller } from 'react-scroll'

const MyContext = createContext({})

export function useMyContext() {
  return useContext(MyContext)
}

export function MyContextProvider({ children }) {
  const [properties, setProperties] = useState([])

  const scrollToElement = () => {
    scroller.scrollTo('main', {
      duration: 800,
      smooth: 'easeInOutQuint'
    })
  }

  const getProperties = async (filters) => {
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

  const openModal = (id: string) => {
    console.log(id)
    const modal = document.querySelector(`#modal-${id}`)
    modal?.classList.add('is-active')
  }

  const closeModal = (id: string) => {
    console.log(id)
    const modal = document.querySelector(`#modal-${id}`)
    modal?.classList.remove('is-active')
  }

  return (
    <MyContext.Provider
      value={{
        scrollToElement,
        getProperties,
        properties,
        openModal,
        closeModal
      }}
    >
      {children}
    </MyContext.Provider>
  )
}
