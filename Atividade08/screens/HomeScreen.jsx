import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, Card, Button } from 'react-native-paper';

const filmes = [
  {
    id: '1',
    titulo: 'Toy Story 4',
    genero: 'Fantasia / Animação',
    imagem: 'https://i.pinimg.com/736x/48/d9/32/48d932d17b37ab7cb4e7a0153581dabc.jpg',
  },
  {
    id: '2',
    titulo: 'Rapunzel',
    genero: 'Romance / Drama',
    imagem: 'https://i.pinimg.com/736x/9f/d2/06/9fd2061ad9c03141acda83448d9163d8.jpg',
  },
  {
    id: '3',
    titulo: 'Carros',
    genero: 'Animação / Aventura',
    imagem: 'https://i.pinimg.com/736x/0f/5b/fa/0f5bfacda6921a51234cd48f3606d45f.jpg',
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎬 Bem-Vindo ao Cine</Text>

      <View style={styles.Box}>
        <Text style={styles.Text}>Recomendados pra você:</Text>
      </View>

      <FlatList
        data={filmes}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Cover source={{ uri: item.imagem }} />
            <Card.Title title={item.titulo} subtitle={item.genero} />
            <Card.Actions>
              <Button icon="play">Assistir</Button>
            </Card.Actions>
          </Card>
        )}
      />

      <Button
        mode="contained"
        style={styles.button}
        labelStyle={{ fontSize: 16 }}
        onPress={() => alert('Você está pronta para curtir! 💕')}
      >
        Explorar Tudo
      </Button>
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
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  Box: {
    backgroundColor: '#ff85a2',
    padding: 10,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
  },
  Text: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  card: {
    marginBottom: 20,
    borderRadius: 16,
    backgroundColor: '#ffffff',
  },
  button: {
    backgroundColor: '#ff85a2',
    marginTop: 10,
    borderRadius: 12,
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
});
