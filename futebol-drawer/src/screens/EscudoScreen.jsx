import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text, Card } from 'react-native-paper';

const time = {
  nome: "Flamengo",
  escudo: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
  fundacao: "15 de novembro de 1895",
  estadio: "Maracanã",
  mascote: "Urubu",
  cores: ["Vermelho", "Preto"]
};

export default function EscudoScreen() {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content style={styles.content}>
          <Image source={{ uri: time.escudo }} style={styles.image} />
          <Text variant="headlineMedium" style={styles.nome}>{time.nome}</Text>
          <Text style={styles.info}>📅 Fundado em: {time.fundacao}</Text>
          <Text style={styles.info}>🏟️ Estádio: {time.estadio}</Text>
          <Text style={styles.info}>🦅 Mascote: {time.mascote}</Text>
          <Text style={styles.info}>
            🎨 Cores: <Text style={styles.vermelho}>Vermelho</Text> e <Text style={styles.preto}>Preto</Text>
          </Text>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    borderRadius: 12,
    elevation: 4,
    backgroundColor: '#fff',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#b71c1c',
  },
  nome: {
    fontWeight: 'bold',
    color: '#b71c1c',
    marginBottom: 12,
  },
  info: {
    fontSize: 16,
    marginBottom: 6,
    textAlign: 'center',
  },
  vermelho: {
    color: '#d32f2f',
    fontWeight: 'bold',
  },
  preto: {
    color: '#212121',
    fontWeight: 'bold',
  },
});
