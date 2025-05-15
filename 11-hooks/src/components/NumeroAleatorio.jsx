import { StyleSheet, View } from 'react-native'
import React from 'react'
import {Card, Button, Text} from 'react-native-paper'

export default function NumeroAleatorio() {

    const [numeroAleatorio, setNumeroAleatorio] = useState(0)

    function gerar(){
        const numeroGerado = Math.round(Math.rondom() * 101)
        setNumeroAleatorio(numeroGerado)
        const novaLista = listaNumeros
        novaLista.push(numeroGerado)
        setListaNumeros([...listaNumeros, numeroGerado])
    }
  return (
    <View>
    <Card style={{margin: 5}}>
    <Card.Content>
    <Text>Gerador de Número Aleatório:</Text>
    <Text variant='displayMedium'>Número: {numeroAleatorio}</Text>
    </Card.Content>
    <Card.Actions>
        <Button onPress={gerar}>Gerar</Button>
    </Card.Actions>
    </Card> 

    </View>
  )
}

const styles = StyleSheet.create({})