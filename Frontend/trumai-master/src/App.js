import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contato from "./Componentes/Contato"
import Home from "./Componentes/Home"
import Destinos from "./Componentes/Destinos"
import Promocoes from "./Componentes/Promocoes"
import Header from "./Componentes/Header"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header/>}>

        <Route path="contato" element={<Contato />} />
        <Route path="/" element={<Home />} />
        <Route path="destinos" element={<Destinos />} />
        <Route path="promocoes" element={<Promocoes />} />

        </Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
