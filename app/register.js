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
  Input
} from "native-base";


const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");

  const doRegistration = function () {
    const usernameValue = username;
    const passwordValue = password;
    const surnameValue = surname;
    const emailValue = email;
    console.log(usernameValue, passwordValue, surnameValue, emailValue)

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
        Register
        </Heading>
        <Stack space={4} w="100%">
          <MyInput placeholder="Name" onChangeText={value => setUsername(value)}/>
          <MyInput placeholder="Surname" onChangeText={value => setSurname(value)}/>
          <MyInput placeholder="Password" onChangeText={value => setPassword(value)}/>
          <MyInput placeholder="Email" onChangeText={value => setEmail(value)}/>
          <MyButton text="Submit" onPress={() => doRegistration()} />
        </Stack>
        <MySimpleLink text="Back to Home..." link="/"/>
      </Container>
    </Center>
  );
};

export default Register;