import { Input } from "native-base";
import React from 'react';
import {styles} from '../styles/styles';

export const MyInput = ({placeholder, onChangeText}) => {
  return (
    <Input 
    variant="underlined" 
    color={styles.scolor} 
    placeholder={placeholder} 
    onChangeText={value => onChangeText(value)}
    />
    );
}