import React from "react";
import { Center, Flex, Text, Select, CheckIcon, Box, Input } from "native-base";

export default function HeaderContent() {
  return (
    <>
      <Box position="absolute" w="100%">
        <img src={require("../../Image/imageback.png")} alt="" />
            
      </Box>
      <Flex  position='fixed' mr='32.39 px' bottom={10} right={0}  zIndex={10} alignItems='flex-end'  >
              <img src={require("../../Image/LogoWhatsapp.png")} alt="" width="40px" height="40px" />
              
            </Flex>
      <Center mx="250 px" mt="183 px" mb="133.14 px">
        <Text fontWeight="900" fontSize="50" lineHeight="61 px" color="white">
          Recherchez vos prochaines vacances
        </Text>
        <Text
          fontWeight="500"
          fontSize="28"
          mt="36"
          lineHeight="34 px"
          color="white"
        >
          Consultez notre meilleure promotion
        </Text>
        <Flex
          direction="row"
          mt="109 px"
          alignItems="center"
          justifyContent="center"
          gap="50px"
          mb='100px'
        >
          <img src={require("../../Image/ImageSeDetendre.png")} alt="" />
          <img src={require("../../Image/ImageCulturel.png")} alt="" />
          <img src={require("../../Image/Histoire.png")} alt="" />
        </Flex>
      </Center>
      
    </>
  );
}
