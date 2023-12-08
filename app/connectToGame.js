import React from 'react';
import { useState } from 'react';
import { Link, router } from 'expo-router';
import {styles} from './styles/styles';
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


const Login = () => {
  const [gameCode, setGameCode] = useState("");

  const doConnectToGame = function () {
    const gameCodeValue = gameCode;
    console.log(gameCodeValue)

    // return await Parse.User.signUp(usernameValue, passwordValue)
    //   .then((createdUser) => {
    //     Alert.alert(
    //       'Success!',
    //       `User ${createdUser.getUsername()} was successfully created!`,
    //     );
    //     return true;
    //   })
    //   .catch((error) => {
    //     Alert.alert('Error!', error.message);
    //     return false;
    //   });
  }

  return (
    <Center marginTop={50}>
      <Container w="100%">
        <Heading color="white" marginTop={100} fontSize="3xl">
        Connect to Game
        </Heading>
          <Stack space={4} w="100%">
            <Input variant="underlined" color="emerald.500" placeholder="Game Code" onChangeText={value => setGameCode(value)}/>
            <Button size="lg" variant="outline" colorScheme="emerald" rounded="md" onPress={() => doConnectToGame()}>
                Submit
            </Button>
          </Stack>
      </Container>
    </Center>
  );
};

export default Login;