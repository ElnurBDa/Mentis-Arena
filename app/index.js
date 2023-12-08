import React from 'react';
import { Link } from "expo-router";
import { NativeBaseProvider, Box } from "native-base";


const Home = () => {
  return (
    <>
    <NativeBaseProvider>
      <Box>Hello world</Box>
    </NativeBaseProvider>
    </>
  );
};

export default Home;