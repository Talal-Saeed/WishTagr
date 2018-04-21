/*import React, {Component} from 'react';
import {View, StyleSheet,StatusBar} from 'react-native';
import LoginForm from './screens/LoginForm';
import SignUp from './screens/SignUp';
import Routes from './Routes';

export default class App extends Component {
    render () {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor='#000a12'
                    barStyle="light-content"
                />
                <Routes/>
            </View>

        );
    }
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#263238',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
       
    }
});


*/import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    StatusBar 
  } from 'react-native';
  
  
  import Routes from './Routes';
  
  export default class App extends Component {
    render() {
      return (
        <View style={styles.container}>
          <StatusBar
             backgroundColor="#1c313a"
             barStyle="light-content"
           />
          <Routes/>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container : {
      flex: 1,
    }
  });