import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  render (
    <div><h1>Custom App</h1></div>
  )
}
const ReactElement = {
  type: "a",
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  children: 'Click me to visit google'
}


createRoot(document.getElementById('root')).
render(
  ReactElement
)
