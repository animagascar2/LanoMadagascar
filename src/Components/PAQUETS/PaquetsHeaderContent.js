import React from "react";
import { useState, useEffect } from "react";
import { Box, Slider, Flex, Text, Input, Center } from "native-base";
import { DatePicker } from "antd";
import moment from "moment";
import dayjs from "dayjs";
import { mapActions, mapGetters } from "../../store/reex";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ListePaquets from "./ListePaquets";

export default function PaquetsHeaderContent() {
  const [onChangeslide, setOnChangeslide] = useState(0);
  const [circuitName, setCircuitName] = useState("");
  const getList = mapActions("circuit/getList");
  const ListeCircuits = mapGetters("circuit/ListeCircuits");
  const [valueDate, setValueDate] = useState(null);
  const [valueDateTest, setValueDateTest] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  var r1 = []

  useEffect(() => {
    setData([])
    ListeCircuits.map((item, id) => {
      if (item.nom == circuitName && valueDateTest == "" &&  onChangeslide == 0  ){
        setData([item])
      }
       if (item.nom == circuitName && item.dateDebut == valueDateTest && onChangeslide == 0  ){
        setData([item])
      }
       if (item.nom == circuitName && item.prixAdulte ==  onChangeslide && valueDateTest == ""  ){
        setData([item])
      }
       if (item.nom == circuitName && item.dateDebut == valueDateTest && item.prixAdulte == onChangeslide ){
        setData([item])
      }
    });
  }, [circuitName]);

  useEffect(() => {
    setData([])
    ListeCircuits.map((item, id) => {
      if (item.dateDebut == valueDateTest && circuitName == "" && onChangeslide == 0){
        r1.push(item)
        setData([...r1])
      }
      if (item.dateDebut == valueDateTest && item.nom == circuitName && onChangeslide == 0  ){
        setData([item])
      }
       if (item.dateDebut == valueDateTest && item.prixAdulte ==  onChangeslide && circuitName == ""){
        r1.push(item)
        setData([...r1])
      }
      if (item.nom == circuitName && item.dateDebut == valueDateTest && item.prixAdulte == onChangeslide ){
        setData([item])
      }
    });
  }, [valueDateTest]);

  useEffect(() => {
    setData([])
    ListeCircuits.map((item, id) => {
      if ( item.prixAdulte ==  onChangeslide && circuitName == "" && valueDateTest == "" ){
        r1.push(item)
        setData([...r1])
      }
      if (item.prixAdulte ==  onChangeslide && item.nom == circuitName && valueDateTest == ""){
        setData([item])
      }
      if (item.prixAdulte == onChangeslide && item.dateDebut == valueDateTest && circuitName == "" ){
        r1.push(item)
        setData([...r1])
      }
      if ( item.prixAdulte == onChangeslide && item.nom == circuitName && item.dateDebut == valueDateTest){
        setData([item])
      }
    });
  }, [onChangeslide]);

  return (
    <>
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
      <div className="item" data-aos="fade-down">
        <Box
          p={{ base: "4%", lg: "10%" }}
          pt={{ base: "25%", lg: "20%" }}
          style={{
            backgroundImage:
              "url(" + require("../../Image/imageback.png") + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "auto",
          }}
        >
          <Text fontWeight="700" fontSize="20" lineHeight="24 px" color="white">
            Nos circuits
          </Text>
          <Text
            fontWeight="700"
            fontSize={{ base: "20", md: "30", lg: "30" }}
            my="2"
            lineHeight="37 px"
            color="white"
          >
            Recherchez vos destination
          </Text>

          <Flex
            direction={{ base: "column", md: "row", lg: "row" }}
            p={{ base: "4%", md: "5%", lg: "4%" }}
            bg="white"
            rounded="md"
            flexWrap="wrap"
            justifyContent="space-between"
            gap={{ base: "50px", md: "50px" }}
            alignContent="center"
          >
            <Flex direction="column" gap="50px">
              <Text fontWeight="700" fontSize="18" lineHeight="22 px">
                Sélectionnez votre destination :
              </Text>
              <Autocomplete
                id="combo-box-demo"
                options={ListeCircuits.map((option) => option.nom)}
                onChange={(event, value) => setCircuitName(value)}
                sx={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField {...params} label="Tous les destinations" />
                )}
              />
            </Flex>
            <Flex direction="column" gap="50px">
              <Text fontWeight="700" fontSize="18" lineHeight="22 px">
                Sélectionnez votre date :
              </Text>
              {/* <DatePicker
                defaultValue={moment(new Date(), "DD MMM, YYYY")}
                defaultPickerValue={moment(new Date(), "DD MMM, YYYY")}
                format={"DD MMM, YYYY"}
                allowClear={false}
                suffixIcon
                style={{
                  height: "46px",
                  width: "43vh",
                  borderRadius: "25px",
                  cursor: "pointer",
                  fontSize: "17px",
                  margin: "0px",
                  padding: "4px",
                  background: "#F7EEEE",
                }}
              /> */}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  label="Date debut"
                  value={valueDate}
                  inputFormat="MM/DD/YYYY"
                  onChange={(newValue) => {
                    setValueDate(newValue);
                    let formattedDate = newValue.format("YYYY-MM-DD");
                    setValueDateTest(formattedDate);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Flex>
            <Flex direction="column" gap="50px">
              <Text fontWeight="700" fontSize="18" lineHeight="22 px">
                Prix :
                <Text color="#D3D3D3" ml="41px">
                  {onChangeslide} $
                </Text>
              </Text>
              <Box w="100%">
                <Slider
                  w="xs"
                  maxW="300"
                  defaultValue={0}
                  minValue={0}
                  maxValue={1500}
                  colorScheme="darkBlue"
                  accessibilityLabel="hello world"
                  step={10}
                  onChange={(v) => {
                    setOnChangeslide(Math.floor(v));
                  }}
                >
                  <Slider.Track>
                    <Slider.FilledTrack />
                  </Slider.Track>
                  <Slider.Thumb />
                </Slider>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </div>
      

      <> {(data.length>0)?<ListePaquets data={data} />:<ListePaquets data={ListeCircuits} />} 
      </>
    </>
  );
}
