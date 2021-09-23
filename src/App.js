import React, { useState } from 'react'
import './App.css'
import Container from './components/Container'
import { APIContextProvider } from './context/ApiContext'

const App = () => {


  return (
    <APIContextProvider>
      <Container />
    </APIContextProvider>
  )
}

export default App
