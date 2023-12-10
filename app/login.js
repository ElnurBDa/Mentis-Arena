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
  Flex,
  Avatar,
  Spacer
} from "native-base";
import {styles} from './styles/styles';
import axios from 'axios';

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // smth wrong with this function
  const doLogin = function () {
    router.replace('/profile');
    return;
    const apiUrl = `https://mentis.svdev.me/v1/users/${email}`;
    const requestBody = {
      password: password
    };

    axios.get(apiUrl, requestBody)
      .then(function (response) {
        console.log(response);
        router.replace('/profile');
      })
      .catch(function (error) {
        console.log(error);
        router.replace('/login');
      });
  }

  return (
    <Center marginTop={50}>
      <Container w="100%">
        <Heading color={styles.pcolor} marginTop={100} fontSize="3xl">
        Daxil ol
        </Heading>
        <Stack space={4} w="100%">
          <MyInput placeholder="Email..." onChangeText={value => setEmail(value)}/>
          <MyInput placeholder="Şifrə..." onChangeText={value => setPassword(value)}/>
          <MyButton text="Davam et" onPress={() => doLogin()} />
          <Flex direction="row" align="center">
            <Text color={styles.pcolor}>Hesabınız yoxdur?  </Text>
            <MySimpleLink text="Qeydiyyatdan keç" link="/register"/>
          </Flex>
        </Stack>
      </Container>
      <Spacer />
      <Avatar size="lg" source={require("./assets/logo2.png")} marginTop={300}/>          
    </Center>
  );
};

export default Login;