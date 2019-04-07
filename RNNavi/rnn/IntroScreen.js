import React from 'react'
import {Alert, Button, View, Text, StyleSheet} from 'react-native'
import { goHome } from './Navigation'
//import { goToAuth, goHome } from './navigation'
//import { USER_KEY } from './config'
export default class IntroScreen extends React.Component {
//   async componentDidMount() {
//     try {
//       const user = await AsyncStorage.getItem(USER_KEY)
//       console.log('user: ', user)
//       if (user) {
//         goHome()
//       } else {
//         goToAuth()
//       }
//     } catch (err) {
//       console.log('error: ', err)
//       goToAuth()
//     }
//   }

  _onPressButton() {
    Alert.alert('You tapped the button!')
    console.log('_onPressButton()')
    goHome()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Loading</Text>
        <View style={styles.buttonContainer}>
                    <Button
                        onPress={this._onPressButton}
                        title="Press Me"
                    />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 28
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  },
})

