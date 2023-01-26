import React from "react";
import { Box, Flex, Text, Button, Input } from "native-base";
import { styles } from "../../styles";
import { Link } from "react-router-dom";

export default function HeaderDestination(props) {
  return (
    <Box zIndex={10}>
      <Box zIndex={1} style={styles.navStyle} py="21.5 px">
        <Flex
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mx="57.52 px"
        >
          <Flex direction="row">
            <Box>
              <img src={require("../../Image/logo.png")} alt="" />
            </Box>
          </Flex>
          <Box>
            <Input
              width="376px"
              height="38px"
              bg="white"
              rounded="full"
              InputRightElement={
                <Box mr="2">
                  <Button rounded="full" style={styles.btnReservez}>
                    <img src={require("../../Image/searchIcon.png")} alt="" />
                  </Button>
                </Box>
              }
              placeholder="Recherche"
            />
          </Box>
          <Flex ml="20 px" direction="row" gap="10 px" alignItems="center">
            <Box>
              <img src={require("../../Image/Flagchina.png")} alt="" />
            </Box>
            <Box>
              <img src={require("../../Image/FlagAmerica.png")} alt="" />
            </Box>
            <Box>
              <img src={require("../../Image/FlagFrench.png")} alt="" />
            </Box>
            <Box>
              <img src={require("../../Image/selectIcon.png")} alt="" />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
