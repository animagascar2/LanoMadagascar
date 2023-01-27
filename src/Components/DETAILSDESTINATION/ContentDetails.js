import React from "react";
import { Box, Flex, Text, Spacer, Heading } from "native-base";
import { Rate } from "antd";

export default function ContentDetails() {
  return (
    <Box mx="80px" mt="44px">
      <Box mb="25px">
        <Heading
          color="#1B4C74"
          fontWeight="900"
          fontSize="60"
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
      <Flex direction="row" gap="30px" w="652.07px">
        <Box>
          <img src={require("../../Image/MTPhotos1.png")} alt="" />
        </Box>
        <Box>
          <Flex direction="row" gap="28px" mb="30px" w="652.07px">
            <img src={require("../../Image/MTPhotos2.png")} alt="" />
            <img src={require("../../Image/MTPhotos3.png")} alt="" />
          </Flex>
          <Flex direction="row" gap="28px" w="652.07px">
            <img src={require("../../Image/MTPhotos4.png")} alt="" />
            <img src={require("../../Image/MTPhotos5.png")} alt="" />
          </Flex>
        </Box>
      </Flex>
      <Flex direction="row" mt="23px">
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

      <Flex direction="row" justifyContent="space-between" mt="19px">
        <Box w="619px">
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
        <Flex mt="29px" mr="-50px">
          <img
            src={require("../../Image/LogoWhatsapp.png")}
            alt=""
            width="24px"
            height="24px"
          />
        </Flex>
      </Flex>
      <Flex direction="row" my="54px" gap="49px">
        <Box>
          {/* <img
          src={require("../../Image/MapEntete.png")}
          alt=""
        />
        <img
          src={require("../../Image/MapDestination.png")}
          alt=""
        /> */}
          <iframe
            width="880px"
            height="297px"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=1012&amp;height=643&amp;hl=en&amp;q=Manamoisoa%20Ambodirano+(Morarano)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </Box>
        <Box w="420px">
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
  );
}
