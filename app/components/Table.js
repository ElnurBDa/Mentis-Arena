import React from 'react';
import { Link } from 'expo-router';
import { 
  Text, 
  Center, 
  HStack,
  VStack
} from "native-base";


export const Table = ({tableData, tableColumns}) => {
  return <>
    <HStack justifyContent="center" mt={3}>
    {tableColumns.map((column) => {
      return (
        <Center key={column} w="33%" borderWidth={0} 
        borderRightWidth={index !== tabs.length - 1 ? 1 : 0} 
        bordeBottomWidth={1}
        borderColor="white">
          <Text fontSize="sm" color="white">{column}</Text>
        </Center>
      )
    })}
    </HStack>
    <VStack justifyContent="center" mt={3}>
      {tableData.map((row) => {
        <HStack justifyContent="center" mt={3}>
          {row.map((cell) => {
            <Center key={cell} w="33%" borderWidth={0} bordeBottomWidth={1} borderColor="white">
              <Text fontSize="sm" color="white">{cell}</Text>
            </Center>
          })}
        </HStack>
      })}
    </VStack>
    </>
}