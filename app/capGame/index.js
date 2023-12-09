import React from 'react';
import { router } from 'expo-router';
import { 
  Text, 
  Box, 
} from "native-base";
import { MyButton } from "../components";
import {styles} from '../styles/styles';


const CapGame = () => {
  return (
    <Box bg={styles.pbgcolor} rounded="md" w="100%" p="5" m="auto" borderWidth={1} borderColor={styles.pcolor}>
      <Text color={styles.pcolor} pb="4">
          Wait till Everyone joined
      </Text>
      <MyButton text="Start" onPress={() => router.push("/capGame/question")}/>
    </Box>
  );
};

export default CapGame;