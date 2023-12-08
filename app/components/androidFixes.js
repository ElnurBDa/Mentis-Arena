import * as NavigationBar from 'expo-navigation-bar';
export const hideNavBar = async () => {
    await NavigationBar.setPositionAsync("absolute") 
    await NavigationBar.setVisibilityAsync("hidden") 
    await NavigationBar.setBehaviorAsync("overlay-swipe")  
}