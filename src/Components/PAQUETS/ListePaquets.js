import React,{ useEffect, useState } from "react";
import {
  Box,
  Divider,
  Heading,
  Flex,
  Text,
  Button,
} from "native-base";
import { styles } from "../../styles";
import { mapActions, mapGetters } from '../../store/reex';
import Conversion from "../Conversion";

export default function ListePaquets() {
  const getList = mapActions('circuit/getList');
  const ListeCircuits = mapGetters('circuit/ListeCircuits');
  const MoneyCurrent = mapGetters('circuit/MoneyCurrent');
  const getConvertCurrency = mapActions('circuit/getConvertCurrency');
  const [symbMoney , setSymbMoney] = useState('');
  const [CurrencyValue, setCurrencyValue] = useState(0)


  useEffect(() => {
    getList()
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
    
    <Flex p='6%'>
      <Conversion />

      <Box mb="70 px">
        <Box>
          <Flex
            direction="row"
            flexWrap='wrap'
            justifyContent="space-between"
            gap="30px"
          >
            {ListeCircuits.map((itm, idx) => {
              return <div data-aos="slide-up" key={idx}>
              <Box
              style={{
                width: 400,
                border:'1px',
                padding:"0px",
              }}
              
            >
              <Box zIndex={0}> <img alt="" src={"http://localhost/LANO/ImagesUpload/"+itm.imageP} /></Box>
              <Box mt="-50px" bg='white' p="4" borderWidth="1"
              borderColor="#786a6a6b" borderBottomRightRadius='lg' borderBottomLeftRadius='lg'>
                  
                <Flex direction="row" justifyContent='space-between' zIndex={30} >
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
                      <img
                        alt=""
                        src={require("../../Image/iconLocalisation.png")}
                      />
                      <Heading
                        fontWeight="800"
                        fontSize="18"
                        lineHeight="22 px"
                        color="#1B4C74"
                      >
                        {itm.nom}
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
                      {((itm.prixAdulte) * CurrencyValue).toFixed(2) +" "+symbMoney}
                    </Text>
                  </Box>
                </Flex>
                <Divider  mt="26 px" mb="20 px" />
                <Text
                  color="black"
                  fontWeight="500"
                  fontSize="12"
                  lineHeight="28"
                  textAlign="justify"
                  mx="2"
                >
                  {itm.descriptionC}
                </Text>
                <Button
                w="112px"
                h="49px"
                mt="12 px"
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
              </Box>
              
            </Box>
            </div>
            })}
            
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}
