import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './componentes/PrimeiroComponente';
import JavascriptComponentes from './componentes/JavascriptComponentes';

export default function App() {
  return (
    <View style={styles.container}>
      <PrimeiroComponente></PrimeiroComponente>
      <JavascriptComponentes></JavascriptComponentes>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
