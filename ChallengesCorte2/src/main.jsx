import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { MainApp } from './components/MainApp.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
    <MainApp/>
 </BrowserRouter>
)
