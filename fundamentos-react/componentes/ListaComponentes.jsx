import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ListaComponentes() {
  const listaCarros = ["Gol", "Palio"] // Corrigido para um array

  return (
    <View style={styles.container}>
      {listaCarros.map((carro, index) => (
        <Text key={index}>{carro}</Text> // Utilizando key para cada item
      ))}
      <Text>ListaComponentes</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
})
