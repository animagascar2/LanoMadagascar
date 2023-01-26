import React from "react";
import { Box, Flex, Text, Divider, Heading, Button, Input } from "native-base";
import { styles } from "../../styles";

export default function FormPayement() {
  return (
    <Box
      style={styles.ShadowStylePayement}
      mx="95 px"
      pt="117 px"
      mb="54px"
      pl="114 px"
      pr="191px"
    >
      <Box>
        <Box>
          <Heading
            color="black"
            fontWeight="700"
            fontSize="18"
            lineHeight="37px"
            fontStyle="normal"
          >
            Information personnelle
          </Heading>
          <Divider w="99px" backgroundColor="#159F15" />
        </Box>
        <Flex my="46px" direction="row" gap="82px">
          <Box w="262px">
            <Text
              color="#3D3E48"
              fontWeight="700"
              fontSize="14"
              lineHeight="37px"
              fontStyle="normal"
            >
              Nom
            </Text>
            <Input h="58px" shadow={3} />
          </Box>
          <Box w="262px">
            <Text
              color="#3D3E48"
              fontWeight="700"
              fontSize="14"
              lineHeight="37px"
              fontStyle="normal"
            >
              Prénom
            </Text>
            <Input h="58px" shadow={3} />
          </Box>
          <Box w="139px">
            <Text
              color="#3D3E48"
              fontWeight="700"
              fontSize="14"
              lineHeight="37px"
              fontStyle="normal"
            >
              Ville
            </Text>
            <Input
              h="58px"
              shadow={3}
              InputRightElement={
                <Box mr="2">
                  <img
                    src={require("../../Image/SelectIconBlack.png")}
                    alt=""
                  />
                </Box>
              }
            />
          </Box>
          <Box w="139px" ml="-66px">
            <Text
              color="#3D3E48"
              fontWeight="700"
              fontSize="14"
              lineHeight="37px"
              fontStyle="normal"
            >
              Pays
            </Text>
            <Input
              h="58px"
              shadow={3}
              InputRightElement={
                <Box mr="2">
                  <img
                    src={require("../../Image/SelectIconBlack.png")}
                    alt=""
                  />
                </Box>
              }
            />
          </Box>
        </Flex>
        <Flex mb="46px" direction="row" gap="82px">
          <Box w="262px">
            <Text
              color="#3D3E48"
              fontWeight="700"
              fontSize="14"
              lineHeight="37px"
              fontStyle="normal"
            >
              Enfant
            </Text>
            <Input
              placeholder="0"
              placeholderTextColor="#736D6D"
              fontSize="14px"
              fontWeight="700"
              textAlign="center"
              h="58px"
              shadow={3}
              InputRightElement={
                <Box mr="21px">
                  <img src={require("../../Image/PlusIcon.png")} alt="" />
                </Box>
              }
            />
          </Box>
          <Box w="262px">
            <Text
              color="#3D3E48"
              fontWeight="700"
              fontSize="14"
              lineHeight="37px"
              fontStyle="normal"
            >
              Adults
            </Text>
            <Input
              placeholder="0"
              placeholderTextColor="#736D6D"
              fontSize="14px"
              fontWeight="700"
              textAlign="center"
              h="58px"
              shadow={3}
              InputRightElement={
                <Box mr="21px">
                  <img src={require("../../Image/PlusIcon.png")} alt="" />
                </Box>
              }
            />
          </Box>
          <Flex
            direction="row"
            w="258px"
            justifyContent="center"
            alignItems="center"
            h="58px"
            bg="#F5F1F1"
            mt="35px"
          >
            <Text
              color="#159F15"
              fontWeight="700"
              fontSize="14"
              lineHeight="37px"
              fontStyle="normal"
            >
              Vous devez payer
            </Text>
            <Input
              variant="underlined"
              w="81.5px"
              InputRightElement={
                <Box mr="2">
                  <Text
                    color="#3D3E48"
                    fontWeight="700"
                    fontSize="14"
                    lineHeight="37px"
                    fontStyle="normal"
                  >
                    $
                  </Text>
                </Box>
              }
            />
          </Flex>
        </Flex>
      </Box>
      <Box>
        <Box>
          <Heading
            color="black"
            fontWeight="700"
            fontSize="18"
            lineHeight="37px"
            fontStyle="normal"
          >
            information bancaire
          </Heading>
          <Divider w="99px" backgroundColor="#159F15" />
        </Box>
        <Flex my="46px" direction="row" gap="82px">
          <Box w="383px">
            <Text
              color="#3D3E48"
              fontWeight="700"
              fontSize="14"
              lineHeight="37px"
              fontStyle="normal"
              mb="-15px"
            >
              Numéro de carte
            </Text>
            <Text
              color="#786E6E"
              fontWeight="700"
              fontSize="12"
              lineHeight="37px"
              fontStyle="normal"
            >
              Entrez le numéro de carte à 16 chiffres sur la carte
            </Text>
            <Input
              textAlign="right"
              h="58px"
              shadow={3}
              placeholder="----/----/----/----"
              fontSize="20px"
              placeholderTextColor="black"
            />
          </Box>
          <Box w="262px">
            <Text
              color="#3D3E48"
              fontWeight="700"
              fontSize="14"
              lineHeight="37px"
              fontStyle="normal"
              mb="-15px"
            >
              CVV Numéro
            </Text>
            <Text
              color="#786E6E"
              fontWeight="700"
              fontSize="12"
              lineHeight="37px"
              fontStyle="normal"
            >
              Entrez le numéro à 3 ou 4 chiffres sur la carte
            </Text>
            <Input h="58px" shadow={3} />
          </Box>
          <Box w="262px">
            <Text
              color="#3D3E48"
              fontWeight="700"
              fontSize="14"
              lineHeight="37px"
              fontStyle="normal"
              mb="-15px"
            >
              échéance
            </Text>
            <Text
              color="#786E6E"
              fontWeight="700"
              fontSize="12"
              lineHeight="37px"
              fontStyle="normal"
            >
              Entrez le numéro à 3 ou 4 chiffres sur la carte
            </Text>
            <Flex direction="row">
              <Input h="58px" w="129.5px" shadow={3} />
              <Text
                color="#3D3E48"
                fontWeight="700"
                mt="3"
                fontSize="30"
                lineHeight="37px"
                fontStyle="normal"
                mx="15px"
              >
                /
              </Text>
              <Input h="58px" shadow={3} w="129.5px" />
            </Flex>
          </Box>
        </Flex>
        <Flex mb="46px" direction="row" gap="201px">
          <Box w="262px">
            <Text
              color="#3D3E48"
              fontWeight="700"
              fontSize="14"
              lineHeight="37px"
              fontStyle="normal"
              mb="-15px"
            >
              Numéro de carte
            </Text>
            <Text
              color="#786E6E"
              fontWeight="700"
              fontSize="12"
              lineHeight="37px"
              fontStyle="normal"
            >
              Entrez votre mot de passe
            </Text>
            <Input
              h="58px"
              shadow={3}
              InputRightElement={
                <Box mr="2">
                  <img src={require("../../Image/EyeShowIcon.png")} alt="" />
                </Box>
              }
            />
          </Box>
          <Box mt="60px">
            <Button bg="#025EFF" w="193px">
              <Text
                color="white"
                fontWeight="800"
                fontSize="12"
                lineHeight="37px"
                fontStyle="normal"
              >
                Payez maintenant
              </Text>
            </Button>
          </Box>
        </Flex>
        <Flex direction="row" gap='21px'>
          <Box >
              <img src={require("../../Image/logoMastercard.png")} alt="" />
          </Box>
          <Box >
              <img src={require("../../Image/logovisa.png")} alt="" />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
