import React from 'react'
import { Box, Flex, Text, Button, Center } from "native-base";
import { Link } from "react-router-dom";
import { styles } from "../../styles";

export default function navbarDesktop(props) {
  return (
    <Box
        zIndex={1}
        bg={props.backG ? props.backG : "black"}
        py="21.5 px"
        px="81.03 px"
      >
      <Flex direction="row" justifyContent='space-between' >
          <Flex direction="row">
            <Box mr="82 px">
              <img src={require("../../Image/logo.png")} alt="" />
            </Box>
            
          </Flex>
          <Flex direction="row" alignItems="center" gap="75px">
              {props.active === "Accueil" ? (
                <Center>
                  <Text
                    color="white"
                    mb="4 px"
                    mt="16 px"
                    fontStyle="normal"
                    fontSize="18 px"
                    lineHeight="22 px"
                    height="22px"
                    fontWeight="800"
                  >
                    Acceuil
                  </Text>
                  <img
                    src={require("../../Image/menuActive.png")}
                    alt=""
                    width="8px"
                    height="8px"
                  />
                </Center>
              ) : (
                <Link to="/" style={styles.textDeco}>
                  <Center>
                    <Text color="white" style={styles.navTextStyle}>
                      Acceuil
                    </Text>
                  </Center>
                </Link>
              )}
              {props.active === "Paquets" ? (
                <Center>
                  <Text
                    color="white"
                    mb="4 px"
                    mt="16 px"
                    fontStyle="normal"
                    fontSize="18 px"
                    lineHeight="22 px"
                    height="22px"
                    fontWeight="800"
                  >
                    Paquets
                  </Text>
                  <img
                    src={require("../../Image/menuActive.png")}
                    alt=""
                    width="8px"
                    height="8px"
                  />
                </Center>
              ) : (
                <Link to="/Paquets" style={styles.textDeco}>
                  <Center>
                    <Text color="white" style={styles.navTextStyle}>
                      Paquets
                    </Text>
                  </Center>
                </Link>
              )}
              {props.active === "Shop" ? (
                <Link to="/Shop" style={styles.textDeco}>
                  <Center>
                    <Text
                      color="white"
                      mb="4 px"
                      mt="16 px"
                      fontStyle="normal"
                      fontSize="18 px"
                      lineHeight="22 px"
                      height="22px"
                      fontWeight="800"
                    >
                      Shop
                    </Text>
                    <img
                      src={require("../../Image/menuActive.png")}
                      alt=""
                      width="8px"
                      height="8px"
                    />
                  </Center>
                </Link>
              ) : (
                <Link to="/Shop" style={styles.textDeco}>
                  <Center>
                    <Text color="white" style={styles.navTextStyle}>
                      Shop
                    </Text>
                  </Center>
                </Link>
              )}
              {props.active === "Apropos" ? (
                <Center>
                  <Text
                    color="white"
                    mb="4 px"
                    mt="16 px"
                    fontStyle="normal"
                    fontSize="18 px"
                    lineHeight="22 px"
                    height="22px"
                    fontWeight="800"
                  >
                    A propos
                  </Text>
                  <img
                    src={require("../../Image/menuActive.png")}
                    alt=""
                    width="8px"
                    height="8px"
                  />
                </Center>
              ) : (
                <Link to="/Apropos" style={styles.textDeco}>
                  <Center>
                    <Text color="white" style={styles.navTextStyle}>
                      A propos
                    </Text>
                  </Center>
                </Link>
              )}
            </Flex>
          <Flex  direction="row" alignItems="center" gap="12 px">
            <Button
              w="152px"
              h="42px"
              bg="white"
              borderRadius="4 px"
              pt="16 px"
              pb="16 px"
              px="32 px"
            >
              <Link to="/Inscription" style={styles.textDeco}>
                <Text color="black" style={styles.btnReservezText}>
                  Créer un compte
                </Text>
              </Link>
            </Button>
            <Button
              w="152px"
              h="42px"
              style={styles.btnReservez}
              borderRadius="4 px"
              pt="16 px"
              pb="16 px"
              px="32 px"
            >
              <Link to="/Connexion" style={styles.textDeco}>
                <Text color="white" style={styles.btnReservezText}>
                  Connexion
                </Text>
              </Link>
            </Button>
            <Flex ml="20 px" direction="row" gap="10 px" alignItems="center">
              <Box>
                <img src={require("../../Image/Flagchina.png")} alt="" />
              </Box>
              <Box>
                <img src={require("../../Image/FlagAmerica.png")} alt="" />
              </Box>
              <Box>
                <img src={require("../../Image/FlagFrench.png")} alt="" />
              </Box>
              <Box>
                <img src={require("../../Image/selectIcon.png")} alt="" />
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Box>
  )
}
