import React from 'react';
import { 
  Text, 
  Box, 
  Avatar,
  HStack,
  Spacer
} from "native-base";
import {styles} from '../styles/styles';

player = {
  photo: require("../assets/avatars/1.png"),
  name: "Elnur Badalov",
  team: "Şuşa",
  points: 47
}
export const PlayerRow = ({player, chooser=false}) => {
  return (
    <Box bg={chooser?"rgba(167,243,208,0.2)":styles.pbgcolor} marginTop={3}
    rounded="md"  p="5" m="auto" borderWidth={1} borderColor={styles.pcolor} w="90%">
        <HStack space={3} alignItems="center">
          <Avatar size="md" source={player.photo} />
          {player.team?<Text w="20%" color={styles.scolor} fontWeight="bold" fontSize="lg">{player.team}</Text>:null}
          <Text color={styles.pcolor} fontWeight="bold" fontSize="lg">{player.name}</Text>
          <Spacer />
          <Text w="10%" color={styles.scolor} fontWeight="bold" fontSize="lg">{player.points}</Text>
        </HStack>
    </Box>
    )
}
