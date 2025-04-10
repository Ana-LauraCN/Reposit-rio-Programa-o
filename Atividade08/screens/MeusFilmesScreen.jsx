import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, Card, Button } from 'react-native-paper';

const meusFilmes = [
  {
    id: '1',
    titulo: 'Encanto',
    genero: 'Musical / Fantasia',
    imagem: 'https://i.pinimg.com/736x/37/83/84/37838411fead8a2279c341235da74faf.jpg',
  },
  {
    id: '2',
    titulo: 'Moana',
    genero: 'Animação / Aventura',
    imagem: 'https://i.pinimg.com/736x/87/54/e0/8754e05a1e58f80a8f426d3d006de1be.jpg',
  },
  {
    id: '3',
    titulo: 'Valente',
    genero: 'Animação / Ação',
    imagem: 'https://i.pinimg.com/736x/a0/9e/29/a09e292e80220bade1d7efa7a2eb6f1b.jpg',
  },
];

export default function MeusFilmesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seus Filmes Favoritos ♡</Text>

      <FlatList
        data={meusFilmes}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Cover source={{ uri: item.imagem }} />
            <Card.Title title={item.titulo} subtitle={item.genero} />
            <Card.Actions>
              <Button icon="delete" onPress={() => alert('Removido dos favoritos! 💔')}>
                Remover
              </Button>
            </Card.Actions>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff0f5',
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 26,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    marginBottom: 20,
    borderRadius: 16,
    backgroundColor: '#ffffff',
  },
});
