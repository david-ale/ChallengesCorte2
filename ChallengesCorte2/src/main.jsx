import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Father } from './Challenge09/Father.jsx'
import { TodoApp } from './Challenge10 y 11/TodoApp.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Father/>
    <TodoApp/>
  </React.StrictMode>,
)
