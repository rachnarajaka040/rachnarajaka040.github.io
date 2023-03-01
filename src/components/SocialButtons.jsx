import React from "react";
import { Container, Button } from "@chakra-ui/react";
import { SiGithub, SiLinkedin } from "react-icons/si";

const SocialButtons = () => {
  return (
    <Container
    width={['100px','200px']}
      display="block"
      marginTop="0px"
    >
      <Button
        as="a"
        margin="5px"    

        size={["xs", "sm", "md", "md", "md"]}
        href="https://github.com/rachnarajaka040"
        bg='#D3756B'
        target='_blank'
        color="white"
        _hover={{color:'green.400',bg:'black'}}
      >
        {" "}
        <SiGithub />
        GitHub
      </Button>
      <Button
        as="a"
        margin="5px"    

        size={["xs", "sm", "md", "md", "md"]}
        href="https://www.linkedin.com/in/rachna-rajak-9b3109244/"
        bg='#D3756B'
        target='_blank'
        color="white"
        _hover={{color:'green.400',bg:'black'}}
      >
        {" "}
        <SiLinkedin />
        LinkedIn
      </Button>
    </Container>
  );
};

export default SocialButtons;
