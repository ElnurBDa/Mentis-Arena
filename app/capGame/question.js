import React from 'react';
import { useState } from 'react';
import { CapGameTab, MyButton } from '../components';
import { 
  Container, 
  Text, 
  Heading, 
  Center, 
  Box, 
  TextArea
} from "native-base";
import {styles} from '../styles/styles';
import { router } from 'expo-router';

const tabs = [
  {name: "Tarix", link: "/capGame/history", current: false},
  {name: "Sual", link: "/capGame/question", current: true},
  {name: "Nəticə", link: "/capGame/result", current: false}
]

const questions = [
  "Basketbolda kiçik hücumçu ampluasında çıxış edən oyunçular xal qazanmaq, ribaund almaq, \
  ötürmələr, müdafiə baxımından digər mövqelərdə də oynaya bilir. Bundan danışılan məqalədə \
  kiçik hücumçular İKS-ə bənzədilir. İKS-i biri xüsusi isim olan iki sözlə deyin.",
  "Braziliyalı bəstəkar quşların istirahət etdiyini görür və bu mənzərədən ilham alaraq melodiya \
  bəstələyir. Əvvəlki cümlədə buraxılmış ikisi eyni hərflə başlayan üç sözü cavab kartlarınıza yazın.",
  "Bir videoda Ted Bandinin törətdiyi cinayətləri etiraf etdiyi müsahibəsində Bandinin QAMMA-dan istifadə etdiyi qeyd olunur. Hinduizmdə eqodan imtina etmək üçün bəzi insanlar QAMMA-dan istifadə edirdi. QAMMA ilə əvəz olunan iki sözü yazın.",
  "Bir yumoristik mənbədə qeyd edilir ki, evlilik yaşına çatmış olan Albrext Dürerdən atası avtoportretlərini çəkib göndərməsini istəyirdi. Bu mənbənin başlığı 'İntibah dövrünün İKS-i'dir. İKS 2012-ci ildə bir hakatonda yaradılıb. İKS-i bir sözlə yazın.",
  "Bir videoda Ted Bandinin törətdiyi cinayətləri etiraf etdiyi müsahibəsində Bandinin QAMMA-dan istifadə etdiyi qeyd olunur. Hinduizmdə eqodan imtina etmək üçün bəzi insanlar QAMMA-dan istifadə edirdi. QAMMA ilə əvəz olunan iki sözü yazın.",
  "Bir yumoristik mənbədə qeyd edilir ki, evlilik yaşına çatmış olan Albrext Dürerdən atası avtoportretlərini çəkib göndərməsini istəyirdi. Bu mənbənin başlığı 'İntibah dövrünün İKS-i'dir. İKS 2012-ci ildə bir hakatonda yaradılıb. İKS-i bir sözlə yazın."
]

const Question = () => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [questionText, setQuestionText] = useState(questions[0]);
  const [answerText, setAnswerText] = useState(); // it should be saved to store so that it can be seen again after returning from some pages

  return (
    <>
    <CapGameTab tabs={tabs}/>
    <Heading marginTop={10} m="auto" fontSize="lg">
      <Text color={styles.pcolor} fontWeight="bold">Sual {questionNumber}</Text>
    </Heading>
    <Center marginTop={10} m="auto">
      <Container w="100%">
        <Text color={styles.pcolor}>{questionText}</Text>
      </Container>
    </Center>
    <Box alignItems="center" w="100%" marginTop={10}>
      <TextArea h={20} placeholder="Sizin cavabınız" w="75%" maxW="300" color={styles.scolor} 
        onChangeText={value => setAnswerText(value)} marginBottom={10}/>
      <MyButton text="Təsdiqlə" onPress={() => {
        setQuestionNumber(questionNumber + 1);
        setQuestionText(questions[questionNumber]);
        if (questionNumber == 5) {
          router.push("/team");
        }
      }}/>
    </Box>
    </>
  );
};

export default Question;