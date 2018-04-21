/*import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default class Form extends Component {
    render(){
        return (
                <View style={styles.container}>              
                      <TextInput style={styles.inputBox}
                       underlineColorAndroid='rgba(0,0,0,0)' 
                       placeholder='example@gmail.com'
                       autoCorrect = {false}
                       placeholderTextColor='#ffffff'
                       selectionColor='#ffffff'
                       keyboardType="email-address"
                       onSubmitEditing={()=>this.password.focus()}
                       />               

                       <TextInput style={styles.inputBox}
                       underlineColorAndroid='rgba(0,0,0,0)' 
                       placeholder='Password'
                       secureTextEntry= {true}
                       placeholderTextColor='#ffffff'
                       ref={(input) => this.password = input}/>

                       <TouchableOpacity style={styles.buttonStyle}>
                       <Text style={styles.buttonTextStyle}>{this.props.type}</Text>    
                       </TouchableOpacity>               
                </View> 
        );
    }
}

const styles = StyleSheet.create ({
    container: {
        flexGrow:1,
       justifyContent:'center',
       alignItems:'center',
        
     },
    inputBox:{
        width:300,
        backgroundColor:'rgba(255,255,255,0.2)',
        borderRadius:25,
        paddingHorizontal:16,
        fontSize:16,
        color:'#ffffff',
        marginVertical:12
    },
    buttonTextStyle:{
        fontSize:16,
        fontWeight:'500',
        textAlign:'center',
        color:'#ffffff'
    },
    buttonStyle:{
        width:200,
        backgroundColor:'rgba(255,255,255,0.3)',
        borderRadius:25,
        paddingHorizontal:16,
        paddingVertical:12,
        backgroundColor: '#000a12'
    }
});
*/

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity 
} from 'react-native';

export default class Form extends Component {

	render(){
		return(
			<View style={styles.container}>
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="example@gmail.com"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              autoCorrect={false}
              keyboardType="email-address"
              onSubmitEditing={()=> this.password.focus()}
              />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "#ffffff"
              ref={(input) => this.password = input}
              />  
           <TouchableOpacity style={styles.button}>
             <Text style={styles.buttonText}>{this.props.type}</Text>
           </TouchableOpacity>     
  		</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },

  inputBox: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  },
  button: {
    width:300,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
  
});