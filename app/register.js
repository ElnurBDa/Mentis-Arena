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
        <MySimpleLink text="Back to Home..." link="/"/>
      </Container>
    </Center>
  );
};

export default Register;