import React from 'react';
import { FlatList, View, Image, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

const jogadores = [
  {
    nome: "Gabriel Barbosa",
    numero: 9,
    posicao: "Atacante",
    idade: 27,
    imagem: "https://i.pinimg.com/474x/1d/9f/5d/1d9f5de58831c9913f925a7155bdc7da.jpg"
  },
  {
    nome: "Arrascaeta",
    numero: 14,
    posicao: "Meia",
    idade: 29,
    imagem: "https://i.pinimg.com/474x/cf/ad/d9/cfadd92de5e581ac5505e3d325f8b9b2.jpg"
  },
  {
    nome: "Everton Ribeiro",
    numero: 7,
    posicao: "Meia",
    idade: 33,
    imagem: "https://i.pinimg.com/236x/39/1a/27/391a275fb7e0b018f2900f0f9fc9331b.jpg"
  },
  {
    nome: "David Luiz",
    numero: 23,
    posicao: "Zagueiro",
    idade: 35,
    imagem: "https://i.pinimg.com/474x/98/79/9b/98799b86107a87b79dc9b15cf778fa4a.jpg"
  },
  {
    nome: "Pedro",
    numero: 21,
    posicao: "Atacante",
    idade: 26,
    imagem: "https://i.pinimg.com/474x/79/e6/18/79e6185649fa3667b3ed3beef3e1ae94.jpg"
  }
];

export default function JogadoresScreen() {
  return (
    <FlatList
      data={jogadores}
      keyExtractor={(item) => item.nome}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <Card style={styles.card}>
          <View style={styles.row}>
            <Image source={{ uri: item.imagem }} style={styles.image} />
            <View style={styles.info}>
              <Text variant="titleMedium" style={styles.nome}>{item.nome}</Text>
              <Text style={styles.texto}>⚽ Posição: {item.posicao}</Text>
              <Text style={styles.texto}>🎂 Idade: {item.idade}</Text>
              <Text style={styles.texto}>🔢 Camisa: {item.numero}</Text>
            </View>
          </View>
        </Card>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  card: {
    marginVertical: 8,
    padding: 12,
    borderRadius: 12,
    elevation: 4,
    backgroundColor: '#ffffff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
    borderWidth: 2,
    borderColor: '#d32f2f',
  },
  info: {
    flex: 1,
  },
  nome: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#b71c1c',
  },
  texto: {
    fontSize: 14,
    marginBottom: 2,
    color: '#333',
  },
});
