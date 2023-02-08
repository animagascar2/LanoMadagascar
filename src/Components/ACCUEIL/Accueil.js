import React from 'react'
import HeaderContent from "./HeaderContent"
import ListeDestinations from './ListeDestinations'
import { Box} from "native-base";
import HeadERLano from '../NAVBAR/HeadERLano';
import FooterLano from '../FooterLano';
import FooterLanoContent from './FooterLanoContent';


export default function Accueil(props) {
  
  return (
    <Box>
      
        <HeadERLano/>
        <HeaderContent />
        <ListeDestinations/>
        
        <FooterLanoContent />
        <FooterLano />
    </Box>
      
  )
}
