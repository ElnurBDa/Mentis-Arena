import React from 'react';
import { useState } from 'react';
import { Link, router } from 'expo-router';
import {MySimpleLink} from './components/MySimpleLink.js'
import {MyButton} from './components/MyButton.js'
import {MyInput} from './components/MyInput.js'
import { 
  Container, 
  Text, 
  Heading, 
  Center, 
  Box, 
  Button, 
  Divider,
  VStack,
  Stack,
  Input,
  extractInObject
} from "native-base";

const gameCodeToConnect = 1234

const Login = () => {
  const [gameCode, setGameCode] = useState("");

  const doConnectToGame = function () {
    const gameCodeValue = gameCode;
    console.log(gameCodeValue)
    if (gameCodeToConnect == gameCodeValue){
      console.log("Success!")
      router.push("/capGame")
    }
  }

  return (
    <Center marginTop={50}>
      <Container w="100%">
        <Heading color="white" marginTop={100} fontSize="3xl">
        Connect to Game
        </Heading>
        <Stack space={4} w="100%">
          <MyInput placeholder="Game Code" onChangeText={value => setGameCode(value)}/>
          <MyButton text="Submit" onPress={() => doConnectToGame()} />
        </Stack>
        <MySimpleLink text="Back to Home..." link="/"/>
      </Container>
    </Center>
  );
};

export default Login;