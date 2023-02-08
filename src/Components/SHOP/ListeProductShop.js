import React from "react";
import { Box, Flex, Text, Button, Heading, Center, Input } from "native-base";
import { styles } from "../../styles";
import { Link } from "react-router-dom";

export default function ListeProductShop() {
  return (
    <Box>
      <div class="item" data-aos="slide-up">
        <Flex
          justifyContent={{ base: "center", lg: "space-arround" }}
          mx="5%"
          direction="row"
          alignItems="center"
          mt="44px"
          mb="75px"
          gap="14px"
        >
          <Text
            color="black"
            fontWeight="700"
            fontSize="18"
            lineHeight="22px"
            fontStyle="normal"
          >
            Conversion
          </Text>
          <Input
            w="114px"
            h="29px"
            shadow={3}
            placeholderTextColor="#1B4C74"
            fontSize="14 px"
            fontWeight="700"
            lineHeight="17px"
            InputRightElement={
              <Box mr="2">
                <img src={require("../../Image/SelectIconBlack.png")} alt="" />
              </Box>
            }
            placeholder="USD $"
          />
        </Flex>
      </div>
      <div class="item" data-aos="slide-up">
        <Flex
          mx="5%"
          direction="row"
          gap="100 px"
          borderRadius="lg"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="space-between"
          style={styles.ShadowStyle}
        >
          <Box mt="-34 px" mx={{ md: "40", lg: "0" }}>
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
          <Flex direction="row" mt={{ base: "40px" }} alignItems="center">
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
          <Flex direction="row" mt={{ lg: "40px" }} alignItems="center">
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
      </div>
      <Flex
        direction={{ base: "column", md: "column", lg: "row" }}
        p={{ base: "40px", md: "60px", lg: "4%" }}
        w="100%"
        alignItems="center"
      >
        <Flex w={{ base: "80%", md: "60%", lg: "50%" }}>
          <div data-aos="fade-right">
            <img
              src={require("../../Image/ImgHuileEssentiel.png")}
              alt=""
              width="100%"
            />
          </div>
        </Flex>
        <Flex direction="column" w={{ base: "100%", md: "100%", lg: "50%" }}>
          <div data-aos="fade-left">
            <Text
              color="#0C2015"
              fontWeight="600"
              fontSize={{ base: "28", md: "40", lg: "40" }}
              lineHeight="57px"
              fontStyle="normal"
            >
              HUILES ESSENTIELLES BIO CHÉMOTYPÉES ET INTÉGRALES
            </Text>
          </div>
          <div data-aos="fade-left">
            <Text
              color="#0C2015"
              fontWeight="400"
              fontSize="14px"
              lineHeight="25px"
              fontStyle="normal"
              textAlign="justify"
              mt="38px"
              mb="30 px"
            >
              Chaque huile essentielle a une composition unique de produits
              chimiques, et cette variation affecte l’odeur, l’absorption et les
              effets sur le corps. La composition chimique d’une huile
              essentielle peut varier au sein d’une même espèce végétale ou
              d’une plante à l’autre.
            </Text>
          </div>
          <div data-aos="fade-left">
            <Flex>
              <Button
                w="112px"
                h="49px"
                mt="12 px"
                style={styles.btnReservez}
                borderRadius="4 px"
                py="16 px"
                px="32 px"
              >
                <Link to="/Shopproduct" style={styles.textDeco}>
                  <Text color="white" style={styles.btnReservezText}>
                    Voir plus +
                  </Text>
                </Link>
              </Button>
            </Flex>
          </div>
        </Flex>
      </Flex>

      <Flex mx={{ base: "10%", lg: "20%" }}>
        <Center>
          <div data-aos="slide-up">
            <Heading
              color=" rgba(0, 0, 0, 0.5)"
              fontWeight="600"
              fontSize="28"
              lineHeight="34px"
              fontStyle="normal"
            >
              Nos produits
            </Heading>
          </div>
        </Center>
        <div data-aos="slide-up">
          <Flex
            direction={{
              base: "column-reverse",
              md: "column-reverse",
              lg: "row",
            }}
            alignItems="center"
            // flexWrap="wrap"
            justifyContent="center"
          >
            <Flex
              direction="column"
              w={{ base: "100%", md: "100%", lg: "50%" }}
            >
              <Text
                color="#0C2015"
                fontWeight="400"
                fontSize="14px"
                lineHeight="29px"
                fontStyle="normal"
                textAlign="justify"
                mt="38px"
                mb="30 px"
              >
                Lorem ipsum dolor sit amet milogi utan tiryktigt till egt. Öråd
                lasm om didis, antropostik pådäs. Lorem ipsum dolor sit amet
                milogi utan tiryktigt till egt. Öråd lasm om didis, antropostik
                pådäs
              </Text>
            </Flex>
            <Box>
              <img src={require("../../Image/ProdHuiles.png")} alt="" />
            </Box>
          </Flex>
        </div>
        <div data-aos="slide-up">
          <Flex
            direction="row"
            alignItems="center"
            flexWrap="wrap"
            justifyContent="center"
          >
            <Box>
              <img src={require("../../Image/ImgHE.png")} alt="" />
            </Box>
            <Flex w={{ base: "100%", md: "100%", lg: "50%" }}>
              <Text
                color="#0C2015"
                fontWeight="400"
                fontSize="14px"
                lineHeight="29px"
                fontStyle="normal"
                textAlign="justify"
                mt="38px"
                mb="30 px"
              >
                Lorem ipsum dolor sit amet milogi utan tiryktigt till egt. Öråd
                lasm om didis, antropostik pådäs. Lorem ipsum dolor sit amet
                milogi utan tiryktigt till egt. Öråd lasm om didis, antropostik
                pådäs
              </Text>
            </Flex>
          </Flex>
        </div>
        <div data-aos="slide-up">
          <Flex
            alignItems="center"
            direction={{
              base: "column-reverse",
              md: "column-reverse",
              lg: "row",
            }}
            justifyContent="center"
          >
            <Box w={{ base: "100%", md: "100%", lg: "50%" }}>
              <Text
                color="#0C2015"
                fontWeight="400"
                fontSize="14px"
                lineHeight="29px"
                fontStyle="normal"
                textAlign="justify"
                mt="38px"
                mb="30 px"
              >
                Lorem ipsum dolor sit amet milogi utan tiryktigt till egt. Öråd
                lasm om didis, antropostik pådäs. Lorem ipsum dolor sit amet
                milogi utan tiryktigt till egt. Öråd lasm om didis, antropostik
                pådäs
              </Text>
            </Box>
            <Box>
              <img src={require("../../Image/ImgHE2.png")} alt="" />
            </Box>
          </Flex>
        </div>
      </Flex>
    </Box>
  );
}
