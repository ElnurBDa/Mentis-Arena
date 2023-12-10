import { Slot } from 'expo-router';
import { 
    Container, 
    Text, 
    Heading, 
    Center, 
} from "native-base";
import {styles} from '../styles/styles';

  
export default function CapGameLayout() {
  return (<>
    <Center marginTop={50}>
      <Container w="100%">
        <Heading marginTop={100} marginBottom={5} m="auto" fontSize="4xl">
          <Text color={styles.scolor}>Kapitanlıq Oyunu</Text>
        </Heading>
        <Slot/>
      </Container>
    </Center>
  </>);
}
