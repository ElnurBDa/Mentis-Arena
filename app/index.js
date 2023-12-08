import React from 'react';
import { router } from 'expo-router';
import {
  MySimpleLink,
  MyButton
} from './components';

import { 
  Container, 
  Text, 
  Heading, 
  Center, 
  Box, 
  Stack
} from "native-base";


const Home = () => {
  return (
    <Center marginTop={50}>
      <Container w="100%">
        <Heading color="white" marginTop={100} fontSize="2xl">
          Welcome to {"\n\n"}
          <Text color="emerald.500" fontSize="5xl"> Mentis Arena</Text>
        </Heading>

        <Box marginTop={150} bg="transparent" rounded="md"  p="5" m="auto" borderWidth={1} borderColor="white">
          <Text  fontWeight="medium" color="white" pb="4">
            Oyun panelinizə xoş gəldiniz!
            Biliyinizi parlatmaq və zehninizi sınağa çəkmək üçün mükəmməl bir fürsət!
          </Text>
          <Stack space={4} margin="auto">
            <MyButton text="Login" onPress={() => router.push("/login")} />
            <MyButton text="Register" onPress={() => router.push("/register")} />
            <MyButton text="Connect To Game" onPress={() => router.push("/connectToGame")} />
          </Stack>
        </Box>
        <MySimpleLink link="capGame" text="Debug:capGame"/>
      </Container>
    </Center>
  );
};

export default Home;