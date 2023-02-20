import React from "react";
import { Box, Flex, Text, Divider, Heading, Input, Button } from "native-base";
import { styles } from "../../styles";

export default function FooterLanoContent() {
  const fn = "Roboto !important";
  return (
    <div data-aos="slide-up">
      
      <Box>
        <Box position="absolute" my={{base:"35px",md:"90px",lg:"167px"}} mx={{base:"4px",md:"80px",lg:"80px"}} bg='red'>
          <Input
            width={{base:"350px",md:"729px",lg:"729px"}}
            height={{base:"40px",md:"75px",lg:"80px"}}
            bg='white'
            borderRightColor='#FFC525'
            InputRightElement={
              <Button 
              width= {{base:"100px",md:"134px",lg:"134px"}}
              height= {{base:'40px',md:'74px',lg:'79px'}}
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
        <img src={require("../../Image/footerBackground.png")} alt="" width="auto" />
      </Box>
      </div>
  );
}

