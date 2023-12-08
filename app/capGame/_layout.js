import { Slot } from 'expo-router';
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

  
export default function CapGameLayout() {
  return (<>
    <Center marginTop={50}>
      <Container w="100%">
        <Heading color="white" marginTop={100} m="auto" fontSize="3xl">
          <Text color="emerald.500">CapGame</Text>
        </Heading>
        <Slot/>
      </Container>
    </Center>
  </>);
}
