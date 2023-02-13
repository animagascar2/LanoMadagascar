// import React , {useRef,ChangeEvent,useState}from "react";
import { Box, Flex, Heading } from "native-base";
import { UploadOutlined } from "@ant-design/icons";

import { Button, Form, Input, Upload } from "antd";
import { TextArea } from "native-base";
import { mapActions, mapGetters } from "../../../store/reex";

function GestionCircuit() {
  const [form] = Form.useForm();
  const postCircuit = mapActions("circuit/postCircuit");

  const onFinish = (inputs) => {
    // console.log("Received values of form: ", inputs);
    postCircuit(inputs);
  };
  const getFile = (e) => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <Flex p="4" w="70%">
      <Heading pb="4">Ajout Circuit</Heading>
      <Form
        name="userForm"
        form={form}
        colon={false}
        requiredMark="optional"
        labelAlign="left"
        labelCol={{
          span: 4,
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
          <Input />
        </Form.Item>
        <Form.Item
          label="Historique"
          name="historique"
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
          <TextArea />
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
              message: "Name can only include letters and numbers.",
            },
          ]}
        >
          <TextArea placeholder="" />
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
              message: "Veuillez remplir le champs",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Date Fin"
          name="dateFin"
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
          label="VideoName"
          name="videoName"
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
        {/* <Form.Item
        label="Images"
        name="images"
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
      </Form.Item> */}
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
        <Form.Item name="image" getValueFromEvent={getFile}>
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture"
            maxCount={4}
            multiple
            onDownload={(file) => {
              console.log({ file });
              return true;
            }}
          >
            <Button icon={<UploadOutlined />}>Upload image (Max:4)</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 4,
            span: 16,
          }}
        >
          <Button htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </Flex>
  );
}

export default GestionCircuit;
