import React from "react";
import { Button, Form,Input,  Upload,DatePicker } from "antd";
import { mapActions, mapGetters } from "../../../store/reex";


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
  const getFile = (e) => {
  
    if (Array.isArray(e)) {
      return e;
    }
   return e && e.fileList;
  };
  return (
    <div className="">
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
        <Form.Item
          label="Nom"
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
          <Input h="58px" w="xs" shadow={3} />
        </Form.Item>
        <Form.Item
          label="Prix Enfant"
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
          <Input />
        </Form.Item>
        <Form.Item
          label="Prix Adulte"
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
          <Input />
        </Form.Item>
        <Form.Item
          label="Durée"
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
          <Input />
        </Form.Item>
        <Form.Item
          label="Date Début"
          name="dateDebut"
          rules={[
            {
              required: true,
              message: "Veuillez entrer une date valid",
            },
          ]}
        >
          <DatePicker  format={dateFormat} />
        </Form.Item>
        <Form.Item
          label="Date Fin"
          name="dateFin"
          rules={[
            {
              required: true,
              message: "Veuillez entrer une date valid",
            },
          ]}
        >
          <DatePicker  format={dateFormat} />
        </Form.Item>
        
        <Form.Item
          label="Geolocalisations"
          name="geolocalisations"
          rules={[
            {
              required: true,
              message: "Veuillez remplir le champs",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
        label="Lien Youtube"
        name="lienYoutube"
        rules={[
          {
            required: true,
            message: "Veuillez remplir le champs",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="imagePrincipal" getValueFromEvent={getFile}>
          
            <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture"
            maxCount={1}
            beforeUpload={(file)=>{
              return false
            }}
          >
            <Button > Image Principal</Button>
          </Upload>
        </Form.Item>
        <Form.Item name="autreImage" getValueFromEvent={getFile}>
            <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture"
            maxCount={3}
            multiple
            beforeUpload={(file)=>{
              return false
            }}
            
          >
            <Button>Autre Image (3*)</Button>
          </Upload>
        </Form.Item>
        <Form.Item
          label="Historique"
          name="historique"
          rules={[
            {
              required: true,
              message: "Veuillez remplir le champs",
            },
          ]}
        >
          <textarea className="form-control"/>
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Veuillez remplir le champs",
            },
            {
              pattern: /^[a-zA-Z0-9]+$/,
              message: "Description can only include letters and numbers.",
            },
          ]}
        >
          <textarea className="form-control" />
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
    </div>
  );
}

export default FormAdd;