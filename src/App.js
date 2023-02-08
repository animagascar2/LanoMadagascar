import './App.css';
import { Routes, Route } from 'react-router-dom';
import Accueil from './Components/ACCUEIL/Accueil';
import Paquets from './Components/PAQUETS/Paquets';
import Shop from './Components/SHOP/Shop';
import Shopproduct from './Components/SHOPPRODUCT/Shopproduct'
import Apropos from './Components/APROPOS/Apropos';
import DetailsProduct from './Components/SHOPPRODUCT/DetailsProduct';
import ContacterNous from './Components/APROPOS/ContacterNous';
import Detailsdestination from './Components/DETAILSDESTINATION/Detailsdestination';
import {
  NativeBaseProvider,
} from "native-base";
import Connexion from './Components/CONNEXION/Connexion';
import AOS from 'aos';
import Inscription from './Components/CONNEXION/Inscription';
import 'aos/dist/aos.css';

function App() {
  AOS.init({
    duration: 1200,
  })
  return (
    <NativeBaseProvider>
      
      <Routes>
        <Route path="/" element={<Accueil active="Accueil" bG='rgba(23, 23, 23, 0.59)' />} />
        <Route path="/Connexion" element={<Connexion/>} />
        <Route path="/Inscription" element={<Inscription/>} />
        <Route path="paquets" element={<Paquets active='Paquets' bG='rgba(23, 23, 23, 0.59)'/>} />
        <Route path="shop" element={<Shop active='Shop' />} />
        <Route path="/Shopproduct" element={<Shopproduct active='Shop'/>} />
        <Route path="/Shop/DetailsProduct" element={<DetailsProduct active='Shop'/>} />
        <Route path="/Apropos" element={<Apropos active='Apropos'/>} />
        <Route path="/Apropos/ContacterNous" element={<ContacterNous active='Apropos'/>} />
        <Route path="/DetailsDestination" element={<Detailsdestination active='DetailsDestination'/>} />
      </Routes>
      </NativeBaseProvider>
//     <>
//     <div style={{width:" 200px",
//   height: "200px",
//   margin: "50px auto",
//   paddingTop: "75px",
//   background: '#ccc',
//   textAlign: 'center',
//   color: '#FFF',
//   fontSize: '3em'
// }} class="item"  data-aos="fade-up">1</div>
// <div class="item" data-aos="fade-down">2</div>
// <div class="item" data-aos="fade-right">3</div>
// <div class="item" data-aos="fade-left">4</div>

// <div class="item" data-aos="zoom-in">5</div>
// <div class="item" data-aos="zoom-out">6</div>

// <div class="item" data-aos="slide-up">7</div>

// <div class="item" data-aos="flip-up">8</div>
// <div class="item" data-aos="flip-down">9</div>
// <div class="item" data-aos="flip-right">10</div>
// <div class="item" data-aos="flip-left">11</div>
//     </>

  );
}

export default App;
