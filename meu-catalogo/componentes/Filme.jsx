import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Filme(props) {

  const {nome, ano, diretor, tipo, capa} = props

return (
    <View style={styles.container}>


      <Text style={styles.title}>Detalhes do Filme</Text>

      <Text style={styles.texto}>NOME DO FILME: {nome}</Text>
      <Text style={styles.texto}>ANO DO LANÇAMENTO: {ano}</Text>
      <Text style={styles.texto}>NOME DO DIRETOR: {diretor}</Text>
      <Text style={styles.texto}>GÊNERO DO FILME: {tipo}</Text>

      <Image
        source={{
          uri: capa
        }}
        style={{
          height: 200,
          width: 200
        }}

      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
   
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  texto: {
    fontSize: 16,
    color: '#555',
    marginVertical: 5,
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginTop: 15,
  },
});
