import React from "react";
import { useState } from "react";
import { Box, Slider, Flex, Text, Input,Center } from "native-base";

export default function PaquetsHeaderContent() {
  const [onChangeValue, setOnChangeValue] = React.useState(500);
  return (
    <>
      <Flex  position='fixed' mr='32.39 px' bottom={10} right={0}  zIndex={10} alignItems='flex-end'  >
              <img src={require("../../Image/LogoWhatsapp.png")} alt="" width="40px" height="40px" />
              
            </Flex>
      <Box  p={{base:"4%" ,lg:'10%'}} pt={{base:"25%" ,lg:'20%'}}
        style={{  
          backgroundImage: "url(" + require("../../Image/imageback.png") + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width:'100%',
          height:'auto'
        }} >
        <Text fontWeight="700" fontSize="20" lineHeight="24 px" color="white">
          Nos circuits
        </Text>
        <Text
          fontWeight="700"
          fontSize={{base:"20",md:'30',lg:"30"}}
          my="2"
          lineHeight="37 px"
          color="white"
        >
          Recherchez vos destination
        </Text>
        <Flex
          direction={{base:"column",md:'row',lg:"row"}}
          p={{base:"4%",md:'5%',lg:"4%"}}
          bg="white"
          rounded="md"
          flexWrap='wrap'
          justifyContent='space-between'
          gap={{base:'50px',md:'50px' }}
          alignContent='center'
        >
          <Flex direction="column" gap="50px">
            <Text fontWeight="700" fontSize="18" lineHeight="22 px">
              Sélectionnez votre destination :
            </Text>
            <Input
              w="xs"
              h="46 px"
              bg="#F7EEEE"
              rounded="full"
              placeholder="Toutes les destinations"
              placeholderTextColor="rgba(27, 76, 116, 0.5)"
              placeholderFontWeight="400"
              placeholderFontSize="16 px"
            />
          </Flex>
          <Flex direction="column" gap="50px">
            <Text fontWeight="700" fontSize="18" lineHeight="22 px">
              Sélectionnez votre date :
            </Text>
            <Input
              w="xs"
              h="46 px"
              bg="#F7EEEE"
              rounded="full"
              placeholder="jj/mm/aa"
              placeholderTextColor="rgba(27, 76, 116, 0.5)"
              placeholderFontWeight="400"
              placeholderFontSize="16 px"
            />
          </Flex>
          <Flex direction="column" gap="50px">
            <Text fontWeight="700" fontSize="18" lineHeight="22 px">
              Prix :
              <Text color="#D3D3D3" ml="41px">
                {onChangeValue} $
              </Text>
            </Text>
            <Box w="100%">
              <Slider
                w="xs"
                maxW="300"
                defaultValue={500}
                minValue={0}
                maxValue={1500}
                colorScheme="darkBlue"
                accessibilityLabel="hello world"
                step={10}
                onChange={(v) => {
                  setOnChangeValue(Math.floor(v));
                }}
              >
                <Slider.Track>
                  <Slider.FilledTrack />
                </Slider.Track>
                <Slider.Thumb />
              </Slider>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
