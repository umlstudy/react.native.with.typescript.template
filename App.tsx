import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Hello } from './components/Hello';

export default class App extends React.Component {
  render() {
    console.log("TTTTTTTTTT");
    console.log("WWW");
    console.log("WWW");
    console.log("WWW");
    console.log("WWW");
    console.log("WWW");
    
    
    
    //<Text>Open up App.js to start worfff typescript dkkk1111k dadslee sejong king on your app!</Text>
    return (
      <View style={styles.container}>
        <Hello name="kkk"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
