import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cadastro from './pages/Cadastro'
import Login from './pages/Login'
import Forgot from './pages/Forgot'
import Dashboard from './pages/Dashboard'
import Veiculos from './pages/Veiculos'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/cadastro' element={<Cadastro/>} />
      <Route path='/forgot' element={<Forgot/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/:veiculo/:id' element={<Veiculos/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
