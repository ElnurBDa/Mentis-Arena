import React from 'react';
import { router } from 'expo-router';
import {
  MySimpleLink,
  MyButton
} from './components';
import { Image } from 'react-native';
import { 
  Container, 
  Text, 
  Heading, 
  Center, 
  Box, 
  Stack
} from "native-base";
import {styles} from './styles/styles';
import { ImageBackground } from 'react-native';


const Home = () => {
  return (
    <ImageBackground
      source={require('./assets/homeBackground.png')}
      style={{ flex: 1 }}
    >
      <Center marginTop={50}>
        <Container w="100%">
          <Heading color={styles.pcolor} marginTop={100} fontSize="2xl">
            Welcome to {"\n\n"}
            <Text color={styles.scolor} fontSize="5xl"> Mentis Arena</Text>
          </Heading>

          <Box marginTop={350} p="5" m="auto" zIndex={2}>
            <Text  fontWeight="medium" color={styles.pcolor} pb="4">
              Oyun panelinizə xoş gəldiniz!
              Biliyinizi parlatmaq və zehninizi sınağa çəkmək üçün mükəmməl bir fürsət!
            </Text>
            <Stack space={4} margin="auto">
              <MyButton text="Login" onPress={() => router.push("/login")} />
            </Stack>
          </Box>
          <MySimpleLink link="/capGame" text="Debug:capGame"/>
          <MySimpleLink link="/team" text="Debug:team"/>
          <MySimpleLink link="/profile" text="Debug:profile"/>
          <Image
            source={require('./assets/blur.png')}
            position="absolute"
            bottom={50}
            m="auto"
            zIndex={1}
          />
        </Container>
      </Center>
    </ImageBackground>
  );
};

export default Home;