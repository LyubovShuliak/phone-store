import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from './routes';
import './App.css';

function App() {
  const routes = useRoutes(false)
  return (
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  )
}

export default App;
