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

export default function Connexion() {
  return (
    <Center>
      <Flex direction="row" justifyContent="space-around" w="100%">
      
        <Box w={{ lg: "30%" }} p={{ lg: "2%" }}>
        <div class="d-flex flex-column" data-aos="fade-right">
          <Box ml={{ base: "30%", md: "25%", lg: "0" }}>
            <Link to="/" style={styles.textDeco}>
              <img
                src={require("../../Image/LogoBlue.png")}
                alt=""
                width="133px"
                height="52px"
              />
            </Link>
          </Box>
          <Heading
            my={{ base: "10%", md: "30%", lg: "15%" }}
            color="#1B4C74"
            fontWeight="800"
            fontSize="30"
            lineHeight="140%"
            textAlign={{ base: "center", md: "center", lg: "left" }}
          >
            Connexion
          </Heading>
          <Flex gap="30px" w="100%">
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
          </Flex>
          <Button
            rounded="8px"
            w="100%"
            bg="#1B4C74"
            pt="16 px"
            pb="16 px"
            px="32 px"
            my="30px"
          >
            <Text
              color="white"
              fontWeight="700"
              fontSize="16"
              lineHeight="140%"
            >
              Connecter
            </Text>
          </Button>
          <Flex direction="row" gap="10px">
            <Link style={styles.textDeco}>
              <Text
                color="#9B0B0B"
                fontWeight="700"
                fontSize="16"
                lineHeight="140%"
              >
                Mot de passe oublié ?
              </Text>
            </Link>
            <Link to="/Inscription" style={styles.textDeco}>
              <Text
                color="#0098EA"
                fontWeight="700"
                fontSize="16"
                lineHeight="140%"
              >
                Créer un compte
              </Text>
            </Link>
          </Flex>
          <Flex
            direction="row"
            alignContent="center"
            alignItems="center"
            my="35px"
          >
            <Divider w="100px"></Divider>
            <Text
              color="#D0D0D0"
              mx="20px"
              fontWeight="400"
              fontSize="14"
              lineHeight="140%"
            >
              Continuer avec
            </Text>
            <Divider w="100px"></Divider>
          </Flex>
          <Flex gap="20px">
            <Button
              rounded="8px"
              w="100%"
              pt="16 px"
              pb="16 px"
              px="32 px"
              variant="outline"
              borderColor="#D0D0D0"
            >
              <Flex direction="row" gap="16.05px">
                <img src={require("../../Image/GoogleLogo.png")} alt="" />
                <Text
                  color="#505050"
                  fontWeight="700"
                  fontSize="14"
                  lineHeight="140%"
                >
                  Google
                </Text>
              </Flex>
            </Button>
            <Button
              rounded="8px"
              w="100%"
              variant="outline"
              pt="16 px"
              pb="16 px"
              px="32 px"
            >
              <Flex direction="row" gap="16.05px">
                <img src={require("../../Image/logoFacebookBlue.png")} alt="" />
                <Text
                  color="#505050"
                  fontWeight="700"
                  fontSize="14"
                  lineHeight="140%"
                >
                  Facebook
                </Text>
              </Flex>
            </Button>
          </Flex>
          <Text
            color="#8A8A8A"
            my={{ base: "15%", md: "40%", lg: "10%" }}
            fontWeight="400"
            fontSize="16"
            fontFamily="lato"
            lineHeight="140%"
          >
            © 2023 Lano Madagascar. Tous droits réservés
          </Text>
          </div>
        </Box>
        
        
        <Box
          p="4"
          w={{ lg: "50%" }}
          display={{ base: "none", md: "none", lg: "flex" }}
        >
          <div class="item" data-aos="fade-left">
          <img
            src={require("../../Image/ConnexionSlideP1.png")}
            alt=""
            width="90%"
          />
          </div>
        </Box>
        
      </Flex>
    </Center>
  );
}
