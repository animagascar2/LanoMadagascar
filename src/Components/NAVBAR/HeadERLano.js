import React from "react";
import { styles } from "../../styles";
import { Box, Flex, Text, Button, Center } from "native-base";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from "react";
import { motion } from "framer-motion";

export default function HeadERLano(props) {
  return (
    <Navbar
      style={styles.navbarStyle}
      width={window.innerWidth}
      collapseOnSelect
      expand="lg"
      className="bg-dark bg-opacity-75 fixed-top px-4"
      
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={require("../../Image/logo.png")} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className=" me-lg-auto d-flex align-items-center justify-content-lg-between">
            <Box mx='30px'>
              {props.active === "Accueil" ? (
                <Nav.Link href="/">
                  <Flex alignItems="center">
                    <Text
                      color="white"
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
                  </Flex>
                </Nav.Link>
              ) : (
                <Nav.Link href="/" style={styles.textDeco}>
                  Accueil
                </Nav.Link>
              )}
            </Box>

            <Box>
              {props.active === "Paquets" ? (
                <Nav.Link >
                  <Flex alignItems="center">
                    <Text
                      color="white"
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
                  </Flex>
                </Nav.Link>
              ) : (
                <Nav.Link href="Paquets" style={styles.textDeco}>
                  Paquets
                </Nav.Link>
              )}
            </Box>
            <Box mx='30px'>
              {props.active === "Shop" ? (
                <Nav.Link>
                  <Flex alignItems="center">
                    <Text
                      color="white"
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
                  </Flex>
                </Nav.Link>
              ) : (
                <Nav.Link href="Shop" style={styles.textDeco}>
                  Shop
                </Nav.Link>
              )}
            </Box>
            <Box>
              {props.active === "Apropos" ? (
                <Nav.Link >
                  <Flex alignItems="center">
                    <Text
                      color="white"
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
                  </Flex>
                </Nav.Link>
              ) : (
                <Nav.Link href="Apropos" style={styles.textDeco}>
                  A propos
                </Nav.Link>
              )}
            </Box>
          </Nav>
          <Nav className="d-flex align-items-center ">
            <Box>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  size="152px"
                  h="42px"
                  bg="white"
                  borderRadius="4 px"
                  pt="16 px"
                  pb="16 px"
                  px="32 px"
                >
                  <Nav.Link href="Inscription" style={styles.textDeco}>
                    <Text color="black" style={styles.btnReservezText}>
                      Créer un compte
                    </Text>
                  </Nav.Link>
                </Button>
              </motion.div>
            </Box>
            <Box mx={{ lg: "20px" }} my={{ base: "10px" }}>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <Button
                  w="152px"
                  h="42px"
                  style={styles.btnReservez}
                  borderRadius="4 px"
                  pt="16 px"
                  pb="16 px"
                  px="32 px"
                  _hover={{
                    bg: "white",
                  }}
                >
                  <Nav.Link href="Connexion" style={styles.textDeco}>
                    <Text color="white" style={styles.btnReservezText}>
                      Connexion
                    </Text>
                  </Nav.Link>
                </Button>
              </motion.div>
            </Box>
            <Nav.Link>
              <Flex ml="20 px" direction="row" gap="10 px" alignItems="center">
                <Box>
                  <motion.div
                    whileHover={{ scale: 1.4 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <img src={require("../../Image/Flagchina.png")} alt="" />
                  </motion.div>
                </Box>
                <Box>
                <motion.div
                    whileHover={{ scale: 1.4 }}
                    whileTap={{ scale: 0.9 }}
                  >
                  <img src={require("../../Image/FlagAmerica.png")} alt="" />
                  </motion.div>
                </Box>
                <Box>
                <motion.div
                    whileHover={{ scale: 1.4 }}
                    whileTap={{ scale: 0.9 }}
                  >
                  <img src={require("../../Image/FlagFrench.png")} alt="" />
                  </motion.div>
                </Box>
              </Flex>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



