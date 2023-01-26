import React from "react";
import { Center, Flex, Text, Select, CheckIcon, Box, Input } from "native-base";

export default function HeaderContent() {
  return (
    <>
      <Box position="absolute" w="100%">
        <img src={require("../../Image/imageback.png")} alt="" />
            <Flex mt='-68 px' mr='32.39 px' alignItems='flex-end'  >
              <img src={require("../../Image/LogoWhatsapp.png")} alt="" width="24px" height="24px" />
              
            </Flex>
      </Box>
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
        <Select
          mt="20 px"
          mx="105 px"
          borderRadius="full"
          p="23"
          bg="white"
          w="316px"
          placeholder="Choisissez votre destination"
          placeholderTextColor="#1B4C74"
          placeholderFontWeight="400"
          placeholderFontSize="16 px"
          fontColor="#1B4C74"
          fontWeight="400"
          fontSize="16px"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon h="8" />,
          }}
        >
          <Select.Item label="UX Research" value="ux" />
          <Select.Item label="Web Development" value="web" />
        </Select>
        <Flex
          direction="row"
          mt="109 px"
          alignItems="center"
          justifyContent="center"
          gap="50px"
        >
          <img src={require("../../Image/ImageSeDetendre.png")} alt="" />
          <img src={require("../../Image/ImageCulturel.png")} alt="" />
          <img src={require("../../Image/Histoire.png")} alt="" />
        </Flex>
      </Center>
      
    </>
  );
}
