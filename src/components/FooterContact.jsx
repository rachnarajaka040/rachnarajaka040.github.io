import { Container, Divider, Box, Icon, Text, Link } from "@chakra-ui/react";
import React from "react";
import { IoLocation } from "react-icons/io5";
import { MdPhone, MdEmail } from "react-icons/md";
import SocialButtons from "./SocialButtons";
const FooterContact = () => {
  return (
    
    <Container
      transform="rotate(45deg)"
      borderRadius="2em"
       height={["280px", "480px"]}
      maxW={["280px", "480px"]}
      bg="#A75D5D"
      color="white"
      mt="-50px"
      marginBottom={["-50px", "-100px"]}
      p="0px"
      _hover={{ boxShadow: "5px 5px 20px #79d392" }}
    >
      <Container
        transform="rotate(-45deg)"
         height={["280px", "480px"]}
        maxW={["280px", "480px"]}
        py="1em"
      >
        <Text
          fontSize={[".8em", "1.5em"]}
          w={["10em", "10em"]}
          margin="auto"
          textAlign="center"
          fontWeight="bold"
          mt="50px"
        >
          Feel free to connect with me:
        </Text>
        <Container
           height={["280px", "480px"]}
          maxW={["280px", "480px"]}
          display="flex"
        >
          <Box>
            <SocialButtons />
          </Box>
          <Divider
            h={["60px", "100px"]}
            orientation="vertical"
            m="auto"
            my="10px"
            borderColor="brand_secondary"
          />
          <Box
            fontSize={["1em", "1.8em"]}
            display="block"
            margin="auto"
            textAlign="left"
            w="8em"
            marginTop="5px"
            justifyContent="center"
          >
            <Box fontSize=".6em">
              <Icon fontSize="1.2em">
                <IoLocation />
              </Icon>{" "}
              Bhopal,M.P.{" "}
            </Box>
            <Link fontSize=".5em" href="rachnarajak040@gmail.com">
              {" "}
              <Icon fontSize="1.2em">
                <MdEmail />
              </Icon>{" "}
              rachnarajak040@gmail.com{" "}
            </Link>
            <br />
            <Link fontSize=".6em" href="tel:+917222937463">
              <Icon fontSize="1.2em">
                <MdPhone />
              </Icon>{" "}
              +91 7222937463
            </Link>
          </Box>
        </Container>
      </Container>
    </Container>
  );
};

export default FooterContact;
