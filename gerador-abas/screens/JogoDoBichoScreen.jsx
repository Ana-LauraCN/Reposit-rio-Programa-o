import React, { useState } from 'react';
import { View, Image, StyleSheet, FlatList } from 'react-native';
import { Button, Text, Card, List } from 'react-native-paper';

const animais = [
  { numero: 1, nome: 'Avestruz', imagem: 'https://i.pinimg.com/736x/ef/3a/bb/ef3abbbc39b3cacee1ba922f95f1b0cd.jpg' },
  { numero: 2, nome: 'Águia', imagem: 'https://i.pinimg.com/736x/88/04/3b/88043b814c6d4fef1f4aee14356c00b1.jpg' },
  { numero: 3, nome: 'Burro', imagem: 'https://i.pinimg.com/736x/bc/f3/ee/bcf3eee6436f220cb4d10962e394c741.jpg' },
  { numero: 4, nome: 'Borboleta', imagem: 'https://i.pinimg.com/736x/dc/91/91/dc91911cb150d57f2f43da7466d1ab4f.jpg' },
  { numero: 5, nome: 'Cachorro', imagem: 'https://i.pinimg.com/736x/82/fb/de/82fbde9c403d43ebc83d79414b9239c3.jpg' },
  { numero: 6, nome: 'Cabra', imagem: 'https://i.pinimg.com/736x/10/20/bb/1020bbf758fa245fff4c4b1276e83b8a.jpg' },
  { numero: 7, nome: 'Carneiro', imagem: 'https://i.pinimg.com/736x/ce/c4/e6/cec4e6c3f16a63f9a713267ffcf9e114.jpg' },
  { numero: 8, nome: 'Camelo', imagem: 'https://i.pinimg.com/736x/85/0b/11/850b11e4c316abfe126ff1866c2aaeb0.jpg' },
  { numero: 9, nome: 'Cobra', imagem: 'https://i.pinimg.com/736x/3d/d8/a5/3dd8a5e99264f67efae4074431262878.jpg' },
  { numero: 10, nome: 'Coelho', imagem: 'https://i.pinimg.com/736x/eb/17/8b/eb178b465704a327d3e954eef4c7e338.jpg' },
];

export default function JogoDoBichoScreen() {
  const [animalGerado, setAnimalGerado] = useState(null);
  const [historico, setHistorico] = useState([]);
  const [mostrarHistorico, setMostrarHistorico] = useState(false);

  function gerarAnimal() {
    const sorteado = animais[Math.floor(Math.random() * animais.length)];
    setAnimalGerado(sorteado);
    setHistorico(prev => [sorteado, ...prev]);
  }

  return (
    <View style={styles.container}>
      <Button
        mode="contained"
        onPress={gerarAnimal}
        contentStyle={styles.botaoConteudo}
        labelStyle={styles.botaoLabel}
        style={styles.botao}
        uppercase={false}
      >
        Gerar Animal
      </Button>

      <Button
        mode="outlined"
        onPress={() => setMostrarHistorico(!mostrarHistorico)}
        style={[styles.botao, { marginTop: 10 }]}
        uppercase={false}
      >
        {mostrarHistorico ? 'Esconder Histórico' : 'Mostrar Histórico'}
      </Button>

      {animalGerado && (
        <Card style={styles.card} elevation={6}>
          <Card.Title
            title={animalGerado.nome}
            subtitle={`Número: ${animalGerado.numero}`}
            titleStyle={styles.cardTitulo}
            subtitleStyle={styles.cardSubtitulo}
          />
          <Card.Content style={styles.cardContent}>
            <Image source={{ uri: animalGerado.imagem }} style={styles.imagem} />
          </Card.Content>
        </Card>
      )}

      {mostrarHistorico && (
        <FlatList
          data={historico}
          keyExtractor={(item, index) => `${item.numero}-${index}`}
          style={styles.listaHistorico}
          renderItem={({ item }) => (
            <List.Item
              title={item.nome}
              description={`Número: ${item.numero}`}
              left={props => <Image source={{ uri: item.imagem }} style={styles.thumbnail} />}
            />
          )}
          ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 20 }}>Nenhum animal gerado ainda.</Text>}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
  },
  botao: {
    width: '80%',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  botaoConteudo: {
    paddingVertical: 12,
  },
  botaoLabel: {
    fontSize: 18,
    fontWeight: '600',
  },
  card: {
    width: '90%',
    borderRadius: 16,
    backgroundColor: '#fff',
    marginTop: 20,
  },
  cardTitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  cardSubtitulo: {
    fontSize: 16,
    color: '#4CAF50',
  },
  cardContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  imagem: {
    width: 280,
    height: 280,
    borderRadius: 16,
  },
  listaHistorico: {
    marginTop: 20,
    width: '90%',
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 12,
  },
});
