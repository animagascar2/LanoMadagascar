import {
  Box,
  Heading,
  Center,
  Text,
  Flex,
  Button,
} from "native-base";
import React, { useEffect, useState } from "react";
import { styles } from "../../styles";
import { Link } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import { motion } from "framer-motion";
import { mapActions, mapGetters } from "../../store/reex";
import Conversion from "../Conversion";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ListeDestinations() {
  const [loadCircuit, setLoadCircuit] = useState(true);
  const [symbMoney , setSymbMoney] = useState('');
  const [CurrencyValue, setCurrencyValue] = useState(0)
  
  useEffect(() => {
    setTimeout(() => {
      setLoadCircuit(false);
      getListPrincipal()
    }, 3000);
  }, []);
  const MoneyCurrent = mapGetters('circuit/MoneyCurrent');
  const getListPrincipal = mapActions('circuit/getListPrincipal');
  const ListeCircuitsPrincipal = mapGetters('circuit/ListeCircuitsPrincipal');
  const getConvertCurrency = mapActions('circuit/getConvertCurrency');

  useEffect(() => {
    setSymbMoney(MoneyCurrent.symb);
    getConvertCurrency(MoneyCurrent.money)
    .then((response) => {
      const m = Object.values(response)
      setCurrencyValue(m[1])
  })
}, [MoneyCurrent]);

 

  return (
    <Box>
      <div data-aos="slide-up">
        <Flex
          direction={{
            base: "column",
            lg: "row",
          }}
          gap={{
            lg: "350 px",
          }}
        > 
          <Conversion/>
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
      </div>

      <div data-aos="slide-up">
        <Center mx="80.62" my="68 px">
          {loadCircuit ? (
            <Box p="8" mb="1000px">
              <PulseLoader color="#36d7b7" />
            </Box>
          ) : (
            <Flex
              direction="row"
              flexWrap="wrap"
              gap="20 px"
              alignContent="center"
              justifyContent="center"
            >
              {ListeCircuitsPrincipal.map((itm, id) =>
               <motion.div
                animate={{ scale: 1 }}
                initial={{ scale: 0 }}
                whileHover={{ scale: 1.2, zIndex: 300 }}
                key={id}
              >
                  <Link to={`/${itm.nom}`} style={styles.textDeco}>
                  <motion.div
                animate={{ scale: 1 }}
                initial={{ scale: 0 }}
                transition={{ ease: "easeOut" }}
                whileHover={{ scale: 1.2, zIndex: 300 }}
              >
                <Box >
                  <img
                    src={"http://localhost/LANO/ImagesUpload/"+itm.imageP}
                    alt=""
                    width="323.31px "
                    style={{borderRadius:'20px'}}
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
              </motion.div>
                  </Link>
              </motion.div>
              )}
            </Flex>
          )}
        </Center>
      </div>

      <div data-aos="slide-up">
        <Flex
          direction={{ base: "column", md: "row", lg: "row" }}
          justifyContent={{
            base: "center",
            md: "space-between",
            lg: "space-between",
          }}
          alignItems="center"
          style={{
            backgroundImage:
              "url(" + require("../../Image/FondProposition.png") + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "auto",
          }}
          gap="20px"
          p="10%"
        >
          <Text
            fontWeight="700"
            fontSize={{ base: "20", md: "30", lg: "40" }}
            lineHeight={{ base: "30", md: "49", lg: "49" }}
            color="white"
          >
            Nos propositions
          </Text>
          <Button
            bg="white"
            width={{ base: "200px", md: "250px", lg: "356px" }}
            height={{ base: "40px", md: "70px", lg: "70px" }}
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
      </div>

      <Flex
        direction={{ base: "column", md: "column", lg: "row" }}
        p={{ base: "40px", md: "60px", lg: "6%" }}
        alignItems="center"
        gap="53px"
      >
        <Flex direction="column" w={{ base: "100%", md: "100%", lg: "50%" }}>
          <div data-aos="slide-up">
            <Text
              fontWeight="700"
              fontSize="20"
              lineHeight="24 px"
              color=" rgba(0, 0, 0, 0.5);"
              mb="10 px"
            >
              Majunga Tours
            </Text>
          </div>
          <div data-aos="fade-up">
            <Text
              fontWeight="700"
              fontSize="40"
              lineHeight="49 px"
              color="black"
              mb="40 px"
            >
              Les meilleures places
            </Text>
          </div>
          <div data-aos="fade-up">
            <Flex>
              <Text
                fontWeight="400"
                fontSize="14"
                lineHeight="17 px"
                color="black"
                textAlign="justify"
              >
                Lorem ipsum dolor sit amet consectetur. Nulla venenatis id
                morbimassa mauris enim id urna nibh. Dui nisl ut ornare nulla
                nibh id.
                <br></br>
                Consectetur mattis nunc adipiscing mauris. Ornare auctor
                consectetur praesent lectus dolor ac. Enim enim senectus est vel
                risus elementumlaoreet sed. Tincidunt habitasse vitae phasellus
                cum vel felis est.
                <br></br>
                Suspendisse blandit sapien lacus vitae mauris sed nisi augue
                malesuada. Quis velit luctus tincidunt scelerisque eu et
                euismod. Ac tincidunt enim facilisi at risus eu tristique
                lectus.
              </Text>
            </Flex>
          {/* </div>
          <div data-aos="fade-right"> */}
            <Flex direction="row" gap="12px" mt="12 px" alignItems="flex-end">
              <Text
                fontWeight="700"
                fontSize="30"
                lineHeight="37 px"
                color="#D3D3D3"
                style={{ textDecoration: "line-through" }}
              >
                {((500) * CurrencyValue).toFixed(2) +" "+symbMoney}
              </Text>
              <Text
                fontWeight="700"
                fontSize="30"
                lineHeight="37 px"
                color="black"
              >
                {((300) * CurrencyValue).toFixed(2) +" "+symbMoney}/
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
          </div>
        </Flex>

        <Flex w={{ base: "100%", md: "100%", lg: "50%" }}>
          <div data-aos="fade-left">
            <img
              src={require("../../Image/majungatour1.png")}
              alt=""
              width="100%"
            />
          </div>
        </Flex>
      </Flex>
    </Box>
  );
}
