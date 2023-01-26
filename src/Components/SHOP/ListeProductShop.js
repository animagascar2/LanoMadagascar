import React from "react";
import { Box, Flex, Text, Button, Heading, Center,Input } from "native-base";
import { styles } from "../../styles";
import {  Link } from "react-router-dom";

export default function ListeProductShop() {
  return (
    <Box mx="116px">
      <Flex direction="row" alignItems='center' mt='44px' mb="75px" gap='14px'>
          <Text 
            color="black"
            fontWeight="700"
            fontSize="18"
            lineHeight="22px"
            fontStyle="normal">
            Conversion
          </Text>
          <Input
            w="114px" h="29px" shadow={3}
            placeholderTextColor="#1B4C74"
            fontSize="14 px"
            fontWeight='700'
            lineHeight='17px'
            InputRightElement={
              <Box mr='2'>
                <img src={require("../../Image/SelectIconBlack.png")} alt="" />
              </Box>
              
            }
            placeholder="USD $"
          />
        </Flex>
      <Flex
        direction="row" 
        gap="100 px"
        mb="71.87px"
        borderRadius='lg'
        pl="88.03 px"
        p="1"
        style={styles.ShadowStyle}
      >
        <Box mt="-34 px">
          <img src={require("../../Image/AfficheTitreHuile.png")} alt="" />
          <Box mt="-170 px" ml="50px">
            <Text
              color="white"
              fontWeight="600"
              fontSize="18"
              lineHeight="22px"
              fontStyle="normal"
            >
              Nos gammes
            </Text>
            <Text
              color="white"
              fontWeight="300"
              fontSize="18"
              lineHeight="22px"
              fontStyle="normal"
            >
              Lorem ipsum
            </Text>
          </Box>
        </Box>
        <Flex direction="row" alignItems="center">
          <img src={require("../../Image/HuiileAlmond.png")} alt="" />
          <Box>
            <Text
              color="black"
              fontWeight="600"
              fontSize="18"
              lineHeight="38px"
              fontStyle="normal"
            >
              Almond oil
            </Text>
            <Text
              color="black"
              fontWeight="300"
              fontSize="14"
              lineHeight="38px"
              fontStyle="normal"
            >
              500 ml
            </Text>
            <Text
              color="black"
              fontWeight="400"
              fontSize="14"
              lineHeight="38px"
              fontStyle="normal"
            >
              $ 25
            </Text>
          </Box>
        </Flex>
        <Flex direction="row" alignItems="center">
          <img src={require("../../Image/HuiileAlmond.png")} alt="" />
          <Box>
            <Text
              color="black"
              fontWeight="600"
              fontSize="18"
              lineHeight="38px"
              fontStyle="normal"
            >
              Almond oil
            </Text>
            <Text
              color="black"
              fontWeight="300"
              fontSize="14"
              lineHeight="38px"
              fontStyle="normal"
            >
              500 ml
            </Text>
            <Text
              color="black"
              fontWeight="400"
              fontSize="14"
              lineHeight="38px"
              fontStyle="normal"
            >
              $ 25
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Flex direction="row" alignItems="center" mx='105'>
          <Box>
             <img src={require("../../Image/ImgHuileEssentiel.png")} alt="" />
          </Box>
          <Box pd='40' w='672px'>
            <Text
              color="#0C2015"
              fontWeight="600"
              fontSize="40"
              lineHeight="57px"
              fontStyle="normal"
              textAlign='justify'
            >
              HUILES ESSENTIELLES BIO <br></br>
               CHÉMOTYPÉES ET INTÉGRALES
            </Text>
            <Text
              color="#0C2015"
              fontWeight="400"
              fontSize="14px"
              lineHeight="25px"
              fontStyle="normal"
              textAlign='justify'
              mt="38px"
              mb='30 px'
            >
              Chaque huile essentielle a une composition unique de produits chimiques, et cette variation affecte l’odeur, l’absorption et les effets sur le corps. La composition chimique d’une huile essentielle peut varier au sein d’une même espèce végétale ou d’une plante à l’autre.
            </Text>
            <Button
                    w="112px" 
                    h='49px'
                    mt = '12 px'
                    style={styles.btnReservez}
                    borderRadius="4 px"
                    py="16 px"
                    px="32 px"
                >
                  <Link to="/Shop/Shopproduct" style={styles.textDeco}>
                    <Text color="white" style={styles.btnReservezText}>
                      Voir plus +
                    </Text>
                    </Link>
                </Button>
          </Box>
      </Flex>
      <Center mx='316 px'>
        <Heading
          color=" rgba(0, 0, 0, 0.5)"
          fontWeight="600"
          fontSize="28"
          lineHeight="34px"
          fontStyle="normal"
        >
          Nos produits
        </Heading>
        <Flex direction="row" alignItems='center' flexWrap='wrap'  >
          <Box w='544px' pr='59 px'>
          <Text
              color="#0C2015"
              fontWeight="400"
              fontSize="14px"
              lineHeight="29px"
              fontStyle="normal"
              textAlign='justify'
              mt="38px"
              mb='30 px'
            >
              Lorem ipsum dolor sit amet milogi utan tiryktigt till egt. Öråd lasm om didis, antropostik pådäs. Lorem ipsum dolor sit amet milogi utan tiryktigt till egt. Öråd lasm om didis, antropostik pådäs
            </Text>
          </Box>
          <Box>
             <img src={require("../../Image/ProdHuiles.png")} alt="" />
          </Box>
          <Box>
             <img src={require("../../Image/ImgHE.png")} alt="" />
          </Box>
          <Box w='544px' pl='59 px'>
          <Text
              color="#0C2015"
              fontWeight="400"
              fontSize="14px"
              lineHeight="29px"
              fontStyle="normal"
              textAlign='justify'
              mt="38px"
              mb='30 px'
            >
             Lorem ipsum dolor sit amet milogi utan tiryktigt till egt. Öråd lasm om didis, antropostik pådäs. Lorem ipsum dolor sit amet milogi utan tiryktigt till egt. Öråd lasm om didis, antropostik pådäs
            </Text>
          </Box>
          <Box w='544px' pr='59 px'>
          <Text
              color="#0C2015"
              fontWeight="400"
              fontSize="14px"
              lineHeight="29px"
              fontStyle="normal"
              textAlign='justify'
              mt="38px"
              mb='30 px'
            >
             Lorem ipsum dolor sit amet milogi utan tiryktigt till egt. Öråd lasm om didis, antropostik pådäs. Lorem ipsum dolor sit amet milogi utan tiryktigt till egt. Öråd lasm om didis, antropostik pådäs
            </Text>
          </Box>
          <Box>
             <img src={require("../../Image/ImgHE2.png")} alt="" />
          </Box>
          
          
        </Flex>
      </Center>
      
    </Box>
  );
}
