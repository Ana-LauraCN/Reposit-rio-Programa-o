import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image, ScrollView } from 'react-native';


export default function App() {
  const nome = "Gustavo"

  function alerta(){
    alert("Você clicou no botão")
  }

  return (
    <ScrollView>

    <View style={styles.container}>
      <Text style={styles.text}>ENROLADOS 🤩</Text>
      <Text style={{ fontSize:40}}>DISNEY</Text>
     <Button  title='Clique aqui' onPress={alerta}></Button>

     <Image
     source={{ uri: 'https://i.pinimg.com/736x/22/aa/03/22aa03bf1da2df842008ae2a741369b2.jpg'}}
     style={{
      height: 600,
      width: 400
     
     }}
     />

  <Image
     source={require('./img/image.png')}
     style={{
      height: 600,
      width: 400,
      paddingTop: 150
     }}
     />


      <StatusBar style="auto" />
    </View>
    
      </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 150,
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

