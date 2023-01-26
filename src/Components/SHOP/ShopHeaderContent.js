import React from "react";
import { Box, Flex, Text, Button } from "native-base";
import { styles } from "../../styles";
import { Link } from "react-router-dom";

export default function ShopHeaderContent() {
  return (
    <>
      <Box position="absolute" w="100%" zIndex={0}>
        <img src={require("../../Image/backgroundHeaderShop.png")} alt="" />
        <Flex mt="-68 px" mr="32.39 px" alignItems="flex-end">
          <img
            src={require("../../Image/LogoWhatsapp.png")}
            alt=""
            width="24px"
            height="24px"
          />
        </Flex>
      </Box>

      <Box mt="192 px" ml="80 px" mb="330" w="544px">
        <Text
          color="#1B4C74"
          style={styles.fn}
          fontWeight="800"
          fontSize="60"
          lineHeight="73px"
          fontStyle="normal"
        >
          Huile essentiel
        </Text>
        <Text
          color="#000000"
          mt="7"
          style={styles.fn}
          fontWeight="700"
          fontSize="30"
          lineHeight="38px"
          fontStyle="normal"
        >
          Huile pure et naturel
        </Text>
        <Text
          style={styles.fn}
          fontWeight="400"
          fontSize="14"
          lineHeight="22px"
          fontStyle="normal"
          color="black"
          textAlign="justify"
          my="20 px"
        >
          Les huiles essentielles, obtenues par pressage mécanique ou
          distillation, sont des extraits de plantes concentrés qui conservent
          l’odeur et la saveur naturelles de leur source.
        </Text>
        <Button
          size="sm"
          w="208px"
          variant="outline"
          bg="white"
          borderRadius="4 px"
          pt="16 px"
          pb="16 px"
          px="32 px"
        >
          <Link to="/Shop/Shopproduct" style={styles.textDeco}>
            <Flex direction="row" gap="10 px">
              <img src={require("../../Image/iconPanier.png")} alt="" />
              <Text
                color="#1B4C74"
                fontWeight="600"
                fontSize="14"
                lineHeight="17px"
                fontStyle="normal"
              >
                Acheter maintenant
              </Text>
            </Flex>
          </Link>
        </Button>
      </Box>
    </>
  );
}
