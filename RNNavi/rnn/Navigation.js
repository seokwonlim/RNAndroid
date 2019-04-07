import { Navigation } from 'react-native-navigation'

// export const goToAuth = () => Navigation.setRoot({
//   root: {
//     bottomTabs: {
//       id: 'BottomTabsId',
//       children: [
//         {
//           component: {
//             name: 'SignIn',
//             options: {
//               bottomTab: {
//                 fontSize: 12,
//                 text: 'Sign In',
//                 icon: require('./src/signin.png')
//               }
//             }
//           },
//         },
//         {
//           component: {
//             name: 'SignUp',
//             options: {
//               bottomTab: {
//                 text: 'Sign Up',
//                 fontSize: 12,
//                 icon: require('./src/signup.png')
//               }
//             }
//           },
//         },
//       ],
//     }
//   }
// });

export const goHome = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'App',
      children: [
        {
          component: {
            name: 'HomeScreen',
          }
        }
    ],
    }
  }
})

export const goIntro = () => Navigation.setRoot({
    root: {
      stack: {
        id: 'App',
        children: [
          {
            component: {
              name: 'IntroScreen',
            }
          }
      ],
      }
    }
  })