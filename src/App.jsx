import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './views/Home'
import Archive from './views/Archive'
import Trash from './views/Trash'
import NotesWrapper from './views/layouts/NotesWrapper'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Routes>
        <Route path="/" element={<NotesWrapper><Home/></NotesWrapper>}></Route>
        <Route path="/archive" element={<NotesWrapper><Archive/></NotesWrapper>}></Route>
        <Route path="/trash" element={<NotesWrapper><Trash/></NotesWrapper>}></Route>
      </Routes>
    </>
  )
}

export default App;
