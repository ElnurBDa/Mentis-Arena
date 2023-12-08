import React from 'react';
import { useState } from 'react';
import { CapGameTab } from '../components';
import { 
  Container, 
  Text, 
  Heading, 
  Center, 
  Box, 
  TextArea
} from "native-base";

const tabs = [
  {name: "History", link: "/capGame/history", current: false},
  {name: "Question", link: "/capGame/question", current: true},
  {name: "Result", link: "/capGame/result", current: false}
]

const questions = [
  "Basketbolda kiçik hücumçu ampluasında çıxış edən oyunçular xal qazanmaq, ribaund almaq, \
  ötürmələr, müdafiə baxımından digər mövqelərdə də oynaya bilir. Bundan danışılan məqalədə \
  kiçik hücumçular İKS-ə bənzədilir. İKS-i biri xüsusi isim olan iki sözlə deyin.",
  "Braziliyalı bəstəkar quşların istirahət etdiyini görür və bu mənzərədən ilham alaraq melodiya \
  bəstələyir. Əvvəlki cümlədə buraxılmış ikisi eyni hərflə başlayan üç sözü cavab kartlarınıza yazın."
]

const Question = () => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [questionText, setQuestionText] = useState(questions[0]);
  const [answerText, setAnswerText] = useState(); // it should be saved to store so that it can be seen again after returning from some pages

  return (
    <>
    <CapGameTab tabs={tabs}/>
    <Heading marginTop={10} m="auto" fontSize="lg">
      <Text color="white" fontWeight="bold">Question {questionNumber}</Text>
    </Heading>
    <Center marginTop={10} m="auto">
      <Container w="100%">
        <Text color="white">{questionText}</Text>
      </Container>
    </Center>
    <Box alignItems="center" w="100%" marginTop={10}>
      <TextArea h={20} placeholder="Your Answer" w="75%" maxW="300" color="emerald.500" 
        onChangeText={value => setAnswerText(value)}/>
    </Box>
    </>
  );
};

export default Question;