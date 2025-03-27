import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PrimeiroComponente() {
  return (
    <View style={styles.containerVermelho}>
      <Text style={styles.textoGrande}>Informações</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    containerVermelho: {
        backgroundColor: 'pink',
        padding: 20,
        borderWidth: 10,
        borderRadius: 8
    },
    textoGrande: {
        fontSize: 20,
        fontWeight: 600
    }
})