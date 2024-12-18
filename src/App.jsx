import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cadastro from './pages/Cadastro'
import Login from './pages/Login'
import Forgot from './pages/Forgot'
import Dashboard from './pages/Dashboard'
import Carrinho from './pages/Carrinho'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/cadastro' element={<Cadastro/>} />
      <Route path='/forgot' element={<Forgot/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/carros/:id' element={<Carrinho/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
