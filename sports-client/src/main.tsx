import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.tsx'

// array destructuring example
// const [, zebra] = ["giraffe", "zebra", "bear"]
// console.log(zebra)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
