import { useState } from 'react'
import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Counter from './Pages/Counter'

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/app/counter`} element={<Counter />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
