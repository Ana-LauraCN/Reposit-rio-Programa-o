import { StyleSheet, Text, View,  } from 'react-native'
import React from 'react'

export default function JavascriptComponente() {
    const nome = "Ana"
    const idade = 1+19

    function exibirNome(){
        return nome
    }

    function checarMaiorIdade(){
        if(idade >= 18){
            return "Maior de Idade"
        } else {
            return "Menor de Idade"
        }

    }
  return (
    <View>
      <Text>Javascript Componente </Text>
      <Text>Nome: {nome}</Text>
      <Text>Idade: {idade}</Text>
      <Text>Nome: {exibirNome()}</Text>
      <Text>Check 18+ : {checarMaiorIdade()}</Text>
      <Text>Check 18+ : {idade >= 18 ? "Maior" : "Menor"}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})