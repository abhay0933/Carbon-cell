import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigationBar from './components/NavigationBar'
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wallet from './components/Wallet'
import CryptocurrencyPrices from './components/PieChart'
import Organization from './pages/Organization'
import Assets from './pages/Assets'
import Trade from './pages/Trade'
import Wallets from './pages/Wallets'
import History from './pages/History'

function App() {
  

  return (
    <div className='appContainer'>
      <BrowserRouter>
      <Routes>
      <Route path='/' element= {<Home />} />
      <Route path='/assets' element= {<Assets />} />
      <Route path='/organization' element= {<Organization />} />
      <Route path='/trade' element= {<Trade />} />
      <Route path='/history' element= {<History />} />
      <Route path='/wallet' element= {<Wallets />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
