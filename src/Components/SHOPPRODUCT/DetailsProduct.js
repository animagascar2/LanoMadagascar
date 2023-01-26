import React from "react";
import { Box, Flex, Heading, Text, Button } from "native-base";
import { styles } from "../../styles";
import HeadERLano from "../HeadERLano";

export default function DetailsProduct(props) {
  return (
    <Box>
      <HeadERLano active={props.active} />
      <Flex direction="row" mx="89 px" alignItems="center" gap="50px">
        <Box>
          <img alt="" src={require("../../Image/DetailsProduct.png")} />
        </Box>
        <Flex w="625px" mt="102 px">
          <Heading
            fontWeight="700"
            fontSize="48"
            lineHeight="59 px"
            color="#1B4C74"
          >
            Huile essentiel citrons
          </Heading>
          <Heading
            fontWeight="700"
            fontSize="24"
            lineHeight="29 px"
            color="#999999"
            mt="20px"
          >
            Descriptions
          </Heading>
          <Heading
            fontWeight="500"
            fontSize="24"
            lineHeight="29 px"
            color="#FF0000"
          >
            98,00 €
          </Heading>
          <Text
            fontWeight="400"
            fontSize="14"
            lineHeight="22px"
            fontStyle="normal"
            color="black"
            textAlign="justify"
            mt="27px"
          >
            Lorem ipsum dolor sit amet consectetur. Nulla venenatis id morbi
            massa mauris enim id urna nibh. Dui nisl ut ornare nulla nibh id.
            Consectetur mattis nunc adipiscing mauris.
          </Text>
          <Text
            fontWeight="400"
            fontSize="14"
            lineHeight="22px"
            fontStyle="normal"
            color="black"
            textAlign="justify"
            my="27px"
          >
            Ornare auctor consectetur praesent lectus dolor ac. Enim enim
            senectus est vel risus elementum laoreet sed. Tincidunt habitasse
            vitae phasellus cum vel felis est.
          </Text>
          <Text
            fontWeight="400"
            fontSize="14"
            lineHeight="22px"
            fontStyle="normal"
            color="black"
            textAlign="justify"
            mb="41px"
          >
            Lorem ipsum dolor sit amet consectetur. Nulla venenatis id morbi
            massa mauris enim id urna nibh. Dui nisl ut ornare nulla nibh id.
            Consectetur mattis nunc adipiscingmauris.Ornare auctor consectetur
            praesent lectus dolor ac. Enim enim senectus est vel risus elementum
            laoreet sed. Tincidunt habitasse vitae phasellus cum vel felis est.
          </Text>
          <Button
            size="sm"
            w="238px"
            variant="outline"
            bg="#1B4C74"
            borderRadius="4 px"
          >
            <Flex direction="row" gap="10 px">
              <img src={require("../../Image/WhiteIconPanier.png")} alt="" />
              <Text
                color="white"
                fontWeight="600"
                fontSize="14"
                lineHeight="17px"
                fontStyle="normal"
              >
                Acheter maintenant
              </Text>
            </Flex>
          </Button>
        </Flex>
      </Flex>
      <Flex mr="32.39 px" alignItems="flex-end" mb="112 px">
        <img
          src={require("../../Image/LogoWhatsapp.png")}
          alt=""
          width="24px"
          height="24px"
        />
      </Flex>
    </Box>
  );
}
