import React from 'react';
import { PlayerRow } from '../components';
import { 
    Text, 
    Heading, 
    ScrollView,
} from "native-base";
import {styles} from '../styles/styles';


const players = [
    {
        photo: require("../assets/avatars/1.png"),
        name: "Elnur Badalov",
        team: "Şuşa",
        points: 53
    }, {
        photo: require("../assets/avatars/2.png"),
        name: "Jamila Yusifova",
        team: "Ağdam",
        points: 47
    }, {
        photo: require("../assets/avatars/3.png"),
        name: "Elcan Karimli",
        team: "Laçın",
        points: 22
    }, {
        photo: require("../assets/avatars/4.png"),
        name: "Azim Azizov",
        team: "Qubadlı",
        points: 19
    }, {
        photo: require("../assets/avatars/5.png"),
        name: "Elmir Hajizade",
        team: "Zəngilan",
        points: 17
    }, {
        photo: require("../assets/avatars/6.png"),
        name: "Player 6",
        team: "Zəngilan",
        points: 15
    }, {
        photo: require("../assets/avatars/7.png"),
        name: "Player 7",
        team: "Zəngilan",
        points: 13
    }, {
        photo: require("../assets/avatars/8.png"),
        name: "Player 6",
        team: "Zəngilan",
        points: 15
    }, {
        photo: require("../assets/avatars/9.png"),
        name: "Player 7",
        team: "Zəngilan",
        points: 13
    }, {
        photo: require("../assets/avatars/1.png"),
        name: "Player 6",
        team: "Zəngilan",
        points: 15
    }, {
        photo: require("../assets/avatars/2.png"),
        name: "Player 7",
        team: "Zəngilan",
        points: 13
    }, {
        photo: require("../assets/avatars/3.png"),
        name: "Player 6",
        team: "Zəngilan",
        points: 15
    }, {
        photo: require("../assets/avatars/4.png"),
        name: "Player 7",
        team: "Zəngilan",
        points: 13
    }, {
        photo: require("../assets/avatars/5.png"),
        name: "Player 6",
        team: "Zəngilan",
        points: 3
    }, {
        photo: require("../assets/avatars/6.png"),
        name: "Player 7",
        team: "Zəngilan",
        points: 0
    }, 
]


const MyTeam = () => {
    return (
        <>
        <Heading marginTop={50} m="auto" fontSize="3xl">
            <Text color={styles.pcolor} fontWeight="bold">Leaderboard</Text>
        </Heading>
        <ScrollView>
        {players.map((player, index) => <PlayerRow key={index} player={player} chooser={2==index} />)}
        </ScrollView>
        </>
    );
};

export default MyTeam;