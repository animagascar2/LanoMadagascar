import React from 'react'
import { Box, Heading} from "native-base";
import HeaderDestination from './HeaderDestination';
import ContentDetails from './ContentDetails';
import FormPayement from './FormPayement';
import FooterLano from '../FooterLano';

export default function Detailsdestination() {
  return (
    <Box>
        <HeaderDestination/>
        <ContentDetails/>
        <FormPayement/>
        <FooterLano/>
        
    </Box>
  )
}
