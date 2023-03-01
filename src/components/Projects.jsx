import React from "react";
import { Container } from "@chakra-ui/react";
//import Ideakart from "../assets/ideakart1.png";
import Zee5 from "../assets/zee5png1.png";
import datesandnuts from "../assets/datesan2.png";
import IndiaMart from "../assets/ideakart1.png";
import { SiChakraui,SiReact,SiRedux,SiJavascript,SiCss3, SiFirebase } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import MyProjectCard from "./MyProjectCard";


const Projects = () => {
  const projects = [
    {
      id: 1,
      livelink: "https://sastazostel.vercel.app/",
      github: "https://github.com/rachnarajaka040/Zostel.com_clone",
      techStack: [  {id:1,skill:'React',img:<SiReact size='20px' color='skyblue' />},
      {id:2,skill:'Redux',img:<SiRedux size='20px' color='darkblue' />},
      {id:3,skill:'Chakra',img:<SiChakraui size='20px' color='rgb(78,201,196)' />},
      {id:4,skill:'Firebase',img:<SiFirebase size='20px' color='orange' />},
    ],
      description:
        "Zostel is a network of hostels and homes in India. It has presence in 44 cities in India and Nepal.",
      features: [],
      images: datesandnuts,
      gif: "",
      projectTitle: "Zostel Clone",
    },
    {
      id: 2,
      livelink: "https://pharmeasy-pt-web-08b.netlify.app/",
      github: "https://github.com/rachnarajaka040/PharmEasy_clone",
      techStack: [ {id:1,skill:'HTML5',img:<AiFillHtml5 size='20px' color='rgb(233,89,35)' />},
      {id:2,skill:'CSS3',img:<SiCss3 size='20px' color='blue' />},
      {id:3,skill:'JavaScript',img:<SiJavascript size='20px' color='orange' />},],
      description:
        "PharmEasy is an Indian e-pharmacy company that sells medicines, diagnostics and telehealth online.",
      features: [],
      images: Zee5,
      gif: "",
      projectTitle: "PharmEasy Clone",
    },
    {
      id: 3,
      livelink: "https://lovodarachnacom.netlify.app/",
      github: "https://github.com/rajyadav0001/Lovoda-clone",
      techStack: [ {id:1,skill:'HTML5',img:<AiFillHtml5 size='20px' color='rgb(233,89,35)' />},
      {id:2,skill:'CSS3',img:<SiCss3 size='20px' color='blue' />},
      {id:3,skill:'JavaScript',img:<SiJavascript size='20px' color='orange' />},],
      description:
        "Lovoda.com clone is a Jewelry E-commerce Store. it is based on spotify. They offers wide range of jewelry porducts of diffrent categories.",
      features: [],
      images: IndiaMart,
      gif: "",
      projectTitle: "Lovoda.com Clone",
    },
  ];

  return (
    <Container id='Projects' maxW="90%"  margin='auto'padding='0px'  marginTop='50px'>
    <Container maxW="100%" 
      gap='20px' margin='auto' p='0px' marginTop='50px'>
      {projects.map((project) => {
        return <MyProjectCard key={project.id} {...project} />;
      })}
    </Container>
    </Container>
  );
};

export default Projects;
