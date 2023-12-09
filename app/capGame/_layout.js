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
        <Heading marginTop={100} m="auto" fontSize="5xl">
          <Text color={styles.scolor}>CapGame</Text>
        </Heading>
        <Slot/>
      </Container>
    </Center>
  </>);
}
