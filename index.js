import "expo-router/entry";
import { View } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View>
      <Link href="/">Home</Link>
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
    </View>
  );
}
