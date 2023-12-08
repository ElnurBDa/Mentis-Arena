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

const credentials = {
  email: "bdaelnur@gmail.com",
  password: "root"
}

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const doLogin = function () {
    const passwordValue = password;
    const emailValue = email;
    console.log(emailValue, passwordValue)
    if (credentials.email == emailValue && credentials.password == passwordValue){
      console.log("Success!")
      router.replace("/connectToGame")
    }

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
        Login
        </Heading>
          <Stack space={4} w="100%">
            <Input variant="underlined" color="emerald.500" placeholder="Email" onChangeText={value => setEmail(value)}/>
            <Input variant="underlined" color="emerald.500" placeholder="Password" onChangeText={value => setPassword(value)}/>
            <Button size="lg" variant="outline" colorScheme="emerald" rounded="md" onPress={() => doLogin()}>
                Submit
            </Button>
          </Stack>
      </Container>
    </Center>
  );
};

export default Login;