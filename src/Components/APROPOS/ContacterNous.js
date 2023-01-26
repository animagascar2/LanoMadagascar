import React from "react";
import { Box, Center, Flex, Heading, Text,Input, Button } from "native-base";
import HeadERLano from "../HeadERLano";
import { styles } from "../../styles";
import { Link } from "react-router-dom";

export default function ContacterNous(props) {
  return (
    <Box>
      <HeadERLano active={props.active} />
      <Flex direction="row" my="19px" ml="80px">
        <Link to="/Apropos" style={styles.textDeco}>
            <img alt="" src={require("../../Image/IconBack.png")} />
        </Link>
      </Flex>
      <Flex direction="row" gap="42px">
        <Box>
          <img alt="" src={require("../../Image/VectorContact.png")} />
        </Box>
        <Box w="749px">
          <Center>
            <Heading
              fontWeight="800"
              fontSize="50"
              lineHeight="61 px"
              color="#1B4C74"
            >
              Demandez-nous!
            </Heading>
            <Flex direction="row" gap="48px" mt="19 px">
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
            <Flex w="100%" mt="85 px" gap='56px' mb='44px'>
                <Input variant="underlined" placeholder="Nom*"  />
                <Input variant="underlined" placeholder="Email*"  />
                <Input variant="underlined" placeholder="Contact*"  />
                <Input variant="underlined" placeholder="Message"  />
            </Flex>
            
          </Center>
          <Button
          w="238px"
          variant="outline"
          bg="#1B4C74"
          borderRadius="4 px"
        > 
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
        </Button>
        </Box>
      </Flex>
      <Flex direction="row" gap='26px' ml="224 px" mb="22px" mt='-55px'>
        <img alt="" src={require("../../Image/IconYoutubeBlue.png")} />
        <img alt="" src={require("../../Image/IconTwiterBlue.png")} />
        <img alt="" src={require("../../Image/IconLinkdinBlue.png")} />
        <img alt="" src={require("../../Image/IconFacebookBlue.png")} />
        <img alt="" src={require("../../Image/IconInstagramBlue.png")} />
      </Flex>
    </Box>
  );
}
