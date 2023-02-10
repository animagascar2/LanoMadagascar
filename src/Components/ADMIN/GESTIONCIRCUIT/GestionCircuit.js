import React , {useRef,ChangeEvent,useState}from "react";
import { Input, Box, Flex, TextArea, Heading } from "native-base";
import { UploadOutlined } from "@ant-design/icons";
import { Upload, Space, Button } from "antd";
import { mapActions, mapGetters } from '../../../store/reex';
import axios from "axios";

export default function GestionCircuit() {
    const inputNom = useRef();
    const inputHistorique = useRef();
    const inputDescription = useRef();
    const inputPrixEnfant = useRef();
    const inputPrixAdulte = useRef();
    const inputDurée = useRef();
    const inputDateDebut = useRef();
    const inputDateFin = useRef();
    const inputImages = useRef();
    const inputGeolocalisations = useRef();
    const [file, setFile] = useState();
    const handleFileChange = (e) => {
        if (e.target.files) {
          console.log(e.target.files[0]);
        }
      };
    function AddCircuit(){

    }
  return (
    <Flex p="4">
      <Heading pb="4">Ajout Circuit</Heading>
      <Flex direction="column" gap="20px" w="30%">
        <Input size="xs" placeholder="Nom" ref={inputNom} />
        <TextArea size="md" placeholder="Historique" ref={inputHistorique} />
        <TextArea size="md" placeholder="Description" ref={inputDescription} />
        <Input size="xs" placeholder="Prix Enfant" ref={inputPrixEnfant} />
        <Input size="xs" placeholder="Prix Adulte" ref={inputPrixAdulte} />
        <Input size="xs" placeholder="Durée" ref={inputDurée}/>
        <Input size="xs" placeholder="Date Début" ref={inputDateDebut} />
        <Input size="xs" placeholder="Date Fin" ref={inputDateFin} />
        <Input size="xs" placeholder="geolocalisations" ref={inputGeolocalisations}/>
        <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture"
            maxCount={1}
            name='file'
          >
            <Button icon={<UploadOutlined />}>Upload video</Button>
          </Upload>
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture"
            maxCount={4}
            multiple
            ref={inputImages}
          >
            <Button icon={<UploadOutlined />}>Upload image (Max:4)</Button>
          </Upload>
          <Button onClick={()=>AddCircuit()} />
      </Flex>
    </Flex>
  );
}
