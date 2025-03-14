import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image} from 'react-native';


export default function App() {
  const nome = "Gustavo"

  function alerta(){
    alert("Você clicou no botão")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>ENROLADOS 🤩</Text>
     <Button  title='Clique aqui' onPress={alerta}></Button>

     <Image
     source={{ uri: 'https://i.pinimg.com/736x/22/aa/03/22aa03bf1da2df842008ae2a741369b2.jpg'}}
     style={{
      height: 600,
      width: 400
     
     }}
     />

      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecdffd', 
    alignItems: 'center',
    justifyContent: 'center'

  },
   text: {
    fontFamily: 'Arial', 
    fontSize: 24,        
    fontWeight: 'bold',   
    color: '#333',        
  },

  
});

