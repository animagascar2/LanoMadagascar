import React from 'react'
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
    Box,
    Divider,
    Heading,
    Flex,
    Text,
    Center,
    Button,
    Input,
  } from "native-base";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};


export default function Conversion() {
    const [isOpen, setIsOpen] = useState(false);

    return (
       <Box>
         <Flex
        direction="row"
        alignItems="center"
        gap="14px"
        pb='4%'
      >
        <Text
          color="black"
          fontWeight="700"
          fontSize="18"
          lineHeight="22px"
          fontStyle="normal"
        >
          Conversion
        </Text>
        <Input
          w="114px"
          h="29px"
          shadow={3}
          placeholderTextColor="#1B4C74"
          fontSize="14 px"
          fontWeight="700"
          lineHeight="17px"
          InputRightElement={
            <Box mr="2">
              <img src={require("../Image/SelectIconBlack.png")} alt="" />
            </Box>
          }
          placeholder="USD $"
        />
        {/* <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="menu"
      >
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          Menu
          <motion.div
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 }
            }}
            transition={{ duration: 0.2 }}
            style={{ originY: 0.55 }}
          >
            <svg width="15" height="15" viewBox="0 0 20 20">
              <path d="M0 7 L 20 7 L 10 16" />
            </svg>
          </motion.div>
        </motion.button>
        <motion.ul
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05
              }
            },
            closed: {
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3
              }
            }
          }}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
          <motion.li variants={itemVariants}>Item 1 </motion.li>
          <motion.li variants={itemVariants}>Item 2 </motion.li>
          <motion.li variants={itemVariants}>Item 3 </motion.li>
          <motion.li variants={itemVariants}>Item 4 </motion.li>
          <motion.li variants={itemVariants}>Item 5 </motion.li>
        </motion.ul>
      </motion.nav> */}
      </Flex>
      
       </Box>
    );
}
