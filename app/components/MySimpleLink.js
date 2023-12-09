import { Link } from 'expo-router';
import { Text } from "native-base";
import React from 'react';
import {styles} from '../styles/styles';

export const MySimpleLink = ({link, text}) => {
  return (
    <Link href={link}>
      <Text color={styles.tcolor}>
        {text}
      </Text>
    </Link>);
}