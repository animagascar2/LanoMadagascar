import React from 'react'
import { Box, Flex, Text,
 } from 'native-base'
 import { styles } from '../../styles'

export default function HeaderContentShopProd() {
  return (
    <div class="item" data-aos="slide-down">
      <Flex direction={{base:'column-reverse',md:'row',lg:'row'}} justifyContent='center' px={{base:'4',md:'4',lg:'20'}}py={{base:'4',md:'4',lg:'0'}} alignItems="center">
        <Box  w= {{base:'100%',md:'50%',lg:'50%'}} >
          <Text
            color="#1B4C74"
            fontWeight="800"
            fontSize={{base:"40",md:"40",lg:"60"}}
            lineHeight="73px"
            fontStyle="normal"
          >
            Huile essentiel
          </Text>
          <Text
            color="#000000"
            fontWeight="700"
            fontSize="30"
            lineHeight="38px"
            fontStyle="normal"
          >
            Huile pure et naturel
          </Text>
          <Text
            fontWeight="400"
            fontSize="14"
            lineHeight="22px"
            fontStyle="normal"
            color="black"
            textAlign="justify"
            my="20 px"
          >
            Les huiles essentielles, obtenues par pressage mécanique ou
            distillation, sont des extraits de plantes concentrés qui conservent
            l’odeur et la saveur naturelles de leur source.
          </Text>
        </Box>
          <Box w= {{base:'50%',md:'50%',lg:'50%'}}>
             <img src={require("../../Image/ImageBackShopProd.png")} alt="" />
          </Box>
          
      </Flex>
      <Flex  position='fixed' mr='32.39 px' bottom={10} right={0}  zIndex={12} alignItems='flex-end'  >
              <img src={require("../../Image/LogoWhatsapp.png")} alt="" width="40px" height="40px" />
              
            </Flex>
    </div>
  )
}
