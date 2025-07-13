import React from 'react'
import { Route, Routes } from 'react-router'
import LoginPage from './Components/LoginPage'
import HomePage from './Components/HomePage'
import ChatAi from './Components/ChatAi'
import { ThemeProvider } from './Context/ThemeProvider'
import { ContextProvider } from './Context/Context'
import About from './Components/About'
import Signup from './Components/Signup'

const App = () => {
  return (
  <ContextProvider>
    <ThemeProvider>
    <Routes>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/' element={<HomePage />} />
      <Route path='/chat' element={<ChatAi/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </ThemeProvider>
    </ContextProvider>
  )
}

export default App
