import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  const nome = "Gustavo"

  function alerta(){
    alert("A Disney suavizou e recontou a história original.")
  }

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>Rapunzel 🤩</Text>
        <Image
            source={{ uri: 'https://i.pinimg.com/736x/77/55/73/775573581026f023383feeee45076b3b.jpg'}}
            style={styles.image}
          /> 
        <Text style={styles.text2}>
          Rapunzel é um conto de fadas popular, recolhido pelos Irmãos Grimm e publicado na primeira edição de 
          Kinder- und Hausmärchen em 1812. 
         
          A história dos Irmãos Grimm é uma adaptação do conto de fadas "Persinette" escrito por Charlotte-Rose de Caumont 
          de La Force e publicado originalmente em 1698, que por sua vez é uma versão alternativa do conto de fadas 
          italiano "Petrosinella" de Giambattista Basile (1634).
        </Text>

        <Text style={styles.title}>Informações Gerais:</Text>
        <Text style={styles.text3}>Data de nascimento: 16 de dezembro de 1792</Text>
        <Text style={styles.text3}>Relacionamento amoroso: Flynn Rider</Text>
        <Text style={styles.text3}>Pais: Mãe Gothel</Text>
        <Text style={styles.text3}>Cor do cabelo: Loiro</Text>

        <Button title="Curiosidade - clique aqui" onPress={alerta} color="green" />

        <Text style={styles.title}>Flynn Rider</Text>
        <Image
          source={{ uri: 'https://i.pinimg.com/736x/94/46/68/9446682467cf4793d320ae31053e71cf.jpg'}}
          style={styles.image}
        />
        <Text style={styles.text2}>
          Eugene Fitzherbert, nascido Horace e conhecido pelo pseudônimo Flynn Rider, é um personagem fictício 
          que aparece no filme de animação da Walt Disney Animation Studios, Tangled (2010), seu curta-metragem de 2012, 
          Tangled Ever After, e na série de televisão de 2017, Rapunzel's Tangled Adventure (anteriormente intitulada 
          Tangled: The Series).
        </Text>

        <Text style={styles.title}>Mamãe Gothel</Text>
        <Image
          source={{ uri: 'https://i.pinimg.com/736x/92/4b/47/924b47757bcb1748851de2a0e950f73e.jpg'}}
          style={styles.image}
        />
        <Text style={styles.text2}>
          A Mãe Gothel é uma das vilãs mais icônicas do filme da Disney "Enrolados" (originalmente Tangled, de 2010), 
          que é uma adaptação da famosa história de Rapunzel. No filme, Mãe Gothel é uma personagem complexa que exerce 
          um controle manipulativo e egoísta sobre Rapunzel.
        </Text>

        <Text style={styles.title}>Pascal</Text>
        <Image
          source={{ uri: 'https://i.pinimg.com/736x/a1/78/34/a17834886ce591b8789da36e79c71f65.jpg'}}
          style={styles.image}
        />
        <Text style={styles.text2}>
          Pascal é o pequeno camaleão que se torna o companheiro fiel de Rapunzel. Ele é um dos personagens que ajudam 
          a equilibrar a tensão da trama com momentos de leveza e humor. Embora ele seja um camaleão e tenha a habilidade 
          de mudar de cor, ele não é um personagem falante como os outros, mas suas expressões faciais e linguagem corporal 
          comunicam muito.
        </Text>

        <Text style={styles.title}>Maximus</Text>
        <Image
          source={{ uri: 'https://i.pinimg.com/736x/14/26/bf/1426bf31273adfc3f92ba3b558a198a7.jpg'}}
          style={styles.image}
        />
        <Text style={styles.text2}>
          Maximus é um cavalo da Guarda Real, que no começo do filme é retratado como um cão de guarda leal que persegue 
          Flynn Rider, acreditando que ele é um criminoso. Ele tem uma personalidade muito engraçada e determinada, sendo 
          bastante sério em sua missão, mas também exibe um comportamento quase cômico devido à sua obsessão em capturar Flynn.
        </Text>

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
 
  container: {
    paddingTop: 120,
    backgroundColor: '#ecdffd', 
    alignItems: 'center',
 
  },
  title: {
    fontFamily: 'San Francisco', 
    fontSize: 30,
    fontWeight: 'bold',   
    color: '#4b0082',
    marginVertical: 15,
  },
  text2: {
    fontFamily: 'Arial', 
    fontSize: 19,
    paddingBottom: 20,      
    textAlign: 'justify',
  },
  text3: {
    fontFamily: 'Arial', 
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontFamily: 'Arial',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#6a0dad',
    paddingTop: 30,
  },
  image: {
    height: 300,
    width: 300,
    paddingBottom: 20,
    borderRadius: 10,
  },
});
