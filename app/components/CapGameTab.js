import React from 'react';
import { Link } from 'expo-router';
import { 
  Text, 
  Center, 
  HStack
} from "native-base";
import {styles} from '../styles/styles';

export const CapGameTab = ({tabs}) => {
    return <>
      <HStack justifyContent="center" mt={3}>
        {tabs.map((tab, index) => {
          if (tab.current) {
            return (
              <Center key={tab.name} w="33%" borderRightWidth={index !== tabs.length - 1 ? 1 : 0} borderColor={styles.pcolor}>
                <Text fontSize="2xl" color={styles.pcolor} borderBottomWidth={1} borderColor={styles.pcolor}>{tab.name}</Text>
              </Center>
            )
          } else {
            return (
              <Center key={tab.name} w="33%" borderRightWidth={index !== tabs.length - 1 ? 1 : 0} borderColor={styles.pcolor}>
                <Link href={tab.link}>
                  <Text fontSize="2xl" color={styles.pcolor}>{tab.name}</Text>
                </Link>
              </Center>
            )
          }
        })}
      </HStack>
    </>
  }