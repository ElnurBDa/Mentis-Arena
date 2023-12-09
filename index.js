import "expo-router/entry";
import { View } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View>
      <Link href="/">index</Link>
      <Link href="/home">Home</Link>
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
      <Link href="/connectToGame">ConnectToGame</Link>
      // capGame
      <Link href="/capGame/">CapGame</Link>
      <Link href="/capGame/question">Question</Link>
      <Link href="/capGame/history">History</Link>
      <Link href="/capGame/result">Result</Link>
      // team
      <Link href="/team/leaderboard">LeaderBoard</Link>
      <Link href="/team/myTeam">MyTeam</Link>
      <Link href="/team/teamSeparation">TeamSeparation</Link>
      // profile
      <Link href="/profile">Profile</Link>
    </View>
  );
}
