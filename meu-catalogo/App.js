import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import Filme from './componentes/Filme';
import Serie from './componentes/Serie';

export default function App() {

  const listaFilme = [
    {
      "nome": "Toy Story",
      "ano": 1995,
      "diretor": "John Lasseter",
      "tipo": "Animação",
      "capa": "https://i.pinimg.com/736x/c5/be/f9/c5bef9f08e43358675a5bcc40b52c25d.jpg"
    },
    {
      "nome": "O Rei Leão",
      "ano": 1994,
      "diretor": "Roger Allers, Rob Minkoff",
      "tipo": "Animação",
      "capa": "https://i.pinimg.com/736x/c7/4f/57/c74f570eb15174939755c0d8d85fc66f.jpg"
    },
    {
      "nome": "Vingadores: Ultimato",
      "ano": 2019,
      "diretor": "Anthony Russo, Joe Russo",
      "tipo": "Animação",
      "capa": "https://i.pinimg.com/736x/3c/6e/b8/3c6eb8bfd36508575053dfbb02c08e1d.jpg"
    },
    {
      "nome": "A Viagem de Chihiro",
      "ano": 2001,
      "diretor": "Hayao Miyazaki",
      "tipo": "Animação",
      "capa": "https://i.pinimg.com/736x/93/6b/c2/936bc2c8a46385dddd69ecaa1fe1d2d5.jpg"
    }
  ];

  const listaSerie = [
    {
      "nome": "Avatar: A Lenda de Aang",
      "ano": 2005,
      "diretor": "Michael Dante DiMartino, Bryan Konietzko",
      "temporadas": 3,
      "capa": "https://i.pinimg.com/736x/fb/47/fe/fb47fe8cc7f796038c4a7c5939a859aa.jpg"
    },
    {
      "nome": "Os Simpsons",
      "ano": 1989,
      "diretor": "Matt Groening",
      "temporadas": 35,
      "capa": "https://i.pinimg.com/736x/f6/e6/64/f6e664fb679ce2b77aae9aadd93f555d.jpg"
    },
    {
      "nome": "Rick and Morty",
      "ano": 2013,
      "diretor": "Dan Harmon, Justin Roiland",
      "temporadas": 6,
      "capa": "https://i.pinimg.com/736x/b2/52/23/b25223c9de4005c544dac41e71a2f889.jpg"
    }
  ];

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <StatusBar style="auto" />

        {/* Título da seção de filmes */}
        <Text style={styles.title}>FILMES</Text>
        {listaFilme.map(filmes => {
          return (
            <Filme
              key={filmes.nome}
              nome={filmes.nome}
              ano={filmes.ano}
              diretor={filmes.diretor}
              tipo={filmes.tipo}
              capa={filmes.capa}
            />
          );
        })}

        {/* Título da seção de séries */}
        <Text style={styles.title}>SÉRIES</Text>
        {listaSerie.map(series => {
          return (
            <Serie
              key={series.nome}
              nome={series.nome}
              ano={series.ano}
              diretor={series.diretor}
              temporadas={series.temporadas}
              capa={series.capa}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#f4f4f4',  // Fundo suave
  },
  container: {
    
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  title: {
    marginTop: 80,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
 
 
});
