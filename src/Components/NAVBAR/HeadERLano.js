import React from "react";
import { styles } from "../../styles";
// import { Box} from "native-base";
import { Box, Flex, Text, Button, Center } from "native-base";
import { Link } from "react-router-dom";

// import { useState, useEffect } from "react";
// import NavbarDesktop from "./NavbarDesktop";
// import NavbarMobile from "./NavbarMobile";
// import NavbarTablet from "./NavbarTablet";

// export default function HeadERLano(props) {
//   const [ismobile, setMobile] = useState(false)
//   const [isTablet, setTablet] = useState(false)
//   const [isDesktop, setDesktop] = useState(false)
 
//   useEffect(() => { 
    
//     function handleResize() {
//       if (window.innerWidth > 768){
//         setDesktop(true)
//       }else{
//         setMobile(true)
//       }
//     }

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//    },[] )
//   return (
//     <Box zIndex={10}>
//         {isDesktop?<NavbarDesktop backG={props.backG} active = {props.active}/>
//         :<NavbarMobile backG={props.backG} active = {props.active}/>}
//     </Box>
    
//   );
// }

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from "react";

export default function HeadERLano(props) {
  return (
    <Navbar style={styles.navbarStyle} width={window.innerWidth}  collapseOnSelect expand="lg"  className={props.backG ? "bg-dark bg-opacity-75 fixed-top px-4": "bg-dark position-sticky"}   variant="dark">
      <Container>
        <Navbar.Brand href="/" >
        <img src={require("../../Image/logo.png")} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-lg-5 me-lg-auto d-flex align-items-center" >
            <Box >
            {props.active === "Accueil" ? (
              <Nav.Link href="/" >
                <Flex alignItems='center'>
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
                <Nav.Link href="/" style={styles.textDeco} >Accueil</Nav.Link>
              )}
            </Box>
            
            <Box>
            {props.active === "Paquets" ? (
              <Nav.Link href="Paquets">
                <Flex alignItems='center'>
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
                <Nav.Link href="Paquets" style={styles.textDeco} >Paquets</Nav.Link>
              )}
            </Box>
            <Box>
            {props.active === "Shop" ? (
              <Nav.Link href="Shop">
                <Flex alignItems='center'>
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
                <Nav.Link href="Shop" style={styles.textDeco} >Shop</Nav.Link>
              )}
            </Box>
            <Box>
            {props.active === "Apropos" ? (
              <Nav.Link href="Apropos">
                <Flex alignItems='center'>
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
                <Nav.Link href="Apropos" style={styles.textDeco} >A propos</Nav.Link>
              )}
            </Box>
            
            
           
          </Nav>
          <Nav className="d-flex align-items-center">
            <Nav.Link >
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
            </Nav.Link>
            <Nav.Link>
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
            </Nav.Link>
            <Nav.Link>
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
            </Flex>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



