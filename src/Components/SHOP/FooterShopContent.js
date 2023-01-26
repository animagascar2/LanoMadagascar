import React from 'react'
import { Box, Flex, Text, Divider, Heading, Input, Button } from "native-base";
import { styles } from "../../styles";

export default function FooterShopContent() {
  return (
    <Box background=' #D3D3D3'>
        <Box>
          <Box position='absolute'  ml="748 px" mt='168 px' mx="80px">
          <Input
            width="694.49px"
            height="86px"
            bg='white'
            rounded='full'
            p='33.46px'
            InputRightElement={
                <Button
                rounded='full'
                style={styles.btnReservez}
                pt="16 px"
                pb="16 px"
                px="32 px"
                mr='33.46px'
            >
                <Text color="white" style={styles.btnReservezText}>
                Subscribe
                </Text>
            </Button>
            }
            placeholder="Tapez votre adresse e-mail"
          />
        </Box>
        <Box position="absolute">
          <img
            src={require("../../Image/foot1.png")}
            alt=""
          />
        </Box>
        <img src={require("../../Image/FootBGShop.png")} alt="" />
        </Box>
    </Box>
  )
}
