import React from 'react'
import { Box} from 'native-base'
import HeadERLano from '../HeadERLano';
import FooterLano from '../FooterLano';
import FooterShopContent from './FooterShopContent';
import ShopHeaderContent from './ShopHeaderContent';
import ListeProductShop from './ListeProductShop';

export default function Shop(props) {
  return (
    <Box>
        <HeadERLano active = {props.active} bg={props.bg} />
        <ShopHeaderContent/>
        <ListeProductShop/>
        <FooterShopContent/>
        <FooterLano />
    </Box>
  )
}
