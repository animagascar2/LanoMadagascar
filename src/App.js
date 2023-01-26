import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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


function App() {
  return (
    <NativeBaseProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil active="Accueil" bG='rgba(23, 23, 23, 0.59)' />} />
        <Route path="/" element={<Connexion/>} />
        <Route path="paquets" element={<Paquets active='Paquets' bG='rgba(23, 23, 23, 0.59)'/>} />
        <Route path="shop" element={<Shop active='Shop' />} />
        <Route path="/Shop/Shopproduct" element={<Shopproduct active='Shop'/>} />
        <Route path="/Shop/DetailsProduct" element={<DetailsProduct active='Shop'/>} />
        <Route path="/Apropos" element={<Apropos active='Apropos'/>} />
        <Route path="/Apropos/ContacterNous" element={<ContacterNous active='Apropos'/>} />
        <Route path="/DetailsDestination" element={<Detailsdestination active='DetailsDestination'/>} />
      </Routes>
    </BrowserRouter>
      
      </NativeBaseProvider>
  );
}

export default App;
