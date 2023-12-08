import { Button } from "native-base";
import React from 'react';

export const MyButton = ({text, onPress}) => {
  return (
    <Button size="lg" variant="outline" colorScheme="emerald" rounded="md" onPress={() => onPress()}>
        {text}
    </Button>
    );
}