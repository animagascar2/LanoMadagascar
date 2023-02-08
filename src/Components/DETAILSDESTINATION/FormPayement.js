import React from "react";
import {
  Box,
  Flex,
  Text,
  Divider,
  Heading,
  Button,
  Input,
  HStack,
  Checkbox,
} from "native-base";
import { styles } from "../../styles";

export default function FormPayement() {
  return (
    <div class="item" data-aos="slide-up">
      <Box  style={styles.ShadowStylePayement} px={{base:'4',md:'20',lg:"20"}} py={{base:'2',md:'5',lg:"10"}} m={{base:'2',md:'10',lg:"20"}}>
      <div class="item" data-aos="slide-up">
        <Box>
          <Box>
          <div class="item" data-aos="slide-up">
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
            </div>
          </Box>
          <Flex
            my="46px"
            direction="row"
            flexWrap="wrap"
            justifyContent="space-between"
          >
            <Box>
              <Text
                color="#3D3E48"
                fontWeight="700"
                fontSize="14"
                lineHeight="37px"
                fontStyle="normal"
              >
                Nom
              </Text>
              <Input h="58px" w="xs" shadow={3} />
            </Box>
            <Box>
              <Text
                color="#3D3E48"
                fontWeight="700"
                fontSize="14"
                lineHeight="37px"
                fontStyle="normal"
              >
                Prénom
              </Text>
              <Input h="58px" w="xs" shadow={3} />
            </Box>
            <Box>
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
            <Box>
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
          <Flex direction="row" flexWrap="wrap" justifyContent="space-between">
            <Box>
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
                w="xs"
                shadow={3}
                InputRightElement={
                  <Box mr="21px">
                    <img src={require("../../Image/PlusIcon.png")} alt="" />
                  </Box>
                }
              />
            </Box>
            <Box>
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
                w="xs"
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
              w={{base:'xs', md:'sm',lg:"md"}}
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
                w={{base:'200px',lg:"xs"}}
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
        </div>
        <div class="item" data-aos="slide-up">
        <Box my="10">
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
          <Flex
            my="46px"
            gap="5"
            direction="row"
            flexWrap="wrap"
            justifyContent="space-between"
          >
            <Box>
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
                w={{base:'xs',md:'md',lg:'md'}}
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
          <Flex
            
            direction={{ base: "column", md: "column", lg: "row" }}
            flexWrap="wrap"
          >
            <Box>
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
                w='xs'
                shadow={3}
                InputRightElement={
                  <Box mr="2">
                    <img src={require("../../Image/EyeShowIcon.png")} alt="" />
                  </Box>
                }
              />
            </Box>
            <Flex direction="row" mt="46px" mx={{base:'30%',md:'10',lg:'10'}} gap="15px">
              <Flex alignItems="center" gap="7px">
                <img src={require("../../Image/logoMastercard.png")} alt="" />
                <Checkbox
                  value="test"
                  accessibilityLabel="This is a dummy checkbox"
                  borderColor="black.100"
                  bg="white "
                  defaultIsChecked
                />
              </Flex>
              <Flex alignItems="center" gap="10 px">
                <img src={require("../../Image/logovisa.png")} alt="" />
                <Checkbox
                  value="test"
                  accessibilityLabel="This is a dummy checkbox"
                />
              </Flex>
            </Flex>
            <Box mt="60px" ml={{base:"25%",md:'0',lg:'0'}}>
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
        </Box>
        </div>
      </Box>
    </div>
  );
}
