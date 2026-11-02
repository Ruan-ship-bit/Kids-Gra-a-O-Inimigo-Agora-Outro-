import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from "react-router-dom"
import PerfilUsuario from './PerfilUsuario.jsx'
import Carrinho from './Carrinho.jsx' 
import { CarrinhoProvider } from './ContextoCarrinho.jsx'


const Router = createBrowserRouter([

  {path: "/", element: <App/> },
  {path: "/user", element: <PerfilUsuario/> },
  { path: "/carrinho", element: <Carrinho/> }
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
        <CarrinhoProvider>
          <RouterProvider router={Router} />
      </CarrinhoProvider>
  </StrictMode>,
)
