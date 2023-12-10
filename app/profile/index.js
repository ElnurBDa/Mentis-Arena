import React from 'react';
import {
  MySimpleLink,
  MyButton,
  PlayerRow
} from '../components'
import { 
  Container, 
  Heading, 
  Center, 
  HStack,
  Spacer,
  ScrollView,
  Divider,
  Box,
  Text,
  Stack
} from "native-base";
import { router } from 'expo-router';
import {styles} from '../styles/styles';
import { Image } from 'react-native';

const playerInfo = {
    photo: require("../assets/avatars/7.png"),
    name: "Elnur Badalov",
    team: "",
    points: 97
}

const links = [
  "https://wikipedia.org/wiki/Animal",
  "https://wikipedia.org/wiki/History",
  "https://wikipedia.org/wiki/Math",
  "https://wikipedia.org/wiki/20th_Century",
]
const Profile = () => {

  return (
    <Center marginTop={50}>
      <Container w="100%">
        <Heading color={styles.pcolor} marginTop={20} fontSize="3xl" m="auto">
        Profil
        </Heading>
        <PlayerRow player={playerInfo} />
        <HStack space={4} w="90%" mt={5} m="auto">
          <MyButton text="Oyuna qoşul" onPress={() => router.push("/connectToGame")} />
          <Spacer />
          <MyButton text="Komanda" onPress={() => router.push("/team")} />
        </HStack>
        <Box w="90%" marginTop={5} bg={styles.pbgcolor} rounded="md"  p="5" m="auto"
         borderWidth={1} borderColor={styles.pcolor} h="60%">
            <Box h="30%" m="auto">
              <Image
                source={require('../assets/graph.png')}
                flex={1} m="auto"
                aspectRatio={1.77}
                resizeMode="cover"
              />
            </Box>
            <Text color={styles.pcolor} fontWeight="medium" fontSize="sm">
              20-ci Əsr və Heyvanlar Aləmi ilə əlaqəli Mövzuları Oynamağı Tövsiyə edirik. Göründüyü kimi
              bu mövzularda probleminiz var. Biliklərinizi təkmilləşdirmək üçün bu resursları yoxlaya bilərsiniz:
            </Text>
            <Divider my={1} bg={styles.pcolor} color={styles.pcolor}/>
            <ScrollView>
            {links.map((item, index) => (
                <Text key={index} color={styles.pcolor} fontWeight="medium" fontSize="sm">• {item}</Text>
            ))}
            </ScrollView>
            <Divider my={1} bg={styles.pcolor} color={styles.pcolor}/>
            <MyButton text="Sınaq testinə başla" onPress={() => router.replace("/capGame/question")} />
        </Box>
        
      </Container>
    </Center>
  );
};

export default Profile;