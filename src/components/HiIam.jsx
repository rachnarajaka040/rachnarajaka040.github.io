import { Container, Divider, Img, Text } from "@chakra-ui/react";
import React from "react";
import Hi from "../hi.png";

const HiIam = () => {
  return (
    <Container
    id='Home'
      transform="rotate(45deg)"
      borderRadius="2em"
      height={["180px","250px",'250px']}
      width={["180px","250px",'250px']}
      bg="#A75D5D"
      color="white"
      p="30px"
      ml={['1em','2em','5em','15em','20em']}
      _hover={{boxShadow:'5px 5px 20px #79d392'}}
    >
      <Container
        transform="rotate(-45deg)"
        height={["180px","250px",'250px']}
        width={["180px","250px",'250px']}
      >
       
        <Text fontSize={['.9em',"1.2em",'']} textAlign="center" fontWeight="semibold">
          Hi, I'm
        </Text>
        <Text fontSize={['1.2em',"1.8em",'']} textAlign="center" fontWeight="bold">
          Rachna Rajak
        </Text>

        <Text fontSize={['xs','lg','']} margin="auto" mt={['10px','20px','']}>
          Full Stack Web Developer
        </Text>
      </Container>
    </Container>
  );
};

export default HiIam;