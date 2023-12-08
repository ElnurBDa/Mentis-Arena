import React from 'react';
import { Link, router } from 'expo-router';
import {MySimpleLink} from './components/MySimpleLink.js'
import {MyButton} from './components/MyButton.js'

import { 
  Container, 
  Text, 
  Heading, 
  Center, 
  Box, 
  Button, 
  Divider,
  VStack,
  Stack
} from "native-base";


const Home = () => {
  return (
    <Center marginTop={50}>
      <Container w="100%">
        <Heading color="white" marginTop={100} fontSize="3xl">
          Welcome to
          <Text color="emerald.500"> Mentis Arena</Text>
        </Heading>

        <Box bg="transparent" rounded="md"  p="5" m="auto" borderWidth={1} borderColor="white">
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