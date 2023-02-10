import React, {useEffect,useState} from 'react'
import HeaderContent from "./HeaderContent"
import ListeDestinations from './ListeDestinations'
import { Box} from "native-base";
import HeadERLano from '../NAVBAR/HeadERLano';
import FooterLano from '../FooterLano';
import FooterLanoContent from './FooterLanoContent';
import axios from 'axios';


export default function Accueil(props) {
  
  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //     getUsers();
  // }, []);
  // function getUsers() {
  //     axios.get('http://localhost/LANO/').then(function(response) {
  //         console.log(response.data);
  //         setUsers(response.data);
  //     });
  // }

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
