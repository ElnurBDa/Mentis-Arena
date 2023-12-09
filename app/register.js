import React from 'react';
import { useState } from 'react';
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
import { router } from 'expo-router';


const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");

  const doRegistration = function () {
    const requestBody = {
      email: email,
      password: password,
      name: username,
      surname: surname
    };

    fetch('https://mentis.svdev.me/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
      .then(response => {
        if (response.ok) {
          console.log('User registration successful');
          router.replace('/login');
        } else {
          console.log('User registration failed');
          router.replace('/register');
        }
      })
      .catch(error => {
        console.error('Error occurred during user registration:', error);
        // Handle error here
      });
  }

  return (
    <Center marginTop={50}>
      <Container w="100%">
        <Heading color={styles.pcolor} marginTop={100} fontSize="3xl">
        Register
        </Heading>
        <Stack space={4} w="100%">
          <MyInput placeholder="Name" onChangeText={value => setUsername(value)}/>
          <MyInput placeholder="Surname" onChangeText={value => setSurname(value)}/>
          <MyInput placeholder="Password" onChangeText={value => setPassword(value)}/>
          <MyInput placeholder="Email" onChangeText={value => setEmail(value)}/>
          <MyButton text="Submit" onPress={() => doRegistration()} />
          <Flex direction="row" align="center">
            <Text color={styles.pcolor}>You have already created an Account?  </Text>
            <MySimpleLink text="Login" link="/login"/>
          </Flex>
        </Stack>
        
      </Container>
    </Center>
  );
};

export default Register;