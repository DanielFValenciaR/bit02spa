import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navegacion } from './components/Navegacion';
import { PaginaInicio } from './components/PaginaInicio';
import { PaginaSobreNosotros } from './components/PaginaSobreNosotros';
import { PaginaProductos } from './components/PaginaProductos';
import { PaginaNoEncontrada } from './components/PaginaNoEncontrada';

function App() {
  return (
    <BrowserRouter>
      <Navegacion />
      <Routes>
        <Route path="/" element={<PaginaInicio/>} />
        <Route path="/sobre-nosotros" element={<PaginaSobreNosotros/>} />
        <Route path="/productos" element={<PaginaProductos/>} />
        <Route path="*" element={<PaginaNoEncontrada/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
