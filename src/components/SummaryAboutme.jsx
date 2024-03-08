
import { Container, Divider, Box,Icon, Text, Flex,Link } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdPhone, MdEmail } from "react-icons/md";

const SummaryAboutme = () => {
  return (
    <Container
    id='About'
      transform="rotate(45deg)"
      borderRadius="2em"
      height={['280px',"450px"]}
      width={['280px',"450px"]}
      bg="#A75D5D"
      color="white"
      p="0px"
      mt={['2em','0em','2em','0em','0em']}
      mr={['1.5em','5em','10em','20em','25em']}
      _hover={{boxShadow:'5px 5px 20px #79d392'}}
    >
      <Container
        transform="rotate(-45deg)"
        height={['280px',"450px"]}
        width={['280px',"450px"]}
        py={['.8em','2.5em']}
      >
        
        <Text fontSize={['1em',"1.5em"]} textAlign="center" fontWeight="bold">
          About Me
        </Text>
        <Divider w={['100px','200px']} m='auto' my={['5px','10px']} borderColor="brand_secondary" />

        <Text fontSize={['xs',"md"]} margin="auto">
        Hello! I'm Rachna Rajak , a passionate Full Stack Web Developer with a Bachelor's degree in Computer Science . Utilizing cutting-edge technologies to build amazing products and focusing on solving problems. With 9 months of hands-on experience as a Frontend Developer, I've actively contributed to projects, honing my skills in Html, Css , JavaScript, React.js , Next.js etc. Look forward to bringing innovation and expertise to your team or project.
        </Text>
        <Box
        fontSize={['md',"25px"]}
        display="block"
        margin="auto"
        textAlign='left'
        w='8em'
        marginTop='10px'
        justifyContent="center"
      >
        <Box fontSize='.5em'>
          <Icon fontSize='1.2em'>
            <IoLocation  />
          </Icon>{" "}
          Bhopal M.P.{" "}
        </Box>
        <Box fontSize='.5em'>
          {" "}
          <Icon fontSize='1.2em'>
            <MdEmail  />
          </Icon>{" "}
          rachnarajak040@gmail.com{" "}
        </Box>
        <Box fontSize='.5em'>
          <Icon  fontSize='1.2em'>
            <MdPhone />
          </Icon>{" "}
          +91 7222937463
        </Box>
      </Box>
        <Flex
        fontSize={['md',"22px"]}
        display="flex"
        margin="auto"
        mt='5px'
        justify='center'
        w='8em'
        >
          <Link href="https://github.com/rachnarajaka040"
        target='_blank'>
        <Flex fontSize='.7em'justifyContent='center'>
          <FaGithub fontSize='1.5em'/>
          Github
        </Flex >
          </Link>
        <Divider orientation='vertical' h={['15px','20px']} mx='10px'borderColor='black' />
          <Link href="https://www.linkedin.com/in/rachna-rajak-9b3109244/" target='_blank'
          >
        <Flex fontSize='.7em' justifyContent='center'    >
          <FaLinkedin fontSize='1.5em' />
          LinkedIn
        </Flex>
          </Link>
        </Flex>
      </Container>
    </Container>
  );
};



export default SummaryAboutme;