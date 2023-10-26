import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import { MyContextProvider } from './context/ContextApi.tsx'
import Search from './components/search/Search.tsx'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'contact',
        element: <h1>fale conosco</h1>
      },
      {
        path: 'blog',
        element: <h1>blog</h1>
      },
      {
        path: 'app',
        element: <h1>app</h1>
      },
      {
        path: 'search',
        element: <Search />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MyContextProvider>
      <RouterProvider router={router} />
    </MyContextProvider>
  </React.StrictMode>
)
