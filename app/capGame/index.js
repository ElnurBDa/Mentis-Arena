import React from 'react';
import { Link, router } from 'expo-router';
import { 
  Container, 
  Text, 
  Heading, 
  Center, 
  Box, 
  Button, 
  Divider,
  VStack,
  Stack
} from "native-base";
import { MyButton } from "../components/MyButton";


const CapGame = () => {
  return (
    <Box bg="transparent" rounded="md" w="100%" p="5" m="auto" borderWidth={1} borderColor="white">
      <Text color="white" pb="4">
          Wait till Everyone joined
      </Text>
      <MyButton text="Start" onPress={() => router.push("/capGame/question")}/>
    </Box>
  );
};

export default CapGame;