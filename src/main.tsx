import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ProductDataProvider } from './components/Products/provider.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProductDataProvider>
      <App />
    </ProductDataProvider>
  </StrictMode>,
)
