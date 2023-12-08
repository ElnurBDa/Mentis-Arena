import React from 'react';
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
  VStack
} from "native-base";


const Home = () => {
  return (
    <Center marginTop={50}>
      <Container w="100%">
        <Heading color="white" marginTop={100} fontSize="3xl">
          Welcome to
          <Text color="emerald.500"> Mentis Arena</Text>
        </Heading>

        <Center h="200" bg="transparent" rounded="md"  p="5" margin="auto" borderWidth={1} borderColor="white">
          <Text  fontWeight="medium" color="white">
            Oyun panelinizə xoş gəldiniz!
            Biliyinizi parlatmaq və zehninizi sınağa çəkmək üçün mükəmməl bir fürsət!
          </Text>
          <VStack space={4} alignItems="center" w="100%">
            <Button size="lg" variant="outline" colorScheme="emerald" rounded="md" onPress={() => router.push("/login")}>
                Login
            </Button>
            <Button size="lg" variant="outline" colorScheme="emerald" rounded="md" onPress={() => router.push("/register")}>
                Register
            </Button>
            <Button size="lg" variant="outline" colorScheme="emerald" rounded="md" onPress={() => router.push("/connectToGame")}>
                Connect To Game
            </Button>
          </VStack>
        </Center>
      </Container>
    </Center>
  );
};

export default Home;