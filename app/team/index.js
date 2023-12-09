import React from 'react';
import { router } from 'expo-router';
import {
  MySimpleLink,
  MyButton
} from '../components';

import { 
  Container, 
  Heading, 
  Center, 
  Box, 
  Stack,
  Text
} from "native-base";


const Home = () => {
  return (
    <Center marginTop={50}>
      <Container w="100%">
        <Heading color="white" marginTop={100} fontSize="2xl">
          Team Menu
        </Heading>
        <Box marginTop={10} bg="transparent" rounded="md"  p="5" m="auto" borderWidth={1} borderColor="white">
          <Text fontWeight="medium" color="white" pb="4">
            Here you can manage your team, yourself and your team members. and also you can see the leaderboard of your team.
          </Text>
          <Stack space={4} margin="auto">
            <MyButton text="My Team" onPress={() => router.push("/team/myTeam")} />
            <MyButton text="Separation" onPress={() => router.push("/team/teamSeparation")} />
            <MyButton text="Leaderboard" onPress={() => router.push("/team/leaderboard")} />
          </Stack>
        </Box>
        <MySimpleLink link="/" text="Back to Home..."/>
      </Container>
    </Center>
  );
};

export default Home;