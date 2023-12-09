import { Button } from "native-base";
import React from 'react';
import {styles} from '../styles/styles';

export const MyButton = ({text, onPress}) => {
  return (
    <Button size="lg" variant="subtle" colorScheme={styles.scolorScheme} rounded="md" onPress={() => onPress()}>
        {text}
    </Button>
    );
}