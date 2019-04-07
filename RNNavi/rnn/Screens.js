import {Navigation} from 'react-native-navigation';

export function registerScreens() {
  Navigation.registerComponent('HomeScreen', () => require('./HomeScreen').default);
  Navigation.registerComponent('IntroScreen', () => require('./IntroScreen').default);
  //Navigation.registerComponent('SignIn', () => require('./SignIn').default);
  //Navigation.registerComponent('SignUp', () => require('./SignUp').default);
  //Navigation.registerComponent('Screen2', () => require('./Screen2').default);
}