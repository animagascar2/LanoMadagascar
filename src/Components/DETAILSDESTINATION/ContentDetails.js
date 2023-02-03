import React from "react";
import { Box, Flex, Text, Input, Button, Heading,Center } from "native-base";
import { Rate } from "antd";
import { styles } from "../../styles";

export default function ContentDetails() {
  return (
    <Flex p='8'>
      <Flex direction={{base:'column-reverse',lg:"row"}} justifyContent='space-between' flexWrap='wrap'>
      <Box>
        <Heading
          color="#1B4C74"
          fontWeight="900"
          fontSize={{base:"40",md:'60', lg:"60"}}
          lineHeight="61px"
          fontStyle="normal"
        >
          Mahajanga Tours
        </Heading>
        <Heading
          color="#717171"
          fontWeight="700"
          fontSize="30"
          lineHeight="37px"
          fontStyle="normal"
        >
          600 $
        </Heading>
      </Box>
      <Flex direction="row"  alignItems='center' justifyContent="center"  gap='14px'>
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
      </Flex>
      <Flex my="2" direction='row' flexWrap='wrap' justifyContent='space-between' gap='20px'>
        <Box w= {{base:'100%',md:'48%',lg:'48%'}} >
          <img src={require("../../Image/MTPhotos1.png")} alt="" />
        </Box>
        <Flex w= {{base:'100%',md:'48%',lg:'48%'}} direction="column" gap='20px' justifyContent="space-between">
          <Flex direction="row" justifyContent={{base:'center',lg:"space-between"}} gap='20px' flexWrap='wrap' >
            <img src={require("../../Image/MTPhotos2.png")} alt="" />
            <img src={require("../../Image/MTPhotos3.png")} alt="" />
          </Flex>
          <Flex direction="row" justifyContent={{base:'center',lg:"space-between"}}  gap='20px' flexWrap='wrap' >
            <img src={require("../../Image/MTPhotos4.png")} alt="" />
            <img src={require("../../Image/MTPhotos5.png")} alt="" />
          </Flex>
        </Flex>
      </Flex>
      <Box w= {{base:'100%',md:'50%',lg:'100%'}}>
      <Flex direction="row"  my='4' mt={{base:'0',md:'-650px',lg:'0'}}>
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
      <Flex direction="row" justifyContent="space-between" >
        <Box w={{base:'100%',md:'100%',lg:'50%'}}>
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
            Lorem ipsum dolor sit amet consectetur. Nulla venenatis id morbi
            massa mauris enim id urna nibh. Dui nisl ut ornare nulla nibh id.
            Consectetur mattis nunc adipiscing mauris.
          </Text>
          <Text
            color="black"
            fontWeight="400"
            fontSize="14 px"
            lineHeight="17 px"
            fontStyle="normal"
          >
            Ornare auctor consectetur praesent lectus dolor ac. Enim enim
            senectus est vel risus elementum laoreet sed. Tincidunt habitasse
            vitae phasellus cum vel felis est.
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
      <Flex direction="row" my='10' flexWrap='wrap' justifyContent='space-between' gap='50px' style={styles.navbarStyle}>
        <Box w= {{base:'100%',md:'100%',lg:'48%'}}>
          <img
          src={require("../../Image/MapEntete.png")}
          alt=""
        />
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
        <Box w= {{base:'100%',md:'100%',lg:'48%'}}>
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
            Lorem ipsum dolor sit amet consectetur. Nulla venenatis id morbi
            massa mauris enim id urna nibh. Dui nisl ut ornare nulla nibh id.
            Consectetur mattis nunc adipiscing mauris.
          </Text>
          <Text
            color="black"
            fontWeight="400"
            fontSize="14 px"
            lineHeight="17.07 px"
            fontStyle="normal"
            mb="20px"
          >
            Lorem ipsum dolor sit amet consectetur. Nulla venenatis id morbi
            massa mauris enim id urna nibh. Dui nisl ut ornare nulla nibh id.
            Consectetur mattis nunc adipiscing mauris.
          </Text>
          <Text
            color="black"
            fontWeight="400"
            fontSize="14 px"
            lineHeight="17.07 px"
            fontStyle="normal"
          >
            Ornare auctor consectetur praesent lectus dolor ac. Enim enim
            senectus est vel risus elementum laoreet sed. Tincidunt habitasse
            vitae phasellus cum vel felis est.
          </Text>
        </Box>
      </Flex>
      </Box>
    </Flex>
  );
}
