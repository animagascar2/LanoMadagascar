import React from "react";
import { Box, Center, Flex, Heading, Text,Input, Button,Hidden } from "native-base";
import HeadERLano from "../NAVBAR/HeadERLano";
import { styles } from "../../styles";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ContacterNous(props) {
  return (
    <div class="item" data-aos="fade-down">
    <Box mt='100px'>
      <HeadERLano active={props.active} />
      <Flex direction="row" display={{base:'none',lg:'flex'}} my="10px" ml="80px">
        <Link to="/Apropos" style={styles.textDeco}>
            <img alt="" src={require("../../Image/IconBack.png")} />
        </Link>
      </Flex>
      <Flex direction="row">
        <Box  display={{base:'none',md:'none',lg:'flex'}}>
          <div class="item" data-aos="fade-right">
              <img alt="" src={require("../../Image/VectorContact.png")} width="80%"/>
          </div>
        </Box>
        <Center width={{base:'100%',md:'100%',lg:'50%'}} p={{base:'4',md:'5%',lg:'4'}}>
            <Heading
              fontWeight="800"
              fontSize={{base:'35',md:'50',lg:'50'}}
              lineHeight="61 px"
              color="#1B4C74"
              textAlign='center'
              my='1'
            >
              Demandez-nous!
            </Heading>
            <Flex direction={{base:'column',md:"row",lg:"row"}} gap="20%" >
              <Center>
                <img
                  alt=""
                  src={require("../../Image/IconPhoneBlue.png")}
                  width="18px"
                />
                <Text
                  fontWeight="600"
                  fontSize="18"
                  lineHeight="29px"
                  fontStyle="normal"
                  color="#4F4F4F"
                  textAlign="justify"
                  mt='16px'
                >
                  (480) 555-0103
                </Text>
              </Center>
              <Center>
                <img
                  alt=""
                  src={require("../../Image/IconlocationBlue.png")}
                  width="18px"
                />
                <Text
                  fontWeight="600"
                  fontSize="18"
                  lineHeight="29px"
                  fontStyle="normal"
                  color="#4F4F4F"
                  textAlign="justify"
                  mt='16px'
                >
                  Canberra, Australia
                </Text>
              </Center>
              <Center>
                <img
                  alt=""
                  src={require("../../Image/IconglobalBlue.png")}
                  width="18px"
                />
                <Text
                  fontWeight="600"
                  fontSize="18"
                  lineHeight="29px"
                  fontStyle="normal"
                  color="#4F4F4F"
                  textAlign="justify"
                  mt='16px'
                >
                  lorem@example.com
                </Text>
              </Center>
            </Flex>
            <Flex w="100%" gap='56px' direction="column" my='10'>
                <Input variant="underlined" placeholder="Nom*"  />
                <Input variant="underlined" placeholder="Email*"  />
                <Input variant="underlined" placeholder="Contact*"  />
                <Input variant="underlined" placeholder="Message"  />
            </Flex>
          
          <Button
          w="238px"
          bg="#1B4C74"
          borderRadius="4 px"
        > 
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
        <Link to="/Apropos/ContacterNous" style={styles.textDeco}>
          <Flex direction="row" gap="110 px">
            <Text
              color="white"
              fontWeight="600"
              fontSize="14"
              lineHeight="17px"
              fontStyle="normal"
            >
              Envoyer
            </Text>
            <img src={require("../../Image/IconSend.png")} alt=""/>
          </Flex>
          </Link>
          </motion.div>
        </Button>
        </Center>
        
      </Flex>
      <Flex direction="row" gap='26px' ml={{base:'6',md:'30%',lg:"224 px"}} mb={{base:'4',lg:"22 px"}} mt={{lg:"-55 px"}} >
        <img alt="" src={require("../../Image/IconYoutubeBlue.png")} />
        <img alt="" src={require("../../Image/IconTwiterBlue.png")} />
        <img alt="" src={require("../../Image/IconLinkdinBlue.png")} />
        <img alt="" src={require("../../Image/IconFacebookBlue.png")} />
        <img alt="" src={require("../../Image/IconInstagramBlue.png")} />
      </Flex>
    </Box>
    </div>
  );
}
