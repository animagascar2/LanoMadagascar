import React from "react";
import { Box, Flex, Text, Divider, Heading, Input, Button } from "native-base";
import { styles } from "../../styles";

export default function FooterLanoContent() {
  const fn = "Roboto !important";
  return (
    <Box>
      
      <Box>
        <Box position="absolute" my="167 px" mx="80px" bg='red'>
          <Input
            width="729px"
            height="75px"
            bg='white'
            borderRightColor='#FFC525'
            InputRightElement={
              <Button 
              width= '134px'
              height= '74px'
              py='29 px'
              roundedLeft={0} 
              border='none'
              bg='#FFC525'>
                Envoyer
              </Button>
            }
            placeholder="VOTRE EMAIL"
          />
        </Box>
        <Box position="absolute" ml="1233px" mt="116px">
          <img
            src={require("../../Image/ImagePersonFooter.png")}
            alt=""
            width="279px"
            height="293px"
          />
        </Box>
        <img src={require("../../Image/footerBackground.png")} alt="" />
      </Box>
    </Box>
  );
}

