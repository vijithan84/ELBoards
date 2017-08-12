import firebase from 'firebase';
import React, { Component, } from 'react'
import { View } from 'react-native'
import Router from './components/router'
import Home from './components/home'
class FireBaseConfig extends Component {



  constructor(props) {
      super(props);
    this.state = {
            user: null
        }
        
  }

 componentDidMount() {
        var config = {
        apiKey: "AIzaSyDeYiMDQE3q16FreNAMSJXxQu_GVrm3loQ",
    authDomain: "el-bords.firebaseapp.com",
    databaseURL: "https://el-bords.firebaseio.com",
    projectId: "el-bords",
    storageBucket: "el-bords.appspot.com",
    messagingSenderId: "547460675041"
        };
        firebase.initializeApp(config);
 
         firebase.auth().onAuthStateChanged(user => {
 
            if (user) {
                console.log("user logged in");
                this.setState({user});
            } else {
                console.log("user logged out");
                this.setState({user: null})
            }
        });
 
    }
 
    render() {
      
        return this.state.user ? <Home /> : <Router />
      
    }
}

export default FireBaseConfig