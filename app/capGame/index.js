import React from 'react';
import { router } from 'expo-router';
import { 
  Text, 
  Box, 
} from "native-base";
import { MyButton } from "../components";


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