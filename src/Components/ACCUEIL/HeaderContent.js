import React from "react";
import { motion } from "framer-motion";
import {
  Center,
  Flex,
  Text,
  Select,
  CheckIcon,
  Box,
  Input,
  Image,
} from "native-base";

export default function HeaderContent() {
  
  return (
    <div data-aos="fade-down">
      <Box position="absolute" w="100%">
        <img src={require("../../Image/imageback.png")} alt="" />
      </Box>
      
      <Flex
        position="fixed"
        mr="32.39 px"
        bottom={10}
        right={0}
        zIndex={10}
        alignItems="flex-end"
      > 
      <motion.div
       initial={{ opacity: 0, scale: 0.5 }}
       animate={{ opacity: 1, scale: 1 }}
       transition={{ duration: 0.5 }}
    >
        <img
          src={require("../../Image/LogoWhatsapp.png")}
          alt=""
          width="40px"
          height="40px"
        />
        </motion.div>
      </Flex>
      <Center
        mt={{
          base: "20%",
          md: "20%",
          lg: "20%",
        }}
      >
        <Text
          fontWeight="900"
          textAlign="center"
          fontSize={{
            base: "30",
            md: "50",
            lg: "50",
          }}
          lineHeight={{
            base: "35px",
            md: "50px",
            lg: "61 px",
          }}
          color="white"
        >
          Recherchez vos prochaines vacances
        </Text>
        {/* </motion.h1> */}
        <Text
          fontWeight="500"
          fontSize={{
            base: "16",
            md: "20",
            lg: "28",
          }}
          mt={{
            base: "15",
            md: "36",
            lg: "36",
          }}
          lineHeight="34 px"
          color="white"
        >
          Consultez notre meilleure promotion
        </Text>
        <Flex
          direction="row"
          mt={{
            base: "10%",
            md: "20%",
            lg: "10%",
          }}
          alignItems="center"
          justifyContent="center"
          gap={{
            base: "10px",
            md: "50px",
            lg: "50px",
          }}
          mb={{ base: "10%" }}
        >
          <Image
            source={{
              uri: require("../../Image/ImageSeDetendre.png"),
            }}
            alt=""
            size={{
              base: "100px",
              md: "152.86px",
              lg: "152.86px",
            }}
          />
          <Image
            source={{
              uri: require("../../Image/ImageCulturel.png"),
            }}
            alt=""
            size={{
              base: "100px",
              md: "152.86px",
              lg: "152.86px",
            }}
          />
          <Image
            source={{
              uri: require("../../Image/Histoire.png"),
            }}
            alt=""
            size={{
              base: "100px",
              md: "152.86px",
              lg: "152.86px",
            }}
          />
        </Flex>
      </Center>
    </div>
  );
}
