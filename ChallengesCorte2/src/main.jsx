import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Father } from './Challenge09/Father.jsx'
import { TodoApp } from './Challenge10 y 11/TodoApp.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { MainApp } from './components/MainApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainApp/>
  </BrowserRouter>
)
