import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';
import { PaperProvider, Card, Paragraph, Title, Text, Button, Divider } from 'react-native-paper';

export default function App() {

  const listaFrutas = ["Uva", "Maça", "Laranja", "Melão"]

  const listaCards = [
    {
    titulo: "Card 1",
    descricao: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    imagem: 'https://picsum.photo/700'

  },
  {
    titulo: "Card 2",
    descricao: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    imagem: 'https://picsum.photo/700'

  },
  {
    titulo: "Card 3",
    descricao: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    imagem: 'https://picsum.photo/700'

  },
  ]
  return (
    <PaperProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />

        {
          listaFrutas.map(
            item => <Text variant='displayLarge'>{item}</Text>
          )
        }

        {
          listaFrutas.map(
            item => (
              <View>
                <Text variant='displaySmall'>{item}</Text>
                <Divider style={{ height: 1 }} />
              </View>
            )
          )
        }
        <FlatList
          data={listaFrutas}
          renderItem={({ item }) => <Text variant='headlineMedium'>{item}</Text>}
        />
        <FlatList
           data={listaCards}
           renderItem={({item}) => (
            <Card style={{marginBottom: 10}}>
              <Card.Content>
                <Title>{item.titulo}</Title>
                <Title>{item.descricao}</Title>
               
              </Card.Content>
              <Card.Content>
                  <Card.Cover source={{uri: item.imagem}}/>
                  </Card.Content>
            </Card>
           )}
        />

      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
