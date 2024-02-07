import './assets/styles/App.css'
import Home from './pages/home/Home'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <Routes >
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default App
