import { Center, Container, Image } from '@chakra-ui/react';
import React from 'react';

const GitHubStats = () => {
    return (
        <Container maxW={['full','full','60%','full','full']}  gap='10px' m='auto'>
            <Center gap='10px'display={['block','block','block','flex','flex']}>

        <Image src='https://camo.githubusercontent.com/a0026ef520c2129069def0f7ed8a94b50e987e4d74218ddc27834c0ffafbd419/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d726163686e6172616a616b61303430267468656d653d6461726b'/>
        <Image src='https://camo.githubusercontent.com/2757099d8314552cbd88a7f6d6ca96f49f21f56a9b94489a5572cf5fd802202c/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d726163686e6172616a616b613034302673686f775f69636f6e733d74727565266c6f63616c653d656e267468656d653d6461726b'/>
            </Center>
            <Center>

        <Image src='https://github-readme-stats.vercel.app/api/top-langs/?username=fahisayub&layout=compact&border_radius=20'/>
            </Center>
        </Container>
    );
};

export default GitHubStats;