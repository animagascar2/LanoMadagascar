import React from "react";
import { Box, Heading, Center, Flex, Text, Button,Input } from "native-base";
import { styles } from "../../styles";
import { Link } from "react-router-dom";

export default function ListeShopProduct() {
  return (
    <Box p="20">
      <Flex direction="row" alignItems='center' gap='14px'>
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
    <Center  >
      <Heading
        color="black"
        fontWeight="700"
        fontSize="30"
        lineHeight="37px"
        fontStyle="normal"
      >
        Nos produits
      </Heading>

      <Flex direction="row" justifyContent='space-around' w='100%' flexWrap="wrap" gap={{base:"10 px",md:"10 px",lg:"40 px"}} my='10'>
        <Box rounded="lg" bg="white" px="20 px"  borderWidth="0.5 px" style={styles.ShadowStyleCard} borderColor='#C6C6C6'>
          <Box px="42 px">
            <img alt="" src={require("../../Image/HE1.png")} />
          </Box>
          <Heading
            fontWeight="800"
            fontSize="20"
            lineHeight="24 px"
            color="#1B4C74"
          >
            Huile essentielle
          </Heading>
          <Text
            style={styles.fn}
            fontWeight="400"
            fontSize="14"
            lineHeight="17px"
            fontStyle="normal"
            color="black"
            textAlign="justify"
          >
            Lorem ipsum dolor sit amet consectetur.
          </Text>
          <Center my='34 px'>
          <Button
            w="177px"
            h="33px"
            style={styles.btnReservez}
            borderRadius="4 px"
            px='24px'
            py='8px'
          >
            <Link to="/Shop/DetailsProduct"s tyle={styles.textDeco}>
              <Text color="white" fontWeight="600"
              fontSize="14"
              lineHeight="17px"
              fontStyle="normal">
                Découvrir produits
              </Text>
            </Link>
          </Button>
          </Center>
        </Box>
        <Box rounded="lg" bg="white" px="20 px"  borderWidth="0.5 px" style={styles.ShadowStyleCard} borderColor='#C6C6C6'>
          <Box px="42 px">
            <img alt="" src={require("../../Image/HE1.png")} />
          </Box>
          <Heading
            fontWeight="800"
            fontSize="20"
            lineHeight="24 px"
            color="#1B4C74"
          >
            Huile essentielle
          </Heading>
          <Text
            style={styles.fn}
            fontWeight="400"
            fontSize="14"
            lineHeight="17px"
            fontStyle="normal"
            color="black"
            textAlign="justify"
          >
            Lorem ipsum dolor sit amet consectetur.
          </Text>
          <Center my='34 px'>
          <Button
            w="177px"
            h="33px"
            style={styles.btnReservez}
            borderRadius="4 px"
            px='24px'
            py='8px'
          >
            <Link to="/Shop/DetailsProduct"s tyle={styles.textDeco}>
              <Text color="white" fontWeight="600"
              fontSize="14"
              lineHeight="17px"
              fontStyle="normal">
                Découvrir produits
              </Text>
            </Link>
          </Button>
          </Center>
        </Box>
        <Box rounded="lg" bg="white" px="20 px"  borderWidth="0.5 px" style={styles.ShadowStyleCard} borderColor='#C6C6C6'>
          <Box px="42 px">
            <img alt="" src={require("../../Image/HE1.png")} />
          </Box>
          <Heading
            fontWeight="800"
            fontSize="20"
            lineHeight="24 px"
            color="#1B4C74"
          >
            Huile essentielle
          </Heading>
          <Text
            style={styles.fn}
            fontWeight="400"
            fontSize="14"
            lineHeight="17px"
            fontStyle="normal"
            color="black"
            textAlign="justify"
          >
            Lorem ipsum dolor sit amet consectetur.
          </Text>
          <Center my='34 px'>
          <Button
            w="177px"
            h="33px"
            style={styles.btnReservez}
            borderRadius="4 px"
            px='24px'
            py='8px'
          >
            <Link to="/Shop/DetailsProduct"s tyle={styles.textDeco}>
              <Text color="white" fontWeight="600"
              fontSize="14"
              lineHeight="17px"
              fontStyle="normal">
                Découvrir produits
              </Text>
            </Link>
          </Button>
          </Center>
        </Box>
        <Box rounded="lg" bg="white" px="20 px"  borderWidth="0.5 px" style={styles.ShadowStyleCard} borderColor='#C6C6C6'>
          <Box px="42 px">
            <img alt="" src={require("../../Image/HE1.png")} />
          </Box>
          <Heading
            fontWeight="800"
            fontSize="20"
            lineHeight="24 px"
            color="#1B4C74"
          >
            Huile essentielle
          </Heading>
          <Text
            style={styles.fn}
            fontWeight="400"
            fontSize="14"
            lineHeight="17px"
            fontStyle="normal"
            color="black"
            textAlign="justify"
          >
            Lorem ipsum dolor sit amet consectetur.
          </Text>
          <Center my='34 px'>
          <Button
            w="177px"
            h="33px"
            style={styles.btnReservez}
            borderRadius="4 px"
            px='24px'
            py='8px'
          >
            <Link to="/Shop/DetailsProduct"s tyle={styles.textDeco}>
              <Text color="white" fontWeight="600"
              fontSize="14"
              lineHeight="17px"
              fontStyle="normal">
                Découvrir produits
              </Text>
            </Link>
          </Button>
          </Center>
        </Box>
        <Box rounded="lg" bg="white" px="20 px"  borderWidth="0.5 px" style={styles.ShadowStyleCard} borderColor='#C6C6C6'>
          <Box px="42 px">
            <img alt="" src={require("../../Image/HE1.png")} />
          </Box>
          <Heading
            fontWeight="800"
            fontSize="20"
            lineHeight="24 px"
            color="#1B4C74"
          >
            Huile essentielle
          </Heading>
          <Text
            style={styles.fn}
            fontWeight="400"
            fontSize="14"
            lineHeight="17px"
            fontStyle="normal"
            color="black"
            textAlign="justify"
          >
            Lorem ipsum dolor sit amet consectetur.
          </Text>
          <Center my='34 px'>
          <Button
            w="177px"
            h="33px"
            style={styles.btnReservez}
            borderRadius="4 px"
            px='24px'
            py='8px'
          >
            <Link to="/Shop/DetailsProduct"s tyle={styles.textDeco}>
              <Text color="white" fontWeight="600"
              fontSize="14"
              lineHeight="17px"
              fontStyle="normal">
                Découvrir produits
              </Text>
            </Link>
          </Button>
          </Center>
        </Box>
        <Box rounded="lg" bg="white" px="20 px"  borderWidth="0.5 px" style={styles.ShadowStyleCard} borderColor='#C6C6C6'>
          <Box px="42 px">
            <img alt="" src={require("../../Image/HE1.png")} />
          </Box>
          <Heading
            fontWeight="800"
            fontSize="20"
            lineHeight="24 px"
            color="#1B4C74"
          >
            Huile essentielle
          </Heading>
          <Text
            style={styles.fn}
            fontWeight="400"
            fontSize="14"
            lineHeight="17px"
            fontStyle="normal"
            color="black"
            textAlign="justify"
          >
            Lorem ipsum dolor sit amet consectetur.
          </Text>
          <Center my='34 px'>
          <Button
            w="177px"
            h="33px"
            style={styles.btnReservez}
            borderRadius="4 px"
            px='24px'
            py='8px'
          >
            <Link to="/Shop/DetailsProduct"s tyle={styles.textDeco}>
              <Text color="white" fontWeight="600"
              fontSize="14"
              lineHeight="17px"
              fontStyle="normal">
                Découvrir produits
              </Text>
            </Link>
          </Button>
          </Center>
        </Box>
        <Box rounded="lg" bg="white" px="20 px"  borderWidth="0.5 px" style={styles.ShadowStyleCard} borderColor='#C6C6C6'>
          <Box px="42 px">
            <img alt="" src={require("../../Image/HE1.png")} />
          </Box>
          <Heading
            fontWeight="800"
            fontSize="20"
            lineHeight="24 px"
            color="#1B4C74"
          >
            Huile essentielle
          </Heading>
          <Text
            style={styles.fn}
            fontWeight="400"
            fontSize="14"
            lineHeight="17px"
            fontStyle="normal"
            color="black"
            textAlign="justify"
          >
            Lorem ipsum dolor sit amet consectetur.
          </Text>
          <Center my='34 px'>
          <Button
            w="177px"
            h="33px"
            style={styles.btnReservez}
            borderRadius="4 px"
            px='24px'
            py='8px'
          >
            <Link to="/Shop/DetailsProduct"s tyle={styles.textDeco}>
              <Text color="white" fontWeight="600"
              fontSize="14"
              lineHeight="17px"
              fontStyle="normal">
                Découvrir produits
              </Text>
            </Link>
          </Button>
          </Center>
        </Box>
        <Box rounded="lg" bg="white" px="20 px"  borderWidth="0.5 px" style={styles.ShadowStyleCard} borderColor='#C6C6C6'>
          <Box px="42 px">
            <img alt="" src={require("../../Image/HE1.png")} />
          </Box>
          <Heading
            fontWeight="800"
            fontSize="20"
            lineHeight="24 px"
            color="#1B4C74"
          >
            Huile essentielle
          </Heading>
          <Text
            style={styles.fn}
            fontWeight="400"
            fontSize="14"
            lineHeight="17px"
            fontStyle="normal"
            color="black"
            textAlign="justify"
          >
            Lorem ipsum dolor sit amet consectetur.
          </Text>
          <Center my='34 px'>
          <Button
            w="177px"
            h="33px"
            style={styles.btnReservez}
            borderRadius="4 px"
            px='24px'
            py='8px'
          >
            <Link to="/Shop/DetailsProduct"s tyle={styles.textDeco}>
              <Text color="white" fontWeight="600"
              fontSize="14"
              lineHeight="17px"
              fontStyle="normal">
                Découvrir produits
              </Text>
            </Link>
          </Button>
          </Center>
        </Box>
        <Box rounded="lg" bg="white" px="20 px"  borderWidth="0.5 px" style={styles.ShadowStyleCard} borderColor='#C6C6C6'>
          <Box px="42 px">
            <img alt="" src={require("../../Image/HE1.png")} />
          </Box>
          <Heading
            fontWeight="800"
            fontSize="20"
            lineHeight="24 px"
            color="#1B4C74"
          >
            Huile essentielle
          </Heading>
          <Text
            style={styles.fn}
            fontWeight="400"
            fontSize="14"
            lineHeight="17px"
            fontStyle="normal"
            color="black"
            textAlign="justify"
          >
            Lorem ipsum dolor sit amet consectetur.
          </Text>
          <Center my='34 px'>
          <Button
            w="177px"
            h="33px"
            style={styles.btnReservez}
            borderRadius="4 px"
            px='24px'
            py='8px'
          >
            <Link to="/Shop/DetailsProduct" style={styles.textDeco}>
              <Text color="white" fontWeight="600"
              fontSize="14"
              lineHeight="17px"
              fontStyle="normal">
                Découvrir produits
              </Text>
            </Link>
          </Button>
          </Center>
        </Box>
        <Box rounded="lg" bg="white" px="20 px"  borderWidth="0.5 px" style={styles.ShadowStyleCard} borderColor='#C6C6C6'>
          <Box px="42 px">
            <img alt="" src={require("../../Image/HE1.png")} />
          </Box>
          <Heading
            fontWeight="800"
            fontSize="20"
            lineHeight="24 px"
            color="#1B4C74"
          >
            Huile essentielle
          </Heading>
          <Text
            style={styles.fn}
            fontWeight="400"
            fontSize="14"
            lineHeight="17px"
            fontStyle="normal"
            color="black"
            textAlign="justify"
          >
            Lorem ipsum dolor sit amet consectetur.
          </Text>
          <Center my='34 px'>
          <Button
            w="177px"
            h="33px"
            style={styles.btnReservez}
            borderRadius="4 px"
            px='24px'
            py='8px'
          >
            <Link to="/Shop/DetailsProduct" style={styles.textDeco}>
              <Text color="white" fontWeight="600"
              fontSize="14"
              lineHeight="17px"
              fontStyle="normal">
                Découvrir produits
              </Text>
            </Link>
          </Button>
          </Center>
        </Box>
        <Box rounded="lg" bg="white" px="20 px"  borderWidth="0.5 px" style={styles.ShadowStyleCard} borderColor='#C6C6C6'>
          <Box px="42 px">
            <img alt="" src={require("../../Image/HE1.png")} />
          </Box>
          <Heading
            fontWeight="800"
            fontSize="20"
            lineHeight="24 px"
            color="#1B4C74"
          >
            Huile essentielle
          </Heading>
          <Text
            style={styles.fn}
            fontWeight="400"
            fontSize="14"
            lineHeight="17px"
            fontStyle="normal"
            color="black"
            textAlign="justify"
          >
            Lorem ipsum dolor sit amet consectetur.
          </Text>
          <Center my='34 px'>
          <Button
            w="177px"
            h="33px"
            style={styles.btnReservez}
            borderRadius="4 px"
            px='24px'
            py='8px'
          >
            <Link to="/Shop/DetailsProduct" style={styles.textDeco}>
              <Text color="white" fontWeight="600"
              fontSize="14"
              lineHeight="17px"
              fontStyle="normal">
                Découvrir produits
              </Text>
            </Link>
          </Button>
          </Center>
        </Box>
        <Box rounded="lg" bg="white" px="20 px"  borderWidth="0.5 px" style={styles.ShadowStyleCard} borderColor='#C6C6C6'>
          <Box px="42 px">
            <img alt="" src={require("../../Image/HE1.png")} />
          </Box>
          <Heading
            fontWeight="800"
            fontSize="20"
            lineHeight="24 px"
            color="#1B4C74"
          >
            Huile essentielle
          </Heading>
          <Text
            style={styles.fn}
            fontWeight="400"
            fontSize="14"
            lineHeight="17px"
            fontStyle="normal"
            color="black"
            textAlign="justify"
          >
            Lorem ipsum dolor sit amet consectetur.
          </Text>
          <Center my='34 px'>
          <Button
            w="177px"
            h="33px"
            style={styles.btnReservez}
            borderRadius="4 px"
            px='24px'
            py='8px'
          >
            <Link to="/Shop/DetailsProduct" style={styles.textDeco}>
              <Text color="white" fontWeight="600"
              fontSize="14"
              lineHeight="17px"
              fontStyle="normal">
                Découvrir produits
              </Text>
            </Link>
          </Button>
          </Center>
        </Box>

      </Flex>
    </Center>
    </Box>
  );
}
