import { Input } from "native-base";
import React from 'react';

export const MyInput = ({placeholder, onChangeText}) => {
  return (
    <Input 
    variant="underlined" 
    color="emerald.500" 
    placeholder={placeholder} 
    onChangeText={value => onChangeText(value)}
    />
    );
}