import React from 'react';
import { 
  Text, 
  Center, 
  HStack,
  VStack,
  Divider
} from "native-base";

export const TableRow = ({row, borderBottomWidth}) => {
  return (
    <HStack  justifyContent="center">
      {row.map((cell,index) => {
        return (
          <Center key={index} w="33%" borderBottomWidth={borderBottomWidth} 
          borderRightWidth={index !== row.length - 1 ? 1 : 0} 
          borderColor="white">
            <Text fontSize="sm" color="white">{cell}</Text>
          </Center>
        )
      })}
    </HStack>
  )
}

export const Table = ({tableData, tableColumns}) => {
  return (
    <>
      <VStack justifyContent="center" mt={3} w="100%">
        <TableRow row={tableColumns} key={-1} borderBottomWidth={0} />
        <Divider my={2} bg="white" />
        {tableData.map((row, index) => {
          return (
            <TableRow row={row} key={index} borderBottomWidth={1} />
          )
        })}
        {[1,2,3,4,5].map((row, index) => { // some buffer rows
          return (
            <TableRow row={Array(tableData[0].length).fill("-")} key={index} borderBottomWidth={1} />
          )
        })}
      </VStack>
    </>
  );
}