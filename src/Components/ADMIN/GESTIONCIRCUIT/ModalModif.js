import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import {Input,Box} from 'native-base'

import { Button, Form, Upload,DatePicker } from "antd";
import { mapActions,mapGetters } from "../../../store/reex";
import moment from 'moment'

export default function ModalModif(props) {
  const [hideModal,setHideModal] = useState(false);
  const [form] = Form.useForm();
  const [show, setShow] = useState(false);
  const dateFormat = 'YYYY/MM/DD';
  const Swal = require('sweetalert2');
  const getList = mapActions('circuit/getList');
  
  const postModifCircuit = mapActions('circuit/postModifCircuit');
  const onFinishModification = (inputs) => {
    postModifCircuit(inputs)
    .then((result) =>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 2000
      })
       getList();
       setHideModal(true)
    })
    props.onHide()
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
   return e.fileList[0];
  };

  return (
    <Box width='100%'>{
      (props.itm)?<Modal
      show={props.show}
      itm={props.itm}
      style={{maxwidth: "none !important"}}
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Modification
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form
        name="userForm"
        form={form}
        colon={false}
        requiredMark="optional"
        labelAlign="left"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        onFinish={onFinishModification}
      >
      <Form.Item
          label="Id"
          style={{ display: 'none' }}
          name="idCircuitModif"
          rules={[
            {
              required: true,
              message: "Veuillez remplir le champs",
            },
          ]}
          initialValue={props.itm.idCircuit}
          
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Nom"
          name="nomModif"
          rules={[
            {
              required: true,
              message: "Veuillez remplir le champs",
            },
          ]}
          initialValue={props.itm.nom}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Prix Enfant"
          name="prixEnfantModif"
          rules={[
            {
              required: true,
              message: "Veuillez remplir le champs",
            },
          ]}
          initialValue={props.itm.prixEnfant} 
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Prix Adulte"
          name="prixAdulteModif"
          rules={[
            {
              required: true,
              message: "Veuillez remplir le champs",
            },
            // {
            //   pattern: /^[a-zA-Z0-9]+$/,
            //   message: "Name can only include letters and numbers.",
            // },
          ]}
          initialValue={props.itm.prixAdulte}
        >
          <Input  />
        </Form.Item>
        <Form.Item
          label="Durée"
          name="dureeCircuitModif"
          rules={[
            {
              required: true,
              message: "Veuillez remplir le champs",
            },
          ]}
          initialValue={props.itm.dureeCircuit}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Date Début"
          name="dateDebutModif"
          rules={[
            {
              required: true,
              message: "Veuillez entrer une date valid",
            },
          ]}
          initialValue={moment(props.itm.dateDebut)}
        > 
          <DatePicker getPopupContainer={(triggerNode) => {
          return triggerNode.parentNode;
        }} format={dateFormat} />
        </Form.Item>
        <Form.Item
          label="Date Fin"
          name="dateFinModif"
          rules={[
            {
              required: true,
              message: "Veuillez entrer une date valid",
            },
          ]}
          initialValue={moment(props.itm.dateFin)}
        >
          <DatePicker getPopupContainer={(triggerNode) => {
          return triggerNode.parentNode;
        }} format={dateFormat} />
        </Form.Item>
        
        <Form.Item
          label="Geolocalisations"
          name="geolocalisationsModif"
          rules={[
            {
              required: true,
              message: "Veuillez remplir le champs",
            },
          ]}
          initialValue={props.itm.geolocalisations}
        >
          <Input />
        </Form.Item>
        <Form.Item
        label="Lien Youtube"
        name="lienYoutubeModif"
        rules={[
          {
            required: true,
            message: "Veuillez remplir le champs",
          },
        ]}
        initialValue={props.itm.lienYoutube}
      >
        <Input />
      </Form.Item>
      <div className="d-flex flex-direction-row">
        <Form.Item name="imagePrincipalModif" getValueFromEvent={getFile} initialValue={props.itm.imageP}
        >
          
            <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture"
            maxCount={1}
            onChange={handleUpload}
            beforeUpload={(file)=>{
              return false
            }}
            
          > 
            <img
              src = {"http://localhost/LANO/ImagesUpload/"+props.itm.imageP}
              alt=""
              width="100px "
              height="100px"
            />
          </Upload>
        </Form.Item>
        <Form.Item name="image1Modif" getValueFromEvent={getFile} initialValue={props.itm.image1}>
          
            <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture"
            maxCount={1}
            onChange={handleUpload}
            beforeUpload={(file)=>{
              return false
            }}
          > 
            <img
              src = {"http://localhost/LANO/ImagesUpload/"+props.itm.image1}
              alt=""
              width="100px "
              height="100px"
            />
          </Upload>
        </Form.Item>
        <Form.Item name="image2Modif" getValueFromEvent={getFile} initialValue={props.itm.image2}>
          
            <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture"
            maxCount={1}
            onChange={handleUpload}
            beforeUpload={(file)=>{
              return false
            }}
          > 
            <img
              src = {"http://localhost/LANO/ImagesUpload/"+props.itm.image2}
              alt=""
              width="100px "
              height="100px"
            />
          </Upload>
        </Form.Item>
        <Form.Item name="image3Modif" getValueFromEvent={getFile} initialValue={props.itm.image3}>
          
            <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture"
            maxCount={1}
            onChange={handleUpload}
            beforeUpload={(file)=>{
              return false
            }}
          > 
            <img
              src = {"http://localhost/LANO/ImagesUpload/"+props.itm.image3}
              alt=""
              width="100px "
              height="100px"
            />
          </Upload>
        </Form.Item>
        </div>
        <Form.Item
          label="Historique"
          name="historiqueModif"
          rules={[
            {
              required: true,
              message: "Veuillez remplir le champs",
            },
          ]}
          initialValue={props.itm.historique}
        >
          <textarea className="form-control"/>
        </Form.Item>
        <Form.Item
          label="Description"
          name="descriptionModif"
          rules={[
            {
              required: true,
              message: "Veuillez remplir le champs",
            },
          ]}
          initialValue={props.itm.descriptionC}
        >
          <textarea className="form-control" />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 4,
            span: 16,
          }}
        >
          <Button className="bg-primary px-4" htmlType="submit">Modifier</Button>
        </Form.Item>
        <Button onClick={props.onHide}>Close</Button>
      </Form>
      </Modal.Body>
    </Modal>
      :<></>
    }
    
    </Box>
  );
}

