import React, { Component } from 'react'
import { Text, View,SafeAreaView } from 'react-native'
import Router from './src/Router';
export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
       <Router/>
      </SafeAreaView>
    )
  }
}