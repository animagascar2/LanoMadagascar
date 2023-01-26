import React from "react";
import { Box, Flex, Text, Divider, Heading, Input, Button } from "native-base";
import { styles } from "../styles";

export default function FooterLano(props) {
 
  return (
    <Box zIndex={0}>
      
      <Box bg="black" pl="32 px">
        <Flex
          direction="row"
          justifyContent={"space-between"}
          pt="43 px"
          pr="170 px"
        >
          <Box mt="-18 px">
            <img
              src={require("../Image/logoFooter.png")}
              alt=""
              width="35px"
              height="54px"
            />
            <Text
              color="white"
              style={styles.fn}
              fontWeight="400"
              fontSize="14"
              lineHeight="22px"
              mt="14 px"
              fontStyle="normal"
            >
              High level experience in web design and <br></br>
              development knowledge,producing quality work.
            </Text>
            <Divider my="24 px" w="352px" />
            <Text
              color="white"
              style={styles.fn}
              fontWeight="300"
              fontSize="12"
              mb="24px"
              lineHeight="22px"
              fontStyle="normal"
            >
              © 2021 All Rights Reserved
            </Text>
          </Box>
          <Box>
            <Heading style={styles.titlefootstyle}>Follow us</Heading>
            <Flex mt="14 px" mb="32 px" direction="row" gap="16 px">
              <img
                src={require("../Image/logoFacebook.png")}
                alt=""
                width="24px"
                height="24px"
              />
              <img
                src={require("../Image/logoMail.png")}
                alt=""
                width="24px"
                height="24px"
              />
              <img
                src={require("../Image/logoInsta.png")}
                alt=""
                width="24px"
                height="24px"
              />
              <img
                src={require("../Image/logoFigma.png")}
                alt=""
                width="24px"
                height="24px"
              />
            </Flex>
            <Heading style={styles.titlefootstyle}>Call us</Heading>
            <Text
              color="white"
              style={styles.fn}
              fontWeight="400"
              fontSize="16"
              lineHeight="19px"
              mt="12 px"
              fontStyle="normal"
            >
              +1 800 854-36-80
            </Text>
          </Box>
          <Box gap="16px">
            <Heading style={styles.titlefootstyle} mb="16 px">
              Product
            </Heading>
            <Text
              color="white"
              style={styles.fn}
              fontWeight="400"
              fontSize="14"
              lineHeight="16px"
              fontStyle="normal"
            >
              Landing Page
            </Text>
            <Text
              color="white"
              style={styles.fn}
              fontWeight="400"
              fontSize="14"
              lineHeight="16px"
              fontStyle="normal"
            >
              Web-design
            </Text>
            <Text
              color="white"
              style={styles.fn}
              fontWeight="400"
              fontSize="14"
              lineHeight="16px"
              fontStyle="normal"
            >
              Content
            </Text>
            <Text
              color="white"
              style={styles.fn}
              fontWeight="400"
              fontSize="14"
              lineHeight="16px"
              fontStyle="normal"
            >
              Integrations
            </Text>
          </Box>
          <Box gap="16px">
            <Heading style={styles.titlefootstyle} mb="16 px">
              Uses cases
            </Heading>
            <Text
              color="white"
              style={styles.fn}
              fontWeight="400"
              fontSize="14"
              lineHeight="16px"
              fontStyle="normal"
            >
              Web-designers
            </Text>
            <Text
              color="white"
              style={styles.fn}
              fontWeight="400"
              fontSize="14"
              lineHeight="16px"
              fontStyle="normal"
            >
              Marketers
            </Text>
            <Text
              color="white"
              style={styles.fn}
              fontWeight="400"
              fontSize="14"
              lineHeight="16px"
              fontStyle="normal"
            >
              Small Business
            </Text>
            <Text
              color="white"
              style={styles.fn}
              fontWeight="400"
              fontSize="14"
              lineHeight="16px"
              fontStyle="normal"
            >
              Website Builder
            </Text>
          </Box>
          <Box gap="16px">
            <Heading style={styles.titlefootstyle} mb="16 px">
              Company
            </Heading>
            <Text
              color="white"
              style={styles.fn}
              fontWeight="400"
              fontSize="14"
              lineHeight="16px"
              fontStyle="normal"
            >
              About Us
            </Text>
            <Text
              color="white"
              style={styles.fn}
              fontWeight="400"
              fontSize="14"
              lineHeight="16px"
              fontStyle="normal"
            >
              Careers
            </Text>
            <Text
              color="white"
              style={styles.fn}
              fontWeight="400"
              fontSize="14"
              lineHeight="16px"
              fontStyle="normal"
            >
              FAQs
            </Text>
            <Text
              color="white"
              style={styles.fn}
              fontWeight="400"
              fontSize="14"
              lineHeight="16px"
              fontStyle="normal"
            >
              Teams
            </Text>
            <Text
              color="white"
              style={styles.fn}
              fontWeight="400"
              fontSize="14"
              lineHeight="16px"
              fontStyle="normal"
            >
              Contact Us
            </Text>
          </Box>
        </Flex>
        <Flex mt="25 px" mb="76 px" direction="row" gap="40 px">
          <Text
            color="white"
            style={styles.fn}
            fontWeight="400"
            fontSize="16"
            lineHeight="19px"
            mt="12 px"
            fontStyle="normal"
          >
            Privacy Policy
          </Text>
          <Text
            color="white"
            style={styles.fn}
            fontWeight="400"
            fontSize="16"
            lineHeight="19px"
            mt="12 px"
            fontStyle="normal"
          >
            Sales and Refunds
          </Text>
          <Text
            color="white"
            style={styles.fn}
            fontWeight="400"
            fontSize="16"
            lineHeight="19px"
            mt="12 px"
            fontStyle="normal"
          >
            Legal
          </Text>
          <Text
            color="white"
            style={styles.fn}
            fontWeight="400"
            fontSize="16"
            lineHeight="19px"
            mt="12 px"
            fontStyle="normal"
          >
            Site Map
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}
