import React from 'react'
import { Box, Flex, Text, Divider, Heading, Input, Button } from "native-base";
import { styles } from "../../styles";

export default function FooterShopContent() {
  return (
    <Box background=' #D3D3D3'>
        <Box>
          
          <Box position="absolute">
            <img
              src={require("../../Image/foot1.png")}
              alt=""
              width='100%'
            />
          </Box>
          <img src={require("../../Image/FootBGShop.png")} alt="" width='100%'/>
        </Box>
        <Flex position='absolute'  mt={{base:"5",md:"16",lg:"160px"}} ml={{base:"20%",md:"30%",lg:"50%"}}>
          <Input
            width={{base:"xs",md:"lg",lg:"2xl"}}
            height={{base:"auto",md:"auto",lg:"auto"}}
            bg='white'
            rounded='full'
            InputRightElement={
                <Button
                rounded='full'
                style={styles.btnReservez}
                p="4"
                m={{base:"1",md:"4",lg:"4"}}

            >
                <Text color="white" style={styles.btnReservezText}>
                Subscribe
                </Text>
            </Button>
            }
            placeholder="Tapez votre adresse e-mail"
          />
          </Flex>
    </Box>
  )
}
