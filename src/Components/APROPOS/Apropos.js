import React from 'react'
import { Box } from "native-base";
import HeadERLano from '../NAVBAR/HeadERLano';
import Quisommesnous from './Quisommesnous';

export default function Apropos(props) {
  return (
    <Box>
        <HeadERLano active = {props.active} />
        <Quisommesnous/>
    </Box>
  )
}
