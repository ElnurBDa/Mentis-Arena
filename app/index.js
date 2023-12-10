import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Container, Spinner } from 'native-base';
import { router } from 'expo-router';
import { styles } from './styles/styles';


export default function App() {
  useEffect(() => {
    setTimeout(() => {
      router.replace('/home');
    }, 1000);
  }, []);

  return (
    <Container style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Spinner color={styles.tcolor} size="xl5" ml="29%"/>
      </View>
    </Container>
  );
}
