import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function Posts({navigation, route}) {

  console.log('navigation => ', navigation)

  return (
    <View>
      <Text>nome</Text>
      <Text>nome</Text>
      <Text>nome</Text>
      <Text>nome</Text>
      <Text>nome</Text>
      <Text>nome</Text>
      <Text>nome</Text>

     

      <Button mode='contained' onPress={() => navigation.goBack('Home')}>
       Voltar
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({})