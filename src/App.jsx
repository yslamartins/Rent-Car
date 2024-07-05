import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cadastro from './pages/Cadastro'
import Login from './pages/Login'
import Forgot from './pages/Forgot'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/cadastro' element={<Cadastro/>} />
      <Route path='/forgot' element={<Forgot/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
