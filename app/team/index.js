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
import {styles} from '../styles/styles';


const Home = () => {
  return (
    <Center marginTop={50}>
      <Container w="100%">
        <Heading color={styles.pcolor} marginTop={100} fontSize="2xl">
          Team Menu
        </Heading>
        <Box marginTop={10} bg={styles.pbgcolor} rounded="md"  p="5" m="auto" borderWidth={1} borderColor={styles.pcolor}>
          <Text fontWeight="medium" color={styles.pcolor} pb="4">
            Here you can manage your team, yourself and your team members. and also you can see the leaderboard of your team.
          </Text>
          <Stack space={4} margin="auto">
            <MyButton text="My Team" onPress={() => router.push("/team/myTeam")} />
            <MyButton text="Separation" onPress={() => router.push("/team/teamSeparation")} />
            <MyButton text="Leaderboard" onPress={() => router.push("/team/leaderboard")} />
          </Stack>
        </Box>
      </Container>
    </Center>
  );
};

export default Home;