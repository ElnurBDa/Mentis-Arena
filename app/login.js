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
  }

  return (
    <Center marginTop={50}>
      <Container w="100%">
        <Heading color="white" marginTop={100} fontSize="3xl">
        Login
        </Heading>
        <Stack space={4} w="100%">
          <MyInput placeholder="Email" onChangeText={value => setEmail(value)}/>
          <MyInput placeholder="Password" onChangeText={value => setPassword(value)}/>
          <MyButton text="Submit" onPress={() => doLogin()} />
        </Stack>
        <MySimpleLink text="Back to Home..." link="/"/>
      </Container>
    </Center>
  );
};

export default Login;