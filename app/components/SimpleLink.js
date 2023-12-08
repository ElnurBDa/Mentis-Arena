import { Link } from 'expo-router';
import { Text } from "native-base";
import React from 'react';

export const SimpleLink = ({link, text}) => {
  return (
    <Link href={link} marginTop={10}>
      <Text color="white">
        {text}
      </Text>
    </Link>);
}