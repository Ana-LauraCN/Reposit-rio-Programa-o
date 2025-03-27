import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function JavascriptComponentes() {

    //lógica do componente
    const nome = "Ana"
    const idade = 18

    function checarMaiorIdade(){
    if (idade >= 18){
        return "Maior Idade"
    } else {
        return "Menor idade"
    }
    }

    function alerta(){
        alert('Clicou no botão!!')
    }


    //retorno jsx
  return (

    <View style={styles.container}>
      <Text style={styles.texto}>JavascriptComponentes</Text>
      <Text style={styles.texto}>NOME: {nome}</Text>
      <Text style={styles.texto}>IDADE: {idade}</Text>
      <Text style={styles.texto}>IDADE: {idade + 40}</Text>
      <Text style={styles.texto}>18+: {checarMaiorIdade()}</Text>
      
      <Button title='enviar' onPress={alerta }/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        
        backgroundColor: "purple",
        borderWidth: 5,
        padding: 10
    },
    texto: {
        fontSize: 20,
        fontWeight: 600,
        color: "white"
    }
})