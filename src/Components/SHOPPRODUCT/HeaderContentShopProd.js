import React from 'react'
import { Box, Flex, Text,
 } from 'native-base'
 import { styles } from '../../styles'

export default function HeaderContentShopProd() {
  return (
    <Box>
      <Flex direction='row' mx="92 px" alignItems="center">
        <Box  w="544px">
          <Text
            color="#1B4C74"
            fontWeight="800"
            fontSize="60"
            lineHeight="73px"
            fontStyle="normal"
          >
            Huile essentiel
          </Text>
          <Text
            color="#000000"
            mt="7"
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
          <Box>
             <img src={require("../../Image/ImageBackShopProd.png")} alt="" />
          </Box>
          
      </Flex>
      <Flex  mr='32.39 px' alignItems='flex-end' >
              <img src={require("../../Image/LogoWhatsapp.png")} alt="" width="24px" height="24px" />
              
            </Flex>
      
    </Box>
  )
}
