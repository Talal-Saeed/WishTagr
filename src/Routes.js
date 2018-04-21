/*import React, {Component} from 'react';
import {Scene,Router,Stack} from 'react-native-router-flux';
import LoginForm from './screens/LoginForm';
import SignUp from './screens/SignUp';

export default class Routes extends Component{
    render(){
        return(
            <Router>
            <Stack key="root">
              <Scene key="login" component={LoginForm} title="Login" initial= {true}/>
              <Scene key="signup" component={SignUp} title="Register"/>
            </Stack>
          </Router>
        );
    }
}*/
/*
const RouterComponent = () => {
    return (
      <Router sceneStyle={{ paddingTop: 65 }}>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" />
        </Scene>
        </Router>)}*/
        import React, { Component } from 'react';
        import {Router, Stack, Scene} from 'react-native-router-flux';
        
        import Login from './pages/Login';
        import Signup from './pages/Signup';
        
        export default class Routes extends Component {
            render() {
                return(
                    <Router>
                        <Stack key="root" hideNavBar={true}>
                          <Scene key="login" component={Login} title="Login" initial={true}/>
                          <Scene key="signup" component={Signup} title="Register"/>
                        </Stack>
                     </Router>
                    )
            }
        }