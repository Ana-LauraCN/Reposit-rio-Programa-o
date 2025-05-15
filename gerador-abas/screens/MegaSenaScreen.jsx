import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Button, Card, Text, Divider } from 'react-native-paper';

export default function MegaSenaScreen() {
  const [jogosMegaSena, setJogosMegaSena] = useState([]);
  const [historicoSalvo, setHistoricoSalvo] = useState([]);
  const [mostrarHistorico, setMostrarHistorico] = useState(false);

  const gerarJogo = () => {
    const numeros = new Set();
    while (numeros.size < 6) {
      numeros.add(Math.floor(Math.random() * 60) + 1);
    }
    const jogoArray = Array.from(numeros).sort((a, b) => a - b);
    const jogoString = jogoArray.map(n => String(n).padStart(2, '0')).join(' - ');
    setJogosMegaSena([jogoString, ...jogosMegaSena]);
  };

  const salvarEApagar = () => {
    setHistoricoSalvo([...jogosMegaSena, ...historicoSalvo]);
    setJogosMegaSena([]);
  };

  const renderBolinhas = (jogoString) => {
    const numeros = jogoString.split(' - ');
    return (
      <View style={styles.jogoContainer}>
        {numeros.map((numero, index) => (
          <View key={index} style={styles.bolinha}>
            <Text style={styles.numeroTexto}>{numero}</Text>
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Button mode="contained" onPress={gerarJogo} style={styles.botao}>
        Gerar Jogo da Mega Sena
      </Button>

      <Button mode="outlined" onPress={salvarEApagar} style={styles.botao}>
        Salvar e Limpar Jogos Atuais
      </Button>

      <Text variant="titleMedium" style={styles.titulo}>Jogos Atuais</Text>
      <FlatList
        data={jogosMegaSena}
        keyExtractor={(item, index) => 'atual-' + index}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>{renderBolinhas(item)}</Card.Content>
          </Card>
        )}
      />

      <Divider style={{ marginVertical: 10 }} />

      <Button
        mode="contained-tonal"
        onPress={() => setMostrarHistorico(!mostrarHistorico)}
        style={styles.botao}
      >
        {mostrarHistorico ? 'Ocultar Histórico' : 'Ver Histórico'}
      </Button>

      {mostrarHistorico && (
        <>
          <Text variant="titleMedium" style={styles.titulo}>Histórico Salvo</Text>
          <FlatList
            data={historicoSalvo}
            keyExtractor={(item, index) => 'historico-' + index}
            renderItem={({ item }) => (
              <Card style={[styles.card, { backgroundColor: '#f0f0f0' }]}>
                <Card.Content>{renderBolinhas(item)}</Card.Content>
              </Card>
            )}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: '#fff',
  },
  botao: {
    marginBottom: 10,
  },
  card: {
    marginVertical: 4,
    padding: 8,
  },
  titulo: {
    marginTop: 16,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  jogoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'center',
  },
  bolinha: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4caf50',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
    marginVertical: 4,
  },
  numeroTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
