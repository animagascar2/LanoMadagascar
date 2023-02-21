import React from 'react'
import { Box} from 'native-base'
import HeadERLano from '../NAVBAR/HeadERLano';
import FooterLano from '../FooterLano';
import FooterLanoContent from './FooterLanoContent';
import PaquetsHeaderContent from './PaquetsHeaderContent';


export default function Paquets(props) {
  return (
    <Box>
        <HeadERLano active = {props.active} />
        <PaquetsHeaderContent/>
        <FooterLanoContent />
        <FooterLano />
    </Box>
  )
}
