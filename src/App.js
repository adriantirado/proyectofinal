import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Perfil from './pages/Perfil/perfil';
import { ChakraProvider } from '@chakra-ui/react'

import LoginPage from './pages/Login/LoginPage';
import Tablealum from './pages/Candidatos/Tablealum';
import Ofertas from './pages/Ofertas/ofertas';

function App() {
  return (
   
    <ChakraProvider>
      <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<LoginPage />}/>
        <Route path="/dashboard" element={<Tablealum/>} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path='/ofer' element={<Ofertas />}></Route>
      </Routes>
    </BrowserRouter>

    </ChakraProvider>
    
    
  );
}

export default App;
