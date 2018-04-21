/*import React, {Component} from 'react';
import {TouchableOpacity,View, Text, StyleSheet,StatusBar} from 'react-native';
import Logo from '../components/Logo';
import Form from '../components/Form';
import {Actions} from 'react-native-router-flux';

export default class SignUp extends Component {
    GoBack(){
        Actions.pop();
    }
    render (){
        return(
            <View style={styles.container}>
                <Logo />
                <Form type="Sign Up"/>
                <View style={styles.signUpTextCont}>
                    <Text style={styles.signupTextStyle}>Already have an account? </Text>
                    <TouchableOpacity onPress={this.GoBack}><Text style={styles.signupButton}>Login</Text>
                    </TouchableOpacity>
                </View>
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
       
    },
    signUpTextCont:{
        flexGrow:1,
        alignItems:'flex-end',
        justifyContent:'flex-end',
        paddingVertical:16,
        flexDirection:'row'
    },

    signupTextStyle: {
        color:'rgba(255,255,255,0.6)',
        fontSize:16
    },
    signupButton:{
        color:'#ffffff',
        fontSize:16,
        fontWeight:'500',

    }
});
 */import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar ,
    TouchableOpacity
  } from 'react-native';
  
  import Logo from '../components/Logo';
  import Form from '../components/Form';
  
  import {Actions} from 'react-native-router-flux';
  
  export default class Signup extends Component {
  
    goBack() {
        Actions.pop();
    }
  
      render() {
          return(
              <View style={styles.container}>
                  <Logo/>
                  <Form type="Signup"/>
                  <View style={styles.signupTextCont}>
                      <Text style={styles.signupText}>Already have an account?</Text>
                      <TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}> Sign in</Text></TouchableOpacity>
                  </View>
              </View>	
              )
      }
  }
  
  const styles = StyleSheet.create({
    container : {
      backgroundColor:'#455a64',
      flex: 1,
      alignItems:'center',
      justifyContent :'center'
    },
    signupTextCont : {
        flexGrow: 1,
      alignItems:'flex-end',
      justifyContent :'center',
      paddingVertical:16,
      flexDirection:'row'
    },
    signupText: {
        color:'rgba(255,255,255,0.6)',
        fontSize:16
    },
    signupButton: {
        color:'#ffffff',
        fontSize:16,
        fontWeight:'500'
    }
  });