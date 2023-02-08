import React from "react";
import { Box, Flex, Heading, Text, Button } from "native-base";
import { styles } from "../../styles";
import HeadERLano from "../NAVBAR/HeadERLano";
import { motion } from "framer-motion";

export default function DetailsProduct(props) {
  return (
    <Box mt='100px'>
      <HeadERLano active={props.active} />
      
      <Flex direction="row" alignItems="center" flexWrap='wrap' px="4%" justifyContent='space-around'>
      
        
        <Box w= {{base:'100%',md:'50%',lg:'50%'}}>
        <motion.div
                animate={{ scale: 1 }}
                initial={{ scale: 0}}
                whileHover={{ scale: 1.2, zIndex: 300 }}
              >
          <img alt="" src={require("../../Image/DetailsProduct.png")} /> 
          </motion.div>
        </Box>
       
        
        <Flex w= {{base:'100%',md:'50%',lg:'50%'}}>
        <div class="d-flex flex-column align-content-center" data-aos="fade-left">
          <Heading
            fontWeight="700"
            fontSize={{base:'46',md:'48',lg:'48'}}
            lineHeight="59 px"
            color="#1B4C74"
            textAlign={{base:'center'}}
          >
            Huile essentiel citrons
          </Heading>
          
          <Heading
            fontWeight="700"
            fontSize="24"
            lineHeight="29 px"
            color="#999999"
            mt="20px"
          >
            Descriptions
          </Heading>
          <Heading
            fontWeight="500"
            fontSize="24"
            lineHeight="29 px"
            color="#FF0000"
          >
            98,00 €
          </Heading>
          <Text
            fontWeight="400"
            fontSize="14"
            lineHeight="22px"
            fontStyle="normal"
            color="black"
            textAlign="justify"
            mt="27px"
          >
            Lorem ipsum dolor sit amet consectetur. Nulla venenatis id morbi
            massa mauris enim id urna nibh. Dui nisl ut ornare nulla nibh id.
            Consectetur mattis nunc adipiscing mauris.
          </Text>
          <Text
            fontWeight="400"
            fontSize="14"
            lineHeight="22px"
            fontStyle="normal"
            color="black"
            textAlign="justify"
            my="27px"
          >
            Ornare auctor consectetur praesent lectus dolor ac. Enim enim
            senectus est vel risus elementum laoreet sed. Tincidunt habitasse
            vitae phasellus cum vel felis est.
          </Text>
          <Text
            fontWeight="400"
            fontSize="14"
            lineHeight="22px"
            fontStyle="normal"
            color="black"
            textAlign="justify"
            mb="41px"
          >
            Lorem ipsum dolor sit amet consectetur. Nulla venenatis id morbi
            massa mauris enim id urna nibh. Dui nisl ut ornare nulla nibh id.
            Consectetur mattis nunc adipiscingmauris.Ornare auctor consectetur
            praesent lectus dolor ac. Enim enim senectus est vel risus elementum
            laoreet sed. Tincidunt habitasse vitae phasellus cum vel felis est.
          </Text>
          <Button
            size="sm"
            w="238px"
            mb='20'
            variant="outline"
            bg="#1B4C74"
            borderRadius="4 px"
          >
            <Flex direction="row" gap="10 px">
              <img src={require("../../Image/WhiteIconPanier.png")} alt="" />
              <Text
                color="white"
                fontWeight="600"
                fontSize="14"
                lineHeight="17px"
                fontStyle="normal"
              >
                Acheter maintenant
              </Text>
            </Flex>
          </Button>
          </div>
        </Flex>
      </Flex>
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
    </Box>
  );
}
