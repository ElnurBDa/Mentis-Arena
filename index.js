import "expo-router/entry";
import { View } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View>
      <Link href="/">Home</Link>
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
      <Link href="/connectToGame">ConnectToGame</Link>
      // capGame
      <Link href="/capGame/">CapGame</Link>
      <Link href="/capGame/question">Question</Link>
      <Link href="/capGame/history">History</Link>
      <Link href="/capGame/result">Result</Link>
    </View>
  );
}
