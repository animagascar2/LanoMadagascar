import React from "react";
import { useState } from "react";
import { Box, Slider, Flex, Text, Input } from "native-base";

export default function PaquetsHeaderContent() {
  const [onChangeValue, setOnChangeValue] = React.useState(500);
  return (
    <>
      <Box position="absolute" w="100%" zIndex={0}>
        <img src={require("../../Image/imageback.png")} alt="" />
        <Flex mt="-68 px" mr="32.39 px" alignItems="flex-end">
          <img
            src={require("../../Image/LogoWhatsapp.png")}
            alt=""
            width="24px"
            height="24px"
          />
        </Flex>
      </Box>
      <Box mx="80 px" my="256 px" mt="166 px">
        <Text fontWeight="700" fontSize="20" lineHeight="24 px" color="white">
          Nos circuits
        </Text>
        <Text
          fontWeight="700"
          fontSize="30"
          mt="10 px"
          lineHeight="37 px"
          color="white"
        >
          Recherchez vos destination
        </Text>
        <Flex
          direction="row"
          py="71"
          px="111"
          bg="white"
          rounded="md"
          mt="36"
          gap="130 px"
        >
          <Box gap="56 px">
            <Text fontWeight="700" fontSize="18" lineHeight="22 px">
              Sélectionnez votre destination :
            </Text>
            <Input
              w="299 px"
              h="46 px"
              bg="#F7EEEE"
              rounded="full"
              placeholder="Toutes les destinations"
              placeholderTextColor="rgba(27, 76, 116, 0.5)"
              placeholderFontWeight="400"
              placeholderFontSize="16 px"
            />
          </Box>
          <Box gap="56 px">
            <Text fontWeight="700" fontSize="18" lineHeight="22 px">
              Sélectionnez votre date :
            </Text>
            <Input
              w="299 px"
              h="46 px"
              bg="#F7EEEE"
              rounded="full"
              placeholder="jj/mm/aa"
              placeholderTextColor="rgba(27, 76, 116, 0.5)"
              placeholderFontWeight="400"
              placeholderFontSize="16 px"
            />
          </Box>
          <Box gap="68 px">
            <Text fontWeight="700" fontSize="18" lineHeight="22 px">
              Prix :
              <Text color="#D3D3D3" ml="41px">
                {onChangeValue} $
              </Text>
            </Text>
            <Box w="272 px">
              <Slider
                w="3/4"
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
          </Box>
        </Flex>
      </Box>
    </>
  );
}
