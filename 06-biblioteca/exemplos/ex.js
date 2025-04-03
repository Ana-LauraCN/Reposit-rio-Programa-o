import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { PaperProvider, Card, Paragraph, Title, Text, Button, Divider } from 'react-native-paper';

export default function App() {
  return (
  <PaperProvider>
    <View style={styles.container}>
      <StatusBar style="auto"/>

      <Button mode='contained' onPress={() => alert ('Clicou')}>Clicou</Button>

      <Text variant='bodyLarge'>EU AMO VOCÊ</Text>
      <Divider style={{width: '90%'}}/>
      <Text variant='displayLarge'>EU AMO VOCÊ</Text>
      <Text variant='headlineLarge'>EU AMO VOCÊ</Text>
      <Text variant='labelLarge'>EU AMO VOCÊ</Text>
      <Text variant='titleLarge'>EU AMO VOCÊ</Text>
      <Text >EU AMO VOCÊ</Text>

    <Card style={{margin: 10}}>
      <Card.Content>
        <Title>UM TÍTULO QUALQUER</Title>
        <Paragraph>
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        </Paragraph>
      </Card.Content>
    </Card>
    <Card style={{margin: 10}}>
      <Card.Content>
        <Title>UM TÍTULO QUALQUER</Title>
        <Paragraph>
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        </Paragraph>
      </Card.Content>
    </Card>
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
