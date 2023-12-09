import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Container } from 'native-base';
import { router } from 'expo-router';


export default function App() {
  useEffect(() => {
    setTimeout(() => {
      router.replace('/home');
    }, 1000);
  }, []);

  return (
    <Container>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
        <Text>Loading...</Text>
      </View>
    </Container>
  );
}
