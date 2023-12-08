import React from 'react';
import { Link, router } from 'expo-router';
import { CapGameTab } from '../components/CapGameTab';
import { 
  Container, 
  Text, 
  Heading, 
  Center, 
  Box, 
  Button, 
  Divider,
  VStack,
  Stack
} from "native-base";

const tabs = [
  {name: "History", link: "/capGame/history", current: false},
  {name: "Question", link: "/capGame/question", current: false},
  {name: "Result", link: "/capGame/result", current: true}
]

const Result = () => {
  return (
    <>
    <CapGameTab tabs={tabs}/>
    </>
  );
};

export default Result;