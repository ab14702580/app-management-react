import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { RouterProvider } from 'react-router';
import AppContext from './context/Context.jsx';
import router from '../router/routes.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContext>
      <RouterProvider router={router} />
    </AppContext>
  </StrictMode>,
)
