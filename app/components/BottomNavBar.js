import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { styles } from '../styles/styles';

export const BottomNavBar = () => {
    return (
        <View style={styles_.container}>
            <TouchableOpacity style={styles_.iconContainer} onPress={() => router.push("/home")}>
                <Ionicons name="home" size={24} color={styles.color5} />
            </TouchableOpacity>
            <TouchableOpacity style={styles_.iconContainer} onPress={() => router.push("/capGame")}>
                <Ionicons name="game-controller" size={24} color={styles.color5} />
            </TouchableOpacity>
            <TouchableOpacity style={styles_.iconContainer} onPress={() => router.push("/profile")}>
                <Ionicons name="person" size={24} color={styles.color5} />
            </TouchableOpacity>
        </View>
    );
}

const styles_ = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: styles.color4,
        height: 60,
        borderTopWidth: 1,
        borderTopColor: 'gray',
        position: 'fixed',
        bottom: 0,
        zIndex: 999,
    },
    iconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
