import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function App(){
return (
  <View style={style.container}>
    <Text>
      Hello World
    </Text>
  </View>
   
)}

const style = StyleSheet.create({
  container:{
  alignItems: 'center',
  justifyContent: 'center'
  }
})
