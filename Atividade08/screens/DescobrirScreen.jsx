import React from 'react';
import { View, StyleSheet, FlatList, Image, ScrollView } from 'react-native';
import { Text, Button } from 'react-native-paper';

const categorias = [
  {
    id: '1',
    titulo: 'Animações',
    filmes: [
      {
        id: 'a1',
        nome: 'Up Altas Aventuras',
        imagem: 'https://i.pinimg.com/736x/fd/0c/2e/fd0c2e9d71b439aa582e9da8a759a775.jpg',
      },
      {
        id: 'a2',
        nome: 'Divertida Mente',
        imagem: 'https://i.pinimg.com/736x/f1/b7/eb/f1b7ebf5a3714035e798772088ab7427.jpg',
      },
      {
        id: 'a3',
        nome: 'Viva - A Vida é uma Festa',
        imagem: 'https://i.pinimg.com/736x/13/4b/cb/134bcb4ce46dab6f1e7cafaf16f0f62d.jpg',
      },
    ],
  },
  {
    id: '2',
    titulo: 'Princesas',
    filmes: [
      {
        id: 'p1',
        nome: 'A Bela e a Fera',
        imagem: 'https://i.pinimg.com/736x/e3/c9/6e/e3c96e80d2798a3d4d6d34d161b33a01.jpg',
      },
      {
        id: 'p2',
        nome: 'Cinderela',
        imagem: 'https://i.pinimg.com/736x/50/bf/e7/50bfe794fa0d88e57656fd71f9bdd22f.jpg',
      },
      {
        id: 'p3',
        nome: 'A Pequena Sereia',
        imagem: 'https://i.pinimg.com/736x/ce/bc/b5/cebcb50fe0c5ab7ac4db86a85a502032.jpg',
      },
    ],
  },
  {
    id: '3',
    titulo: 'Clássicos Disney',
    filmes: [
      {
        id: 'c1',
        nome: 'O Rei Leão',
        imagem: 'https://i.pinimg.com/736x/1d/11/5f/1d115fe932f3288a5589a8bcbbef0e0f.jpg',
      },
      {
        id: 'c2',
        nome: 'Aladdin',
        imagem: 'https://i.pinimg.com/736x/e5/4f/8b/e54f8b5592fcd0d06e4b6be905ddc452.jpg',
      },
      {
        id: 'c3',
        nome: 'Dumbo',
        imagem: 'https://i.pinimg.com/736x/52/a0/fb/52a0fbf0bfd25dec6215f491829c8c65.jpg',
      },
    ],
  },
  
];

export default function TitulosScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🔍 Descobrir Novos Filmes</Text>

      {categorias.map((categoria) => (
        <View key={categoria.id} style={styles.section}>
          <Text style={styles.sectionTitle}>{categoria.titulo}</Text>

          <FlatList
            data={categoria.filmes}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingHorizontal: 10 }}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Image source={{ uri: item.imagem }} style={styles.image} />
                <Text style={styles.movieName}>{item.nome}</Text>
                <Button
                  mode="outlined"
                  style={styles.button}
                  labelStyle={{ fontSize: 12 }}
                  onPress={() => alert(`Assistindo ${item.nome} 💫`)}
                >
                  Ver mais
                </Button>
              </View>
            )}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff0f5',
    flex: 1,
  },
  title: {
    fontSize: 26,
    color: 'black',
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
    backgroundColor: '#ff85a2',
    padding: 10,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginRight: 12,
    padding: 10,
    width: 160,
    alignItems: 'center',
    elevation: 3,
  },
  image: {
    width: 140,
    height: 200,
    borderRadius: 12,
    marginBottom: 10,
  },
  movieName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6a4c93',
    textAlign: 'center',
    marginBottom: 8,
  },
  button: {
    borderColor: '#ff85a2',
    borderRadius: 20,
  },
});
