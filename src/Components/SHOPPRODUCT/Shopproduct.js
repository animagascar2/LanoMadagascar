import React from 'react'
import { Box } from 'native-base';
import HeadERLano from '../HeadERLano';
import FooterLano from '../FooterLano';
import HeaderContentShopProd from './HeaderContentShopProd';
import ListeShopProduct from './ListeShopProduct';

export default function Shopproduct(props) {
  return (
    <Box>
        <HeadERLano active = {props.active}/>
        <HeaderContentShopProd/>
        <ListeShopProduct/>
        <FooterLano />
    </Box>
  )
}
