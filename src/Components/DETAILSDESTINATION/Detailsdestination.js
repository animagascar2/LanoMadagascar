import React, {useEffect} from 'react'
import { Box, Heading} from "native-base";
import ContentDetails from './ContentDetails';
import FormPayement from './FormPayement';
import FooterLano from '../FooterLano';
import HeadERLano from '../NAVBAR/HeadERLano'

export default function Detailsdestination() {
  
  return (
    <Box>
        <HeadERLano/>
        <ContentDetails/>
        <FormPayement/>
        <FooterLano/>
    </Box>
  )
}
