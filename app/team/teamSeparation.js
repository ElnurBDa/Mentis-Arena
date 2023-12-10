import React from 'react';
import { PlayerRow } from '../components';
import { useState } from 'react';
import { 
    Text, 
    Heading, 
    ScrollView,
    Divider,
} from "native-base";
import {styles} from '../styles/styles';


const caps = [
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
    }, 
]

const availablePlayers = [
    {
        photo: require("../assets/avatars/9.png"),
        name: "Oyunçu 1",
        team: "",
        points: 13
    }, {
        photo: require("../assets/avatars/9.png"),
        name: "Oyunçu 2",
        team: "",
        points: 12
    }, {
        photo: require("../assets/avatars/9.png"),
        name: "Oyunçu 3",
        team: "",
        points: 7
    }, {
        photo: require("../assets/avatars/9.png"),
        name: "Oyunçu 4",
        team: "",
        points: 3
    }, {
        photo: require("../assets/avatars/9.png"),
        name: "Oyunçu 5",
        team: "",
        points: 0
    }, 
]

const MyTeam = () => {
    const [chooserIndex, setChooserIndex] = useState(2);
    const [chosenPlayers, setChosenPlayers] = useState([0,2,3]);

    return (
        <>
        <Heading marginTop={50} m="auto" fontSize="3xl">
            <Text color={styles.pcolor} fontWeight="bold">Komanda yoldaşı seçmək üçün növbə sizindir</Text>
        </Heading>
        <ScrollView h="40%">
        {caps.map((player, index) => <PlayerRow key={index} player={player} chooser={chooserIndex==index} />)}
        </ScrollView>
        <Divider my={2} bg={styles.pcolor} />
        <Heading marginTop={50} m="auto" fontSize="3xl">
            <Text color={styles.pcolor} fontWeight="bold">Mövcud oyunçular</Text>
        </Heading>
        <ScrollView h="40%">
        {availablePlayers.map((player, index) => <PlayerRow key={index} player={player} chooser={chosenPlayers.includes(index)} />)}
        </ScrollView>
        </>
    );
};

export default MyTeam;