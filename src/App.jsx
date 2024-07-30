import { useState } from 'react'
import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Counter from './Pages/Counter'
import Terms from './Pages/Terms'

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path={`/`} element={<Counter />} />
          <Route path={`/app/counter`} element={<Counter />} />
          <Route path={`/app/terms of service`} element={<Terms />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
