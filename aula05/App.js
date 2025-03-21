import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './componentes/PrimeiroComponente';
import SegundoComponente from './componentes/SegundoComponente';
import JavascriptComponente from './componentes/JavascriptComponente';
import Perfil from './componentes/Perfil';

export default function App() {
  return (
    <View style={styles.container}>
      
      <PrimeiroComponente></PrimeiroComponente>
      <SegundoComponente></SegundoComponente>
      <JavascriptComponente></JavascriptComponente>
      <Perfil
        nome="Ana Laura"
        sobrenome="Castro"
        idade={18}
      />
       <Perfil
        nome="Joana"
        sobrenome="Melo"
        idade={20}
      />
       <Perfil
        nome="Jonas"
        sobrenome="Rodrigues"
        idade={30}
      />

      <StatusBar style="auto" />
    </View>
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
