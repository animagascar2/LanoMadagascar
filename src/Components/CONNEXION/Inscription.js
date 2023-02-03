import React from "react";
import {
  Button,
  Flex,
  Text,
  Box,
  Input,
  Heading,
  Divider,
  Center,
} from "native-base";
import { Link } from "react-router-dom";
import { styles } from "../../styles";

export default function Inscription() {
  return (
    <Center>
      <Flex direction="row" justifyContent="space-around">
        <Box p="4" display={{ base: "none", md: "none", lg: "flex" }}>
          <img
            src={require("../../Image/ConnexionSlideP1.png")}
            alt=""
            width="90%"
          />
        </Box>
        <Flex
          alignItems={{ base: "center", md: "center", lg: "flex-end" }}
          py="10"
        >
          <Box>
            <Link to="/" style={styles.textDeco}>
              <img src={require("../../Image/LogoBlue.png")} alt="" />
            </Link>
          </Box>
          <Heading
            color="#1B4C74"
            fontWeight="800"
            fontSize="30"
            lineHeight="140%"
            my="5%"
          >
            Inscription
          </Heading>
          <Flex gap="30px" w="326px" my="4">
            <Input h="48px" placeholder="Nom" />
            <Input h="48px" placeholder="Prénom" />
            <Input h="48px" placeholder="Mail" />
            <Input
              h="48px"
              placholderFontWeight="400"
              placeholderTextColor="#8A8A8A"
              fontSize="14"
              placeholder="Mot de passe"
              InputRightElement={
                <Box mr="2">
                  <img src={require("../../Image/EyeShowIcon.png")} alt="" />
                </Box>
              }
            />
            <Input
              h="48px"
              placholderFontWeight="400"
              placeholderTextColor="#8A8A8A"
              fontSize="14"
              placeholder="Confirmer votre mot de passe"
              InputRightElement={
                <Box mr="2">
                  <img src={require("../../Image/EyeShowIcon.png")} alt="" />
                </Box>
              }
            />
            <Button
              rounded="8px"
              w="100%"
              bg="#1B4C74"
              pt="16 px"
              pb="16 px"
              px="32 px"
              mt="30px"
            >
              <Text
                color="white"
                fontWeight="700"
                fontSize="16"
                lineHeight="140%"
              >
                Se connecter
              </Text>
            </Button>
          </Flex>

          <Text
            color="#8A8A8A"
            my={{ base: "5%", md: "40%", lg: "40%" }}
            fontWeight="400"
            fontSize="16"
            fontFamily="lato"
            lineHeight="140%"
          >
            © 2023 Lano Madagascar. Tous droits réservés
          </Text>
        </Flex>
      </Flex>
    </Center>
  );
}
