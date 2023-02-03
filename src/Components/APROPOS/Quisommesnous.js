import React from "react";
import { Box, Heading, Center, Flex, Text, Button } from "native-base";
import { Link } from "react-router-dom";
import { styles } from "../../styles";

export default function Quisommesnous() {
  return (
    <Flex mx="10%"  direction="row" flexWrap='wrap' justifyContent='space-between' alignItems='center' gap='20px'>
      <Box maxWidth={{base:"100%",md:'80%',lg:'60%'}}>
        <Heading
          fontWeight="800"
          fontSize={{base:"30",md:'50',lg:'50'}}
          lineHeight="61 px"
          color="#1B4C74"
        >
          Qui sommes-nous
        </Heading>
        <Heading
          fontWeight="400"
          fontSize="20"
          lineHeight="38 px"
          color="#000000"
          mb="40px"
        >
          Nous tirons le meilleur parti de tous nos clients.
        </Heading>
        <Text
          fontWeight="400"
          fontSize="14"
          lineHeight="32px"
          fontStyle="normal"
          color="rgba(0, 0, 0, 0.5)"
          textAlign="justify"
          letterSpacing="-0.01em"
        >
          ivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat
          dignissim. Sed quis rutrum tellus, sit amet viverra felis. Cras
          sagittis sem sit amet urna feugiat rutrum. Nam nulla ipsum, venenatis
          malesuada felis quis, ultricies convallis neque.
        </Text>
        <Text
          fontWeight="400"
          fontSize="14"
          lineHeight="32px"
          fontStyle="normal"
          color="rgba(0, 0, 0, 0.5)"
          textAlign="justify"
          letterSpacing="-0.01em"
          mb="20 px"
        >
          ivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat
          dignissim. Sed quis rutrum tellus, sit amet viverra felis. Cras
          sagittis sem sit amet urna feugiat rutrum. Nam nulla ipsum, venenatis
          malesuada felis quis, ultricies convallis neque.
        </Text>
        <Button
          w="238px"
          variant="outline"
          bg="#1B4C74"
          borderRadius="4 px"
        > 
        <Link to="/Apropos/ContacterNous" style={styles.textDeco}>
          <Flex direction="row" gap="10 px">
            <img src={require("../../Image/IconPhone.png")} alt="" />
            <Text
              color="white"
              fontWeight="600"
              fontSize="14"
              lineHeight="17px"
              fontStyle="normal"
            >
              Contactez-nous
            </Text>
          </Flex>
          </Link>
        </Button>
      </Box>
      <Box display={{base:'none',md:'none',lg:'flex'}}>
        <img src={require("../../Image/quisommenous.png")} alt="" width="190px" />
      </Box>
    </Flex>
  );
}
