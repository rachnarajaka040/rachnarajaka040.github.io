import {
  Container,
  Divider,
  Box,
  Icon,
  Text,
  Flex,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdPhone, MdEmail } from "react-icons/md";

const SummaryAboutme = () => {
  return (
    <Container
      id="About"
      transform="rotate(45deg)"
      borderRadius="2em"
      height={["280px", "450px"]}
      width={["280px", "450px"]}
      bg="#A75D5D"
      color="white"
      p="0px"
      mt={["2em", "0em", "2em", "0em", "0em"]}
      mr={["1.5em", "5em", "10em", "20em", "25em"]}
      _hover={{ boxShadow: "5px 5px 20px #79d392" }}
    >
      <Container
        transform="rotate(-45deg)"
        height={["280px", "450px"]}
        width={["280px", "450px"]}
        py={[".8em", "3.5em"]}
      >
        <Text fontSize={["1em", "1.5em"]} textAlign="center" fontWeight="bold">
          About Me
        </Text>
        <Divider
          w={["100px", "200px"]}
          m="auto"
          my={["5px", "10px"]}
          borderColor="brand_secondary"
        />

        <Text fontSize={["xs", "md"]} margin="auto" textAlign="center">
          Hello! I'm Rachna Rajak, a passionate Full Stack Web Developer with a
          Bachelor's degree in Computer Science. Utilizing cutting-edge
          technologies to build amazing products and focusing on solving
          problems. With 9 months of hands-on experience as a Frontend
          Developer, I've actively contributed to projects, honing my skills in
          Html, Css, JavaScript, React.js, Next.js, etc. Look forward to
          bringing innovation and expertise to your team or project.
        </Text>
      </Container>
    </Container>
  );
};

export default SummaryAboutme;
