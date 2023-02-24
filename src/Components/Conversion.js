import React from 'react'
import { useState } from "react";
import {
  Box,
  Heading,
  Center,
  Text,
  Flex,
  Button,
  Input,
  CheckIcon,
  Select,
} from 'native-base'
import { mapActions, mapGetters } from "../store/reex";


export default function Conversion(props) {
  const setMoneyCurrent = mapActions('circuit/setMoneyCurrent');
  const MoneyCurrent = mapGetters('circuit/MoneyCurrent');
  const changeCurency = (value) => {
    setMoneyCurrent(JSON.parse(value));
  }
    return (
      <Flex
        direction="row"
        ml="12px"
        alignItems="center"
        gap="14px"
      >
        <Text
          color="black"
          fontWeight="700"
          fontSize="18"
          lineHeight="22px"
          fontStyle="normal"
        >
          Devise
        </Text>

        <Select
          shadow={3}
          placeholder="USD $"
          fontSize="14 px"
          fontWeight="700"
          maxWidth="150px"
          lineHeight="17px"
          _selectedItem={{
            bg: "teal.600",
            color: "#1B4C74",
            endIcon: <CheckIcon size={5} />,
          }}
          mt="1"
          onValueChange={(value) => changeCurency(value)}
        >
          <Select.Item label="USD $" value={JSON.stringify({'money':'USD','symb':'$'})} />
          <Select.Item label="EURO €" value={JSON.stringify({'money':'EUR', 'symb':'€'})} />
          <Select.Item label="Yuan  ¥" value={JSON.stringify({'money':'CNY', 'symb':'¥'})}  />
        </Select>
      </Flex>
    );
}
