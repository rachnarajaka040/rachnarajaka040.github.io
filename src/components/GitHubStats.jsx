import { Center, Container, Image } from '@chakra-ui/react';
import React from 'react';

const GitHubStats = () => {
    return (
        <Container maxW={['full','full','60%','full','full']}  gap='10px' m='auto' marginTop='20'>
            <Center gap='10px'display={['block','block','block','flex','flex']}>

        <Image src='https://camo.githubusercontent.com/c847100912e35749fbb4035001b49ac443bb0e2fe0ae1a6a6c0dec755b78dd18/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d726163686e6172616a616b61303430267468656d653d6461726b'/>
        <Image src="https://camo.githubusercontent.com/8543481cb6fff20a003152a80da8e649d86417ca00a4ec46489e9472d1a32120/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d726163686e6172616a616b613034302673686f775f69636f6e733d74727565266c6f63616c653d656e267468656d653d6461726b"/>
           
           
            </Center>
            <Center marginTop="5">

        <Image src='https://github-readme-stats.vercel.app/api/top-langs/?username=fahisayub&layout=compact&border_radius=20'/>
            </Center>
        </Container>
    );
};

export default GitHubStats;
