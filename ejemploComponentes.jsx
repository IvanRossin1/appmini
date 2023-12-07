import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import { WavyContainer, WavyLink } from "react-wavy-transitions";
import { Galeria } from "./assets/componentes/Galeria";
import Expo from "./assets/componentes/Expo";
import { Footer } from "./assets/componentes/footer/footer";
import '../src/assets/componentes/header/header.css'
import logoExpo from '../src/assets/imgs/logoexpoblanco.svg'
import logotexto from '../src/assets/imgs/logoexpotextoblanco.svg'
import { Link } from 'react-router-dom'
import { Arte } from "./assets/componentes/modalidades/Arte";
import { Sociales } from "./assets/componentes/modalidades/Sociales";
import { Gestion } from "./assets/componentes/modalidades/Gestion";


function App() {
  return (
    <BrowserRouter>
      <WavyContainer />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <header>
                <div>
                  <WavyLink to="/diplomas23" color="#3586ff">
                    <img className="hover animado" src={logoExpo} alt="" height={45} to="/diplomas23" />
                  </WavyLink>
                  <div className="hover ocultomobile titilium white">DiplomApp</div>
                </div>
                <nav className='unica link'>
                  <WavyLink to="/diplomas23" color="#3586ff">
                    <div className="link">Informática 1</div>
                  </WavyLink>
                  <WavyLink to="/info2" color="#3586ff">
                    <div className="link">Informática 2</div>
                  </WavyLink>
                  <WavyLink direction="up" to="/alim" color="#3586ff">
                    <div className="link">Alimentos</div>
                  </WavyLink>
                  <WavyLink direction="up" to="/arte" color="#3586ff">
                    <div className="link">Arte</div>
                  </WavyLink>
                  <WavyLink direction="up" to="/gestion" color="#3586ff">
                    <div className="link">Economía</div>
                  </WavyLink>
                  <WavyLink direction="up" to="/sociales" color="#3586ff">
                    <div className="link">Sociales</div>
                  </WavyLink>
                  {/* <WavyLink duration={1000} to="/contact" color="#2f44fd">
                    Contact
                  </WavyLink> */}
                </nav>
                <div className="fecha unica white ocultomobile">
                  Media 15-12 | Técnica 16-12
                </div>
              </header>
              <Outlet />
              <Footer />
            </>
          }
        >
          <Route index path="/diplomas23" element={<Expo />} />
          
          <Route path="/arte" element={<Arte />} />
          <Route path="/sociales" element={<Sociales />} />
          <Route path="/gestion" element={<Gestion />} />
          <Route path="*" element={<div className="container unica"><br /><h2><center>404 - LA RUTA DESEADA NO ESTÁ DISPONIBLE <br /> <WavyLink to="/" color="#3586ff">
            <div className="link">Volver</div>
          </WavyLink></center></h2></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;