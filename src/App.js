import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import Tablealum from './components/container/pure/Tablealum';
import Perfil from './components/container/pure/forms/perfil';
import { ChakraProvider } from '@chakra-ui/react'
function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Tablealum />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </BrowserRouter>

    </ChakraProvider>
    
    
  );
}

export default App;
