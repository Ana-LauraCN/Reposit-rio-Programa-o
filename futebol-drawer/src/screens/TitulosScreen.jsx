import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';

const titulos = [
  {
    nome: "Campeonato Brasileiro",
    anos: [1980, 1982, 1983, 1992, 2009, 2019, 2020]
  },
  {
    nome: "Copa Libertadores da América",
    anos: [1981, 2019, 2022]
  },
  {
    nome: "Copa do Brasil",
    anos: [1990, 2006, 2013, 2022, 2024]
  },
  {
    nome: "Supercopa do Brasil",
    anos: [2020, 2021, 2025]
  }
];

export default function TitulosScreen() {
  return (
    <FlatList
      data={titulos}
      keyExtractor={(item) => item.nome}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <Card style={styles.card}>
          <View style={styles.cardContent}>
            <Text variant="titleMedium" style={styles.title}>{item.nome}</Text>
            <Text style={styles.subtitle}>🏆 Anos conquistados:</Text>
            <Text style={styles.anos}>{item.anos.join(', ')}</Text>
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
    padding: 16,
    borderRadius: 12,
    elevation: 4,
    backgroundColor: '#ffffff',
  },
  cardContent: {
    flexDirection: 'column',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#b71c1c',
    marginBottom: 6,
  },
  subtitle: {
    fontWeight: '600',
    color: '#555',
    marginBottom: 2,
  },
  anos: {
    fontSize: 14,
    color: '#333',
  },
});
