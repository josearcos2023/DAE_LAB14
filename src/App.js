import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Inicio from './pages/Inicio'
import Empleados from './pages/Empleados'
import Calculos from './pages/Calculos'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/empleados' element={<Empleados/>}/>
          <Route path='/calculo' element={<Calculos/>}/>

        </Routes>
      </BrowserRouter>
  );
}

export default App;
