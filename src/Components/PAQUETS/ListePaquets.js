import React from "react";
import { Box, Divider, Heading, Flex, Text, Center, Button, Input  } from "native-base";
import { Avatar, Card } from "antd";
import { styles } from "../../styles";

export default function ListePaquets() {
  return (
    <Box mx="110 px">
        <Flex direction="row" alignItems='center' mt='44px' mb='60 px' gap='14px'>
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
        <Box mb="70 px" >
        <Flex direction="row" flexWrap="wrap" gap="40 px">
            <Card
                style={{
                width: 404,
                borderRadius: "20px",
                borderColor:'#786a6a6b'
                }}
                bordered='false'
                cover={<img alt="" src={require("../../Image/P1.png")} />}
            >
                <Center>
                <Flex direction="row" gap="149 px" alignItems="center">
                    <Box>
                    <Heading
                        fontWeight="800"
                        fontSize="18"
                        lineHeight="22 px"
                        color="#1B4C74"
                    >
                        Madagascar
                    </Heading>
                    <Flex direction="row" gap="10 px" mt="10 px">
                        <img alt="" src={require("../../Image/iconLocalisation.png")} />
                        <Heading
                        fontWeight="800"
                        fontSize="18"
                        lineHeight="22 px"
                        color="#1B4C74"
                        >
                        Nosy Be Tours
                        </Heading>
                    </Flex>
                    </Box>
                    <Box>
                    <Text
                        color="#D3D3D3"
                        fontWeight="800"
                        fontSize="18"
                        lineHeight="22 px"
                    >
                        500 $
                    </Text>
                    </Box>
                </Flex>
                <Divider mx="45 px" mt='26 px' mb='20 px' />
                <Text
                        color="black"
                        fontWeight="500"
                        fontSize="12"
                        lineHeight="28"
                        textAlign='justify'
                        mx='2'
                    >
                        Lorem ipsum dolor sit amet consectetur. Nulla venenatis id morbi massa mauris enim id urna nibh. Dui nisl ut ornare nulla nibh id.
                    </Text>
                    
                </Center>
                <Button
                    w="112px" 
                    h='49px'
                    mt = '12 px'
                    style={styles.btnReservez}
                    borderRadius="4 px"
                    pt="16 px"
                    pb="16 px"
                    px="32 px"
                >
                    <Text color="white" style={styles.btnReservezText}>
                    Détails
                    </Text>
                </Button>
            </Card>
            <Card
                style={{
                width: 404,
                borderRadius: "20px",
                borderColor:'#786a6a6b'
                }}
                bordered='false'
                cover={<img alt="" src={require("../../Image/P2.png")} />}
            >
                <Center>
                <Flex direction="row" gap="149 px" alignItems="center">
                    <Box>
                    <Heading
                        fontWeight="800"
                        fontSize="18"
                        lineHeight="22 px"
                        color="#1B4C74"
                    >
                        Madagascar
                    </Heading>
                    <Flex direction="row" gap="10 px" mt="10 px">
                        <img alt="" src={require("../../Image/iconLocalisation.png")} />
                        <Heading
                        fontWeight="800"
                        fontSize="18"
                        lineHeight="22 px"
                        color="#1B4C74"
                        >
                        Antananarivo Tours
                        </Heading>
                    </Flex>
                    </Box>
                    <Box>
                    <Text
                        color="#D3D3D3"
                        fontWeight="800"
                        fontSize="18"
                        lineHeight="22 px"
                    >
                        500 $
                    </Text>
                    </Box>
                </Flex>
                <Divider mx="45 px" mt='26 px' mb='20 px' />
                <Text
                        color="black"
                        fontWeight="500"
                        fontSize="12"
                        lineHeight="28"
                        textAlign='justify'
                        mx='2'
                    >
                        Lorem ipsum dolor sit amet consectetur. Nulla venenatis id morbi massa mauris enim id urna nibh. Dui nisl ut ornare nulla nibh id.
                    </Text>
                    
                </Center>
                <Button
                    w="112px" 
                    h='49px'
                    mt = '12 px'
                    style={styles.btnReservez}
                    borderRadius="4 px"
                    pt="16 px"
                    pb="16 px"
                    px="32 px"
                >
                    <Text color="white" style={styles.btnReservezText}>
                    Détails
                    </Text>
                </Button>
            </Card>
            <Card
                style={{
                width: 404,
                borderRadius: "20px",
                borderColor:'#786a6a6b'
                }}
                bordered='false'
                cover={<img alt="" src={require("../../Image/P3.png")} />}
            >
                <Center>
                <Flex direction="row" gap="149 px" alignItems="center">
                    <Box>
                    <Heading
                        fontWeight="800"
                        fontSize="18"
                        lineHeight="22 px"
                        color="#1B4C74"
                    >
                        Madagascar
                    </Heading>
                    <Flex direction="row" gap="10 px" mt="10 px">
                        <img alt="" src={require("../../Image/iconLocalisation.png")} />
                        <Heading
                        fontWeight="800"
                        fontSize="18"
                        lineHeight="22 px"
                        color="#1B4C74"
                        >
                        Antsiranana Tours
                        </Heading>
                    </Flex>
                    </Box>
                    <Box>
                    <Text
                        color="#D3D3D3"
                        fontWeight="800"
                        fontSize="18"
                        lineHeight="22 px"
                    >
                        500 $
                    </Text>
                    </Box>
                </Flex>
                <Divider mx="45 px" mt='26 px' mb='20 px' />
                <Text
                        color="black"
                        fontWeight="500"
                        fontSize="12"
                        lineHeight="28"
                        textAlign='justify'
                        mx='2'
                    >
                        Lorem ipsum dolor sit amet consectetur. Nulla venenatis id morbi massa mauris enim id urna nibh. Dui nisl ut ornare nulla nibh id.
                    </Text>
                    
                </Center>
                <Button
                    w="112px" 
                    h='49px'
                    mt = '12 px'
                    style={styles.btnReservez}
                    borderRadius="4 px"
                    pt="16 px"
                    pb="16 px"
                    px="32 px"
                >
                    <Text color="white" style={styles.btnReservezText}>
                    Détails
                    </Text>
                </Button>
            </Card>
            <Card
                style={{
                width: 404,
                borderRadius: "20px",
                borderColor:'#786a6a6b'
                }}
                bordered='false'
                cover={<img alt="" src={require("../../Image/P4.png")} />}
            >
                <Center>
                <Flex direction="row" gap="149 px" alignItems="center">
                    <Box>
                    <Heading
                        fontWeight="800"
                        fontSize="18"
                        lineHeight="22 px"
                        color="#1B4C74"
                    >
                        Madagascar
                    </Heading>
                    <Flex direction="row" gap="10 px" mt="10 px">
                        <img alt="" src={require("../../Image/iconLocalisation.png")} />
                        <Heading
                        fontWeight="800"
                        fontSize="18"
                        lineHeight="22 px"
                        color="#1B4C74"
                        >
                        Nosy Be Tours
                        </Heading>
                    </Flex>
                    </Box>
                    <Box>
                    <Text
                        color="#D3D3D3"
                        fontWeight="800"
                        fontSize="18"
                        lineHeight="22 px"
                    >
                        500 $
                    </Text>
                    </Box>
                </Flex>
                <Divider mx="45 px" mt='26 px' mb='20 px' />
                <Text
                        color="black"
                        fontWeight="500"
                        fontSize="12"
                        lineHeight="28"
                        textAlign='justify'
                        mx='2'
                    >
                        Lorem ipsum dolor sit amet consectetur. Nulla venenatis id morbi massa mauris enim id urna nibh. Dui nisl ut ornare nulla nibh id.
                    </Text>
                    
                </Center>
                <Button
                    w="112px" 
                    h='49px'
                    mt = '12 px'
                    style={styles.btnReservez}
                    borderRadius="4 px"
                    pt="16 px"
                    pb="16 px"
                    px="32 px"
                >
                    <Text color="white" style={styles.btnReservezText}>
                    Détails
                    </Text>
                </Button>
            </Card>
            <Card
                style={{
                width: 404,
                borderRadius: "20px",
                borderColor:'#786a6a6b'
                }}
                bordered='false'
                cover={<img alt="" src={require("../../Image/P5.png")} />}
            >
                <Center>
                <Flex direction="row" gap="149 px" alignItems="center">
                    <Box>
                    <Heading
                        fontWeight="800"
                        fontSize="18"
                        lineHeight="22 px"
                        color="#1B4C74"
                    >
                        Madagascar
                    </Heading>
                    <Flex direction="row" gap="10 px" mt="10 px">
                        <img alt="" src={require("../../Image/iconLocalisation.png")} />
                        <Heading
                        fontWeight="800"
                        fontSize="18"
                        lineHeight="22 px"
                        color="#1B4C74"
                        >
                        Nosy Be Tours
                        </Heading>
                    </Flex>
                    </Box>
                    <Box>
                    <Text
                        color="#D3D3D3"
                        fontWeight="800"
                        fontSize="18"
                        lineHeight="22 px"
                    >
                        500 $
                    </Text>
                    </Box>
                </Flex>
                <Divider mx="45 px" mt='26 px' mb='20 px' />
                <Text
                        color="black"
                        fontWeight="500"
                        fontSize="12"
                        lineHeight="28"
                        textAlign='justify'
                        mx='2'
                    >
                        Lorem ipsum dolor sit amet consectetur. Nulla venenatis id morbi massa mauris enim id urna nibh. Dui nisl ut ornare nulla nibh id.
                    </Text>
                    
                </Center>
                <Button
                    w="112px" 
                    h='49px'
                    mt = '12 px'
                    style={styles.btnReservez}
                    borderRadius="4 px"
                    pt="16 px"
                    pb="16 px"
                    px="32 px"
                >
                    <Text color="white" style={styles.btnReservezText}>
                    Détails
                    </Text>
                </Button>
            </Card>
            <Card
                style={{
                width: 404,
                borderRadius: "20px",
                borderColor:'#786a6a6b'
                }}
                bordered='false'
                cover={<img alt="" src={require("../../Image/P6.png")} />}
            >
                <Center>
                <Flex direction="row" gap="149 px" alignItems="center">
                    <Box>
                    <Heading
                        fontWeight="800"
                        fontSize="18"
                        lineHeight="22 px"
                        color="#1B4C74"
                    >
                        Madagascar
                    </Heading>
                    <Flex direction="row" gap="10 px" mt="10 px">
                        <img alt="" src={require("../../Image/iconLocalisation.png")} />
                        <Heading
                        fontWeight="800"
                        fontSize="18"
                        lineHeight="22 px"
                        color="#1B4C74"
                        >
                        Nosy Be Tours
                        </Heading>
                    </Flex>
                    </Box>
                    <Box>
                    <Text
                        color="#D3D3D3"
                        fontWeight="800"
                        fontSize="18"
                        lineHeight="22 px"
                    >
                        500 $
                    </Text>
                    </Box>
                </Flex>
                <Divider mx="45 px" mt='26 px' mb='20 px' />
                <Text
                        color="black"
                        fontWeight="500"
                        fontSize="12"
                        lineHeight="28"
                        textAlign='justify'
                        mx='2'
                    >
                        Lorem ipsum dolor sit amet consectetur. Nulla venenatis id morbi massa mauris enim id urna nibh. Dui nisl ut ornare nulla nibh id.
                    </Text>
                    
                </Center>
                <Button
                    w="112px" 
                    h='49px'
                    mt = '12 px'
                    style={styles.btnReservez}
                    borderRadius="4 px"
                    pt="16 px"
                    pb="16 px"
                    px="32 px"
                >
                    <Text color="white" style={styles.btnReservezText}>
                    Détails
                    </Text>
                </Button>
            </Card>
            <Card
                style={{
                width: 404,
                borderRadius: "20px",
                borderColor:'#786a6a6b'
                }}
                bordered='false'
                cover={<img alt="" src={require("../../Image/P7.png")} />}
            >
                <Center>
                <Flex direction="row" gap="149 px" alignItems="center">
                    <Box>
                    <Heading
                        fontWeight="800"
                        fontSize="18"
                        lineHeight="22 px"
                        color="#1B4C74"
                    >
                        Madagascar
                    </Heading>
                    <Flex direction="row" gap="10 px" mt="10 px">
                        <img alt="" src={require("../../Image/iconLocalisation.png")} />
                        <Heading
                        fontWeight="800"
                        fontSize="18"
                        lineHeight="22 px"
                        color="#1B4C74"
                        >
                        Nosy Be Tours
                        </Heading>
                    </Flex>
                    </Box>
                    <Box>
                    <Text
                        color="#D3D3D3"
                        fontWeight="800"
                        fontSize="18"
                        lineHeight="22 px"
                    >
                        500 $
                    </Text>
                    </Box>
                </Flex>
                <Divider mx="45 px" mt='26 px' mb='20 px' />
                <Text
                        color="black"
                        fontWeight="500"
                        fontSize="12"
                        lineHeight="28"
                        textAlign='justify'
                        mx='2'
                    >
                        Lorem ipsum dolor sit amet consectetur. Nulla venenatis id morbi massa mauris enim id urna nibh. Dui nisl ut ornare nulla nibh id.
                    </Text>
                    
                </Center>
                <Button
                    w="112px" 
                    h='49px'
                    mt = '12 px'
                    style={styles.btnReservez}
                    borderRadius="4 px"
                    pt="16 px"
                    pb="16 px"
                    px="32 px"
                >
                    <Text color="white" style={styles.btnReservezText}>
                    Détails
                    </Text>
                </Button>
            </Card>
            <Card
                style={{
                width: 404,
                borderRadius: "20px",
                borderColor:'#786a6a6b'
                }}
                bordered='false'
                cover={<img alt="" src={require("../../Image/P8.png")} />}
            >
                <Center>
                <Flex direction="row" gap="149 px" alignItems="center">
                    <Box>
                    <Heading
                        fontWeight="800"
                        fontSize="18"
                        lineHeight="22 px"
                        color="#1B4C74"
                    >
                        Madagascar
                    </Heading>
                    <Flex direction="row" gap="10 px" mt="10 px">
                        <img alt="" src={require("../../Image/iconLocalisation.png")} />
                        <Heading
                        fontWeight="800"
                        fontSize="18"
                        lineHeight="22 px"
                        color="#1B4C74"
                        >
                        Nosy Be Tours
                        </Heading>
                    </Flex>
                    </Box>
                    <Box>
                    <Text
                        color="#D3D3D3"
                        fontWeight="800"
                        fontSize="18"
                        lineHeight="22 px"
                    >
                        500 $
                    </Text>
                    </Box>
                </Flex>
                <Divider mx="45 px" mt='26 px' mb='20 px' />
                <Text
                        color="black"
                        fontWeight="500"
                        fontSize="12"
                        lineHeight="28"
                        textAlign='justify'
                        mx='2'
                    >
                        Lorem ipsum dolor sit amet consectetur. Nulla venenatis id morbi massa mauris enim id urna nibh. Dui nisl ut ornare nulla nibh id.
                    </Text>
                    
                </Center>
                <Button
                    w="112px" 
                    h='49px'
                    mt = '12 px'
                    style={styles.btnReservez}
                    borderRadius="4 px"
                    pt="16 px"
                    pb="16 px"
                    px="32 px"
                >
                    <Text color="white" style={styles.btnReservezText}>
                    Détails
                    </Text>
                </Button>
            </Card>
            
        </Flex>
    </Box>
    </Box>
    
  );
}
