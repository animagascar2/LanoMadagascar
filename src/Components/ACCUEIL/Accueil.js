import React from 'react'
import HeaderContent from "./HeaderContent"
import ListeDestinations from './ListeDestinations'
import { Box} from "native-base";
import HeadERLano from '../HeadERLano';
import FooterLano from '../FooterLano';
import FooterLanoContent from './FooterLanoContent';
import { Link } from "react-router-dom";


export default function Accueil(props) {
  return (
    <Box>
        <HeadERLano active = {props.active} backG ={props.bG}/>
        <HeaderContent/>
        <ListeDestinations/>
        <FooterLanoContent />
        <FooterLano />
    </Box>
      
  )
}
