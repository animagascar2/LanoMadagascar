import React from "react";
import { Button, Form,  Upload,DatePicker } from "antd";
import { mapActions, mapGetters } from "../../../store/reex";
import {Box,Input,Text, TextArea, Flex, Tooltip} from 'native-base'


function FormAdd() {
  const Swal = require('sweetalert2');
  const [form] = Form.useForm();
  const postCircuit = mapActions("circuit/postCircuit");
  const dateFormat = 'YYYY/MM/DD';
  const getList = mapActions('circuit/getList');
  const ListeCircuits = mapGetters('circuit/ListeCircuits')

  
  const onFinish = (inputs) => {
    const isFound = ListeCircuits.some(element => {
      if (element.nom === inputs.nom) {
        return true;
      }
      return false;
    });

    if (isFound) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ce circuit est dejà créer',
      })
      form.resetFields();
    }else{
      postCircuit(inputs)
    .then((response) => {
      if( response === "success"){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 2000
        })
         getList();
         form.resetFields()
      };
    })
    }

    

  };
  const handleUpload = (info) => {
    let fileList = [...info.fileList];
    // Accept 5 files only
    fileList = fileList.slice(-5);
    fileList.forEach(function (file, index) {
      let reader = new FileReader();
      reader.onload = (e) => {
        file.base64= e.target.result;
      };
      reader.readAsDataURL(file.originFileObj);
    });
  };

  const getFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
   return e.fileList;
  };
  const getFileP = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
   return e.fileList[0];
  };
  return (
    <Box px="8">
      <Form
        name="userForm"
        form={form}
        colon={false}
        requiredMark="optional"
        labelAlign="left"
        labelCol={{
          span: 2,
        }}
        wrapperCol={{
          span: 16,
        }}
        onFinish={onFinish}
      >
      <Flex flexDirection={{base:'column',md:'column',lg:'row'}}>
        <Box flexDirection={{base:'column',md:'column',lg:'row'}} width="80%" gap="20px" flexWrap='wrap'>
        {/* <Flex flexDirection={{base:'column',md:'column',lg:'row'}} gap="20px" flexWrap='wrap' alignContent='center'> */}
            <Form.Item
              name="nom"
              rules={[
                {
                  required: true,
                  message: "Veuillez remplir le champs",
                },
                {
                  pattern: /^[a-zA-Z0-9]+$/,
                  message: "Name can only include letters and numbers.",
                },
              ]}
            >
              <Text>Nom </Text>
              <Input h="40px" w="200px" shadow={3} />
            </Form.Item>
            <Form.Item
              name="geolocalisations"
              rules={[
                {
                  required: true,
                  message: "Veuillez remplir le champs",
                },
              ]}
            >
              <Text>Geolocalisations</Text>
              <Input h="40px" w="xs" shadow={3} />
            </Form.Item>
            <Form.Item
              name="lienYoutube"
              rules={[
                {
                  required: true,
                  message: "Veuillez remplir le champs",
                },
              ]}
            >
                <Text>Lien Youtube</Text>
                <Input h="40px" w="xs" shadow={3} />
            </Form.Item>
            <Form.Item
              name="dureeCircuit"
              rules={[
                {
                  required: true,
                  message: "Veuillez remplir le champs",
                },
                {
                  pattern: /^[a-zA-Z0-9]+$/,
                  message: "Name can only include letters and numbers.",
                },
              ]}
            >
              <Text>Durée :</Text>
              <Input h="40px" width="200px" shadow={3} />
            </Form.Item>
            <Form.Item
              name="dateDebut"
              rules={[
                {
                  required: true,
                  message: "Veuillez entrer une date valid",
                },
              ]}
            >
              <Text>Date debut</Text>
              <DatePicker style={{
            height: "40px",
            width: "322px",
            padding:'12px',
            cursor: "pointer",
            fontSize: "17px",
          }}  format={dateFormat} />
            </Form.Item>
            <Box ml='-70px'>
            <Form.Item
              name="dateFin"
              rules={[
                {
                  required: true,
                  message: "Veuillez entrer une date valid",
                },
              ]}
            >
              <Text>Date Fin</Text>
              <DatePicker style={{
            height: "40px",
            width: "322px",
            padding:'12px',
            cursor: "pointer",
          }}  format={dateFormat} />
            </Form.Item>
            </Box>
            <Form.Item
              name="prixEnfant"
              rules={[
                {
                  required: true,
                  message: "Veuillez remplir le champs",
                },
                {
                  pattern: /^[a-zA-Z0-9]+$/,
                  message: "Name can only include letters and numbers.",
                },
              ]}
            >
              <Text>Prix Enfant</Text>
              <Input h="40px" w="200px" shadow={3} />
            </Form.Item>
            <Form.Item
          name="prixAdulte"
          rules={[
            {
              required: true,
              message: "Veuillez remplir le champs",
            },
            {
              pattern: /^[a-zA-Z0-9]+$/,
              message: "Name can only include letters and numbers.",
            },
          ]}
        >
          <Text>Prix Adulte</Text>
          <Input h="40px" w="200px" shadow={3} />
           </Form.Item> 
        </Box>
        <Box alignContent='center' ml='-45px'>
            <Form.Item name="imagePrincipal" getValueFromEvent={getFileP}>
              
              <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture"
              maxCount={1}
              onChange={handleUpload}
              beforeUpload={(file)=>{
                return false
              }}

            >
              <Box > 
              <img
                  src = {require("../../../Image/uploadImage.png")}
                  alt=""
                  width="100px "
                  height="100px"
                />
               
                <Text color="blue.400"
                      fontStyle="normal"
                      fontSize="12 px"
                      lineHeight="22 px"
                      height="22px"
                      fontWeight="800"> Ajouter l'image Principal</Text>
              </Box>
              
            </Upload>
            </Form.Item>
            <Form.Item name="autreImage" getValueFromEvent={getFile}>
                <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture"
                maxCount={3}
                multiple
                onChange={handleUpload}
                beforeUpload={(file)=>{
                  return false
                }}
                
              >
                <Box > 
                <Box flexDirection='row'  > 
                <img
                    src = {require("../../../Image/uploadImage.png")}
                    alt=""
                    width="100px "
                    height="100px"
                  />
                  <img
                    src = {require("../../../Image/uploadImage.png")}
                    alt=""
                    width="100px "
                    height="100px"
                  />
                  <img
                    src = {require("../../../Image/uploadImage.png")}
                    alt=""
                    width="100px "
                    height="100px"
                  />
                  </Box>
                  <Text color="blue.400"
                      fontStyle="normal"
                      fontSize="12 px"
                      lineHeight="22 px"
                      height="22px"
                      fontWeight="800">Ajouter 3 images</Text>
                </Box>
              </Upload>
            </Form.Item>
        </Box>
      </Flex>
       <Form.Item
          name="historique"
          rules={[
            {
              required: true,
              message: "Veuillez remplir le champs",
            },
          ]}
        >
          <Text>Historique</Text>
          <TextArea  shadow='3' className="form-control"/>
        </Form.Item>
        <Form.Item
          name="description"
          rules={[
            {
              required: true,
              message: "Veuillez remplir le champs",
            },
          ]}
        >
          <Text>Description</Text>
          <TextArea shadow='3' className="form-control" />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 4,
            span: 16,
          }}
        >
          <Button className="bg-primary px-4" htmlType="submit">Ajouter</Button>
        </Form.Item>
      </Form>
    </Box>
  );
}

export default FormAdd;