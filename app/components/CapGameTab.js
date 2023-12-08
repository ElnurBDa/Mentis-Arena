import React from 'react';
import { Link } from 'expo-router';
import { 
  Text, 
  Center, 
  HStack
} from "native-base";

export const CapGameTab = ({tabs}) => {
    return <>
      <HStack justifyContent="center" mt={3}>
        {tabs.map((tab, index) => {
          if (tab.current) {
            return (
              <Center key={tab.name} w="33%" borderRightWidth={index !== tabs.length - 1 ? 1 : 0} borderColor="white">
                <Text fontSize="2xl" color="white" borderBottomWidth={1} borderColor="white">{tab.name}</Text>
              </Center>
            )
          } else {
            return (
              <Center key={tab.name} w="33%" borderRightWidth={index !== tabs.length - 1 ? 1 : 0} borderColor="white">
                <Link href={tab.link}>
                  <Text fontSize="2xl" color="white">{tab.name}</Text>
                </Link>
              </Center>
            )
          }
        })}
      </HStack>
    </>
  }