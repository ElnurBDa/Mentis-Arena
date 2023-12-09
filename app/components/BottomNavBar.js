import React from 'react';
import { Box, HStack, Pressable, Icon } from 'native-base';
import { router } from 'expo-router';
import {styles} from '../styles/styles';
import { MaterialIcons } from '@expo/vector-icons';

export const BottomNavBar = () => {
    return (
        <Box safeAreaBottom shadow={6}>
            <HStack bg={styles.tcolor} alignItems="center" safeAreaBottom shadow={2}>
                <Pressable 
                    cursor="pointer" 
                    opacity={0.6} 
                    py="3" 
                    flex={1} 
                    onPress={() => router.push("/")}
                >
                    <Icon 
                        as={<MaterialIcons name="home" />}
                        size="sm" 
                        color={styles.scolor}
                    />
                </Pressable>

                <Pressable 
                    cursor="pointer" 
                    opacity={0.6} 
                    py="3" 
                    flex={1} 
                    onPress={() => router.push("/profile")}
                >
                    <Icon 
                        as={<MaterialIcons name="person" />} 
                        size="sm" 
                        color={styles.scolor}
                    />
                </Pressable>

                <Pressable 
                    cursor="pointer" 
                    opacity={0.6} 
                    py="3" 
                    flex={1} 
                    onPress={() => router.push("/capGame")}
                >
                    <Icon 
                        as={<MaterialIcons name="videogame-asset" />} 
                        size="sm" 
                        color={styles.scolor}
                    />
                </Pressable>
            </HStack>
        </Box>
    );
}

export default BottomNavBar;
