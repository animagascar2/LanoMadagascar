import React from "react";
import { Box, Flex, Text, Button } from "native-base";
import { styles } from "../../styles";
import { Link } from "react-router-dom";

export default function ShopHeaderContent() {
  return (
    <>
      
      <Flex
        position="fixed"
        mr="32.39 px"
        bottom={10}
        right={0}
        zIndex={10}
        alignItems="flex-end"
      > 
        <img
          src={require("../../Image/LogoWhatsapp.png")}
          alt=""
          width="40px"
          height="40px"
        />
      </Flex>
      <div class="item" data-aos="fade-down">
      <Flex  p='10%' pt={{base:"25%" ,lg:'20%'}}
        style={{  
          backgroundImage: "url(" + require("../../Image/backgroundHeaderShop.png") + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width:'100%',
          height:'auto'
        }}>
          
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
          color={{base:"#FFFFFF",lg:"#000000"}}
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
          maxWidth='450px'
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
          <Link to="/Shopproduct" style={styles.textDeco}>
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
      </Flex>
      </div>
    </>
  );
}
