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
          <Heading color={styles.pcolor} marginTop={100} fontSize="3xl">
            {/*Welcome to {"\n\n"}
             <Text color={styles.scolor} fontSize="5xl"> Mentis Arena</Text> */}
          </Heading>

          <Box marginTop={330} p="5" m="auto" zIndex={2}>
            <Text  fontWeight="medium" color={styles.pcolor} pb="4" fontSize="lg" fontWeight="800">
              Oyun panelinizə xoş gəldiniz!
            </Text>
            <Text  fontWeight="medium" color={styles.pcolor} pb="4">
              Biliyinizi parlatmaq və zehninizi sınağa çəkmək üçün mükəmməl bir fürsət!
            </Text>
            <Stack space={4} margin="auto">
              <MyButton text="Daxil ol" onPress={() => router.push("/login")} />
            </Stack>
          </Box>
          <Image
            source={require('./assets/blur.png')}
            position="absolute"
            bottom={10}
            m="auto"
            zIndex={1}
          />
          <Image
            source={require('./assets/logo.png')}
            position="absolute"
            zIndex={1}
            style={{ width: '100%', height: '45%',  }}
          />
        </Container>
      </Center>
    </ImageBackground>
  );
};

export default Home;