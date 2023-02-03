import { Box, Heading, Center, Text, Flex, Button, Input } from "native-base";
import React from "react";
import { styles } from "../../styles";
import { Link } from "react-router-dom";
import { mapGetters } from "../../store/reex";


export default function ListeDestinations() {
  const ListeCircuit = mapGetters("circuit/ListeCircuit");
  return (
    <Box >
      <Flex  direction={{
        base:'column',
        lg:'row'
      }}  gap={{
        lg:'282 px'
      }}>
        <Flex direction="row" ml='12px'  alignItems='center' justifyContent="center"  gap='14px'>
          <Text 
            color="black"
            fontWeight="700"
            fontSize="18"
            lineHeight="22px"
            fontStyle="normal">
            Conversion
          </Text>
          <Input
            w="114px" h="29px" shadow={3}
            placeholderTextColor="#1B4C74"
            fontSize="14 px"
            fontWeight='700'
            lineHeight='17px'
            InputRightElement={
              <Box mr='2'>
                <img src={require("../../Image/SelectIconBlack.png")} alt="" />
              </Box>
              
            }
            placeholder="USD $"
          />
        </Flex>
        <Center mt="43 px">
          <Heading
            color=" rgba(0, 0, 0, 0.5)"
            fontWeight="600"
            fontSize="28"
            lineHeight="34px"
            fontStyle="normal"
          >
            Nos propositions
          </Heading>
          <Heading
            color="#000000"
            fontWeight="700"
            fontSize="38"
            lineHeight="46px"
            fontStyle="normal"
            mt="12px"
          >
            Notre destination
          </Heading>
        </Center>
      </Flex>
      <Center mx="80.62" my="68 px">
        <Flex direction="row" flexWrap="wrap" gap="20 px" alignContent='center' justifyContent='center'>
          <Box>
            <Link to="/DetailsDestination" style={styles.textDeco}>
              <img
                src={require("../../Image/C1.png")}
                alt=""
                width="323.31px "
                height="295.64px"
              />
            </Link>
            <Box position="absolute" ml="33.39 px" mt="226.24 px">
              <Heading
                fontWeight="800"
                fontSize="20"
                lineHeight="24 px"
                color="white"
              >
                Nosy-Be Tours
              </Heading>
              <Text
                fontWeight="500"
                fontSize="20"
                lineHeight="24 px"
                color="white"
              >
                2 Jours
              </Text>
            </Box>
          </Box>
          <Box>
            <img
              src={require("../../Image/C2.png")}
              alt=""
              width="323.31px "
              height="295.64px"
            />
            <Box position="absolute" ml="33.39 px" mt="226.24 px">
              <Heading
                fontWeight="800"
                fontSize="20"
                lineHeight="24 px"
                color="white"
              >
                Mahajanga Tours
              </Heading>
              <Text
                fontWeight="500"
                fontSize="20"
                lineHeight="24 px"
                color="white"
              >
                3 Jours
              </Text>
            </Box>
          </Box>
          <Box>
            <img
              src={require("../../Image/C3.png")}
              alt=""
              width="323.31px "
              height="295.64px"
            />
            <Box position="absolute" ml="33.39 px" mt="226.24 px">
              <Heading
                fontWeight="800"
                fontSize="20"
                lineHeight="24 px"
                color="white"
              >
                Toamasina Tours
              </Heading>
              <Text
                fontWeight="500"
                fontSize="20"
                lineHeight="24 px"
                color="white"
              >
                6 Jours
              </Text>
            </Box>
          </Box>
          <Box>
            <img
              src={require("../../Image/C4.png")}
              alt=""
              width="323.31px "
              height="295.64px"
            />
            <Box position="absolute" ml="33.39 px" mt="226.24 px">
              <Heading
                fontWeight="800"
                fontSize="20"
                lineHeight="24 px"
                color="white"
              >
                Toliara Tours
              </Heading>
              <Text
                fontWeight="500"
                fontSize="20"
                lineHeight="24 px"
                color="white"
              >
                5 Jours
              </Text>
            </Box>
          </Box>
          <Box>
            <img
              src={require("../../Image/C5.png")}
              alt=""
              width="323.31px "
              height="295.64px"
            />
            <Box position="absolute" ml="33.39 px" mt="226.24 px">
              <Heading
                fontWeight="800"
                fontSize="20"
                lineHeight="24 px"
                color="white"
              >
                Antsiranana Tours
              </Heading>
              <Text
                fontWeight="500"
                fontSize="20"
                lineHeight="24 px"
                color="white"
              >
                4 Jours
              </Text>
            </Box>
          </Box>
          <Box>
            <img
              src={require("../../Image/C6.png")}
              alt=""
              width="323.31px "
              height="295.64px"
            />
            <Box position="absolute" ml="33.39 px" mt="226.24 px">
              <Heading
                fontWeight="800"
                fontSize="20"
                lineHeight="24 px"
                color="white"
              >
                Antananarivo Tours
              </Heading>
              <Text
                fontWeight="500"
                fontSize="20"
                lineHeight="24 px"
                color="white"
              >
                5 Jours
              </Text>
            </Box>
          </Box>
          <Box>
            <img
              src={require("../../Image/C7.png")}
              alt=""
              width="323.31px "
              height="295.64px"
            />
            <Box position="absolute" ml="33.39 px" mt="226.24 px">
              <Heading
                fontWeight="800"
                fontSize="20"
                lineHeight="24 px"
                color="white"
              >
                Nosy-Be Tours
              </Heading>
              <Text
                fontWeight="500"
                fontSize="20"
                lineHeight="24 px"
                color="white"
              >
                2 Jours
              </Text>
            </Box>
          </Box>
          <Box>
            <img
              src={require("../../Image/C8.png")}
              alt=""
              width="323.31px "
              height="295.64px"
            />
            <Box position="absolute" ml="33.39 px" mt="226.24 px">
              <Heading
                fontWeight="800"
                fontSize="20"
                lineHeight="24 px"
                color="white"
              >
                Toliara Tours
              </Heading>
              <Text
                fontWeight="500"
                fontSize="20"
                lineHeight="24 px"
                color="white"
              >
                5 Jours
              </Text>
            </Box>
          </Box>
          <Box>
            <img
              src={require("../../Image/C9.png")}
              alt=""
              width="323.31px "
              height="295.64px"
            />
            <Box position="absolute" ml="33.39 px" mt="226.24 px">
              <Heading
                fontWeight="800"
                fontSize="20"
                lineHeight="24 px"
                color="white"
              >
                Antananarivo Tours
              </Heading>
              <Text
                fontWeight="500"
                fontSize="20"
                lineHeight="24 px"
                color="white"
              >
                3 Jours
              </Text>
            </Box>
          </Box>
          <Box>
            <img
              src={require("../../Image/C10.png")}
              alt=""
              width="323.31px "
              height="295.64px"
            />
            <Box position="absolute" ml="33.39 px" mt="226.24 px">
              <Heading
                fontWeight="800"
                fontSize="20"
                lineHeight="24 px"
                color="white"
              >
                Nosy-Be Tours
              </Heading>
              <Text
                fontWeight="500"
                fontSize="20"
                lineHeight="24 px"
                color="white"
              >
                2 Jours
              </Text>
            </Box>
          </Box>
          <Box>
            <img
              src={require("../../Image/C11.png")}
              alt=""
              width="323.31px "
              height="295.64px"
            />
            <Box position="absolute" ml="33.39 px" mt="226.24 px">
              <Heading
                fontWeight="800"
                fontSize="20"
                lineHeight="24 px"
                color="white"
              >
                Nosy-Be Tours
              </Heading>
              <Text
                fontWeight="500"
                fontSize="20"
                lineHeight="24 px"
                color="white"
              >
                2 Jours
              </Text>
            </Box>
          </Box>
          <Box>
            <img
              src={require("../../Image/C12.png")}
              alt=""
              width="323.31px "
              height="295.64px"
            />
            <Box position="absolute" ml="33.39 px" mt="226.24 px">
              <Heading
                fontWeight="800"
                fontSize="20"
                lineHeight="24 px"
                color="white"
              >
                Nosy-Be Tours
              </Heading>
              <Text
                fontWeight="500"
                fontSize="20"
                lineHeight="24 px"
                color="white"
              >
                2 Jours
              </Text>
            </Box>
          </Box>
        </Flex>
      </Center>
      <Box>
        <Flex
          direction={{base:"column",md:"row", lg:"row"}}
          justifyContent= {{base:'center',md:'space-between', lg:'space-between'}}
          alignItems='center'
          style={{  
            backgroundImage: "url(" + require("../../Image/FondProposition.png") + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width:'100%',
            height:'auto'
          }}
          gap='20px'
          p='10%'
        >
          <Text fontWeight="700" fontSize={{base:'20',md:'30',lg:'40'}} lineHeight={{base:'30',md:'49',lg:'49'}}  color="white">
            Nos 
            propositions
          </Text>
          <Button
            bg="white"
            width={{base:"200px",md:"250px", lg:"356px"}}
            height={{base:"40px",md:"70px", lg:"70px"}}
            rounded="full"
            _text={{
              color: "#1B4C74",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "18px",
              lineHeight: "22px",
            }}
          >
            <Link to="/Paquets" style={styles.textDeco}>
            Voir tous les circuits
            </Link>
          </Button>
        </Flex>
      </Box>
      <Flex direction={{base:"column",md:"column",lg:"row"}}  p={{base:"40px",md:"60px",lg:"94px"}} w='100%' alignItems='center' gap="53px" >
        <Flex direction="column" w={{base:"100%",md:"100%",lg:"50%"}} >
          <Text
            fontWeight="700"
            fontSize="20"
            lineHeight="24 px"
            color=" rgba(0, 0, 0, 0.5);"
            mb="10 px"
          >
            Majunga Tours
          </Text>
          <Text
            fontWeight="700"
            fontSize="40"
            lineHeight="49 px"
            color="black"
            mb="40 px"
          >
            Les meilleures
            places
          </Text>
          <Flex  >
            <Text
              fontWeight="400"
              fontSize="14"
              lineHeight="17 px"
              color="black"
              textAlign="justify"
            >
              Lorem ipsum dolor sit amet consectetur. Nulla venenatis id
              morbimassa mauris enim id urna nibh. Dui nisl ut ornare nulla nibh
              id.
              <br></br>
              Consectetur mattis nunc adipiscing mauris. Ornare auctor
              consectetur praesent lectus dolor ac. Enim enim senectus est vel
              risus elementumlaoreet sed. Tincidunt habitasse vitae phasellus
              cum vel felis est.
              <br></br>
              Suspendisse blandit sapien lacus vitae mauris sed nisi augue
              malesuada. Quis velit luctus tincidunt scelerisque eu et euismod.
              Ac tincidunt enim facilisi at risus eu tristique lectus.
            </Text>
          </Flex>
          <Flex direction="row" gap="12px" mt="12 px" alignItems="flex-end">
            <Text
              fontWeight="700"
              fontSize="30"
              lineHeight="37 px"
              color="#D3D3D3"
              style={{ textDecoration: "line-through" }}
            >
              500
            </Text>
            <Text
              fontWeight="700"
              fontSize="30"
              lineHeight="37 px"
              color="black"
            >
              300 $ /
            </Text>
            <Text
              fontWeight="400"
              fontSize="18"
              lineHeight="22 px"
              color="black"
            >
              par personne
            </Text>
          </Flex>
          <Button
            w="198px"
            h="41px"
            mt="12 px"
            style={styles.btnReservez}
            borderRadius="4 px"
            pt="16 px"
            pb="16 px"
            px="32 px"
          >
            <Text color="white" style={styles.btnReservezText}>
              Réservez maintenant
            </Text>
          </Button>
        </Flex  >
        <Flex w={{base:"100%",md:"100%",lg:"50%"}}>
          <img
            src={require("../../Image/majungatour1.png")}
            alt=""
            width='100%'
           />
        </Flex>
      </Flex>
    </Box>
  );
}
