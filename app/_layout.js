import { Slot } from 'expo-router';
import { ImageBackground } from 'react-native';
import { hideNavBar } from './components/androidFixes';
import { NativeBaseProvider, Spacer } from "native-base";
import {styles} from './styles/styles';
import { BottomNavBar} from './components';

export default function Layout() {
    hideNavBar()
    
    return (
        <ImageBackground
            source={require('./assets/background.png')}
            style={{ flex: 1 }}
        >
            <NativeBaseProvider>
                <Slot/>
                
            </NativeBaseProvider>
        <BottomNavBar/>
        </ImageBackground>
    );
}
