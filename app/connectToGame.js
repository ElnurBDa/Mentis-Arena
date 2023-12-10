import React from 'react';
import { useState } from 'react';
import { router } from 'expo-router';
import {
  MySimpleLink,
  MyButton,
  MyInput
} from './components';
import { 
  Container, 
  Heading, 
  Center, 
  Stack,
} from "native-base";
import {styles} from './styles/styles';

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
        <Heading color={styles.pcolor} marginTop={100} fontSize="3xl">
        Oyuna qoşul
        </Heading>
        <Stack space={4} w="100%">
          <MyInput placeholder="Oyun kodu" onChangeText={value => setGameCode(value)}/>
          <MyButton text="Davam et" onPress={() => doConnectToGame()} />
        </Stack>
        
      </Container>
    </Center>
  );
};

export default Login;