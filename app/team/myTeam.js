import React from 'react';
import { PlayerRow } from '../components';
import { 
  Text, 
  Heading, 
  ScrollView
} from "native-base";
import {styles} from '../styles/styles';

const sampleTeamName = "Şuşa"
const sampleTeam = [
    {
        photo: require("../assets/avatars/1.png"),
        name: "Elnur Badalov",
        team: "",
        points: 47
    }, {
        photo: require("../assets/avatars/1.png"),
        name: "Player 2",
        team: "",
        points: 40
    },  {
        photo: require("../assets/avatars/1.png"),
        name: "Player 3",
        team: "",
        points: 53
    },  {
        photo: require("../assets/avatars/1.png"),
        name: "Player 4",
        team: "",
        points: 4
    },  {
        photo: require("../assets/avatars/1.png"),
        name: "Player 5",
        team: "",
        points: 30
    },  {
        photo: require("../assets/avatars/1.png"),
        name: "Player 6",
        team: "",
        points: 0
    }, 
]

const MyTeam = () => {
  return (
    <>
    <Heading marginTop={50} m="auto" fontSize="3xl">
        <Text color={styles.pcolor} fontWeight="bold">{sampleTeamName}</Text>
    </Heading>
    <ScrollView>
    {sampleTeam.map((player, index) => <PlayerRow key={index} player={player} />)}
    </ScrollView>
    </>
  );
};

export default MyTeam;