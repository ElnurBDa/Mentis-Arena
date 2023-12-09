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
  Text,
  Flex
} from "native-base";
import {styles} from './styles/styles';

const credentials = {
  email: "bdaelnur@gmail.com",
  password: "root"
}

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const doLogin = function () {
    fetch(`https://mentis.svdev.me/v1/users/${email}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password: password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.success) {
          console.log("Success!");
          router.replace("/profile");
        } else {
          console.log("Invalid credentials");
        }
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }

  return (
    <Center marginTop={50}>
      <Container w="100%">
        <Heading color={styles.pcolor} marginTop={100} fontSize="3xl">
        Login
        </Heading>
        <Stack space={4} w="100%">
          <MyInput placeholder="Email" onChangeText={value => setEmail(value)}/>
          <MyInput placeholder="Password" onChangeText={value => setPassword(value)}/>
          <MyButton text="Submit" onPress={() => doLogin()} />
          <Flex direction="row" align="center">
            <Text color={styles.pcolor}>No Account?  </Text>
            <MySimpleLink text="Register" link="/register"/>
          </Flex>
        </Stack>
        
      </Container>
    </Center>
  );
};

export default Login;