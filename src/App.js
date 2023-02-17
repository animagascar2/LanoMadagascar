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
import PageAdmin from './Components/ADMIN/PageAdmin';
import 'aos/dist/aos.css';
import axios from 'axios';

function App() {
  AOS.init({
    duration: 1200,
  })
  
  return (
    <NativeBaseProvider>
      
      <Routes>
        <Route path="/" element={<Accueil active="Accueil"/>} />
        <Route path="/Connexion" element={<Connexion/>} />
        <Route path="/Inscription" element={<Inscription/>} />
        <Route path="paquets" element={<Paquets active='Paquets' />} />
        <Route path="shop" element={<Shop active='Shop' />} />
        <Route path="/Shopproduct" element={<Shopproduct active='Shop'/>} />
        <Route path="/Shop/DetailsProduct" element={<DetailsProduct active='Shop'/>} />
        <Route path="/Apropos" element={<Apropos active='Apropos'/>} />
        <Route path="/Apropos/ContacterNous" element={<ContacterNous active='Apropos'/>} />
        <Route path="/DetailsDestination" element={<Detailsdestination/>} />
        <Route path="Admin" element={<PageAdmin />} />
      </Routes>
      </NativeBaseProvider>

  );
}

export default App;

