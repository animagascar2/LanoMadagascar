import React from "react";
import { useEffect, useState } from "react";
import { Box, Flex, Text, Input, Button, Heading,Center,Image,AspectRatio } from "native-base";
import { Rate } from "antd";
import { styles } from "../../styles";
import { ColorRing } from 'react-loader-spinner'
import { motion } from "framer-motion";
import { mapActions, mapGetters } from '../../store/reex';
import {
  useParams,
} from "react-router-dom";
import Conversion from "../Conversion";
import ReactPlayer from 'react-player'

export default function ContentDetails(props) {
  const getList = mapActions("circuit/getList");
  const ListeCircuits = mapGetters("circuit/ListeCircuits");
  const getConvertCurrency = mapActions('circuit/getConvertCurrency');
  const [loadCircuit, setLoadCircuit] = useState(true);
  const [circuit,setCircuit] = useState({})
  const { id }= useParams();
  const MoneyCurrent = mapGetters('circuit/MoneyCurrent');
  const [symbMoney , setSymbMoney] = useState('');
  const [CurrencyValue, setCurrencyValue] = useState(0);

  useEffect(() => {
    getList()
    .then((response) => {
      response.map((itm, id) =>{
        if(itm.idCircuit = id){
          setCircuit(itm)
        }
    })
    })
    setTimeout(() => {
      setLoadCircuit(false);
    }, 2000);
    
    console.log(circuit)
  }, []);

  useEffect(() => {
    setSymbMoney(MoneyCurrent.symb);
    getConvertCurrency(MoneyCurrent.money)
    .then((response) => {
      const m = Object.values(response)
      setCurrencyValue(m[1])
  })
}, [MoneyCurrent]);
  return (
    <Flex p="8" mt="80px">
      <Flex
        direction={{ base: "column-reverse", lg: "row" }}
        justifyContent="space-between"
        flexWrap="wrap"
      >
       <Box>

          <Heading
            color="#1B4C74"
            fontWeight="900"
            fontSize={{ base: "40", md: "60", lg: "60" }}
            lineHeight="61px"
            fontStyle="normal"
          >
            {circuit.nom} Tours
          </Heading>
          <Heading
            color="#717171"
            fontWeight="700"
            fontSize="30"
            lineHeight="37px"
            fontStyle="normal"
          >
            {((circuit.prixAdulte) * CurrencyValue).toFixed(2) + " " + symbMoney}
          </Heading>
        </Box>
        <Box>
          <Conversion/>
        </Box>
      </Flex>
      <Flex
        my="2"
        direction="row"
        flexWrap="wrap"
        justifyContent="space-between"
        gap="20px"
      >
        <div class="item" data-aos="fade-right">
        <Box w={{ base: "100%", md: "100%", lg: "100%" }} >
          
        {/* <div style={{ width: 700, height: '700' }}> */}
        <ReactPlayer url='https://www.youtube.com/watch?v=qIpaX7L4y0Y' playing="true" />
    {/* </div> */}
          
        </Box>
        </div>
        {loadCircuit ? (
          <Center mr="300px">
            <div class="item" data-aos="zoom-in">
              <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
              />
            </div>
          </Center>
        ) : (
          <Flex
            w={{ base: "100%", md: "48%", lg: "48%" }}
            direction="column"
            justifyContent="space-between"
            gap ='20px'
          >
            <Flex
              direction="row"
              justifyContent={{ base: "center", lg: "space-between" }}
              flexWrap="wrap"
            >
              <motion.div
                animate={{ scale: 1 }}
                initial={{ scale: 0 }}
                transition={{ ease: "easeOut", duration: 2 }}
                whileHover={{ scale: 1.2, zIndex: 300 }}
              >
              <AspectRatio ratio={{
              base: 3/ 4,
              md: 9 / 10,
              lg: 6/4
            }} height={{
              base: 150,
              md: 400,
              lg:200
            }}>
                <Image resizeMode="cover" borderRadius={20}  source={{
                uri: 'http://localhost/LANO/ImagesUpload/'+circuit.imageP
              }} alt="Picture of a Flower" />
              </AspectRatio>
              </motion.div>
              <motion.div
                animate={{ scale: 1 }}
                initial={{ scale: 0 }}
                transition={{ ease: "easeOut", duration: 2 }}
                whileHover={{ scale: 1.2, zIndex: 300 }}
              >
                <AspectRatio ratio={{
              base: 3/ 4,
              md: 9 / 10,
              lg: 6/4
            }} height={{
              base: 150,
              md: 400,
              lg:200
            }}>
                <Image resizeMode="cover" borderRadius={20}  source={{
                uri: 'http://localhost/LANO/ImagesUpload/'+circuit.image1
              }} alt="Picture of a Flower" />
              </AspectRatio>
              </motion.div>
            </Flex>
            <Flex
              direction="row"
              justifyContent={{ base: "center", lg: "space-between" }}
              gap="20px"
              flexWrap="wrap"
            >
              <motion.div
                animate={{ scale: 1 }}
                initial={{ scale: 0 }}
                transition={{ ease: "easeOut", duration: 2 }}
                whileHover={{ scale: 1.2, zIndex: 300 }}
              >
                <AspectRatio ratio={{
              base: 3/ 4,
              md: 9 / 10,
              lg: 6/4
            }} height={{
              base: 150,
              md: 400,
              lg:200
            }}>
                <Image resizeMode="cover" borderRadius={20}  source={{
                uri: 'http://localhost/LANO/ImagesUpload/'+circuit.image2
              }} alt="Picture of a Flower" />
              </AspectRatio>
              </motion.div>
              <motion.div
                animate={{ scale: 1 }}
                initial={{ scale: 0 }}
                transition={{ ease: "easeOut", duration: 2 }}
                whileHover={{ scale: 1.2, zIndex: 300 }}
              >
                <AspectRatio ratio={{
              base: 3/ 4,
              md: 9 / 10,
              lg: 6/4
            }} height={{
              base: 150,
              md: 400,
              lg:200
            }}>
                <Image resizeMode="cover" borderRadius={20}  source={{
                uri: 'http://localhost/LANO/ImagesUpload/'+circuit.image3
              }} alt="Picture of a Flower" />
              </AspectRatio>
              </motion.div>
            </Flex>
          </Flex>
        )}
      </Flex>

      <Box w={{ base: "100%", md: "50%", lg: "100%" }}>
        <div class="item" data-aos="zoom-in">
          <Flex
            direction="row"
            my="4"
            mt={{ base: "0", md: "-650px", lg: "0" }}
          >
            <Rate disabled allowHalf="true" value={4.5} />
            <Text
              color="black"
              fontFamily="Mada"
              fontWeight="600"
              fontSize="24 px"
              lineHeight="31 px"
              fontStyle="normal"
            >
              4,5 Avis
            </Text>
          </Flex>
        </div>
        <div class="item" data-aos="zoom-in">
          <Flex direction="row" justifyContent="space-between">
            <Box w={{ base: "100%", md: "100%", lg: "50%" }}>
              <Text
                color="black"
                fontWeight="700"
                fontSize="18 px"
                lineHeight="22 px"
                fontStyle="normal"
                mb="10px"
              >
                Description
              </Text>
              <Text
                color="black"
                fontWeight="400"
                fontSize="14 px"
                lineHeight="17 px"
                fontStyle="normal"
                mb="20px"
              >
                {circuit.descriptionC}
              </Text>
              <Text
                color="black"
                fontWeight="400"
                fontSize="14 px"
                lineHeight="17 px"
                fontStyle="normal"
              >
                Ornare auctor consectetur praesent lectus dolor ac. Enim enim
                senectus est vel risus elementum laoreet sed. Tincidunt
                habitasse vitae phasellus cum vel felis est.
              </Text>
            </Box>
            <Flex
              position="fixed"
              mr="32.39 px"
              bottom={10}
              right={0}
              zIndex={10}
              alignItems="flex-end"
            >
              <img
                src={require("../../Image/LogoWhatsapp.png")}
                alt=""
                width="40px"
                height="40px"
              />
            </Flex>
          </Flex>
        </div>
        <div class="item" data-aos="zoom-in">
          <Flex
            direction="row"
            my="10"
            flexWrap="wrap"
            justifyContent="space-between"
            gap="50px"
            style={styles.navbarStyle}
          >
            <Box w={{ base: "100%", md: "100%", lg: "48%" }}>
              <img src={require("../../Image/MapEntete.png")} alt="" />
              <iframe
                width="100%"
                height="auto"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                id="gmap_canvas"
                src="https://maps.google.com/maps?width=1012&amp;height=643&amp;hl=en&amp;q=Manamoisoa%20Ambodirano+(Morarano)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </Box>
            <Box w={{ base: "100%", md: "100%", lg: "48%" }}>
              <Text
                color="black"
                fontWeight="700"
                fontSize="18 px"
                lineHeight="22 px"
                fontStyle="normal"
                mb="10px"
              >
                Amazing Tour
              </Text>
              <Text
                color="black"
                fontWeight="400"
                fontSize="14 px"
                lineHeight="17.07 px"
                fontStyle="normal"
                mb="20px"
              >
                {circuit.historique}
              </Text>
              {/* <Text
                color="black"
                fontWeight="400"
                fontSize="14 px"
                lineHeight="17.07 px"
                fontStyle="normal"
                mb="20px"
              >
                Lorem ipsum dolor sit amet consectetur. Nulla venenatis id morbi
                massa mauris enim id urna nibh. Dui nisl ut ornare nulla nibh
                id. Consectetur mattis nunc adipiscing mauris.
              </Text>
              <Text
                color="black"
                fontWeight="400"
                fontSize="14 px"
                lineHeight="17.07 px"
                fontStyle="normal"
              >
                Ornare auctor consectetur praesent lectus dolor ac. Enim enim
                senectus est vel risus elementum laoreet sed. Tincidunt
                habitasse vitae phasellus cum vel felis est.
              </Text> */}
            </Box>
          </Flex>
        </div>
      </Box>
    </Flex>
  );
}
