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


const CapGame = () => {
  return (
    <Box bg="transparent" rounded="md" w="100%" p="5" m="auto" borderWidth={1} borderColor="white">
      <Text color="white" pb="4">
          Wait till Everyone joined
      </Text>
      <Button size="lg" variant="outline" colorScheme="emerald" rounded="md" onPress={() => router.push("/capGame/question")}>
          Start
      </Button>
    </Box>
  );
};

export default CapGame;