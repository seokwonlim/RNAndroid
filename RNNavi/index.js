/**
 * @format
 */

 /*
//import {AppRegistry} from 'react-native';
import { Navigation } from "react-native-navigation";
import App from './App';
//import {name as appName} from './app.json';

//AppRegistry.registerComponent(appName, () => App);
Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "navigation.playground.WelcomeScreen"
      }
    }
  });
});
*/

/*
import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/screens';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'Initializing'
      }
    },
  });
});
*/

// import { Navigation } from 'react-native-navigation';
// import HomeScreen from './rnn/Home';

// Navigation.registerComponent('rncreate.Home', () => Home);

// Navigation.startSingleScreenApp({
//   screen: {
//     screen: 'rncreate.Home',
//     title: 'Home'  
//   }
// });

import {Navigation} from 'react-native-navigation';
import {registerScreens} from './rnn/Screens';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'IntroScreen'
      }
    },
  });
});