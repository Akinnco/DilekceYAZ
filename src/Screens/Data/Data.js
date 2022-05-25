import React, { Component } from 'react'
import { Text, View, TextInput,StyleSheet,ScrollView } from 'react-native'

const Data = ()=>{
    return (
      <ScrollView style={{flex:1,backgroundColor:'#0D1321'}}>
        <Text>sa</Text>
      </ScrollView>
    )
  }
export default Data;

const styles=StyleSheet.create({
  button:{
    width:'90%',
    height:50,
    backgroundColor:'#3E5C76',
    top:50,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonText:{
    color:'#F0EBD8',
    fontSize:18,
    fontWeight:'600'
  },
  buttonArea:{
    alignItems:'center',
    marginTop:20
  }
})