import { Slot } from 'expo-router';
import {Text, View} from 'react-native';
import { ImageBackground } from 'react-native';
import { hideNavBar } from './components/androidFixes';
import { styles } from './styles/styles';

export default function Layout() {
    hideNavBar()
    
    return (
        <ImageBackground
            source={require('./assets/background.png')}
            style={{ flex: 1 }}
        >
            <View style={styles.container}>
                <Slot />
            </View>
        </ImageBackground>
    );
}
