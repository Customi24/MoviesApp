import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Image, SafeAreaView } from 'react-native';

const App = () =>{

  const moviesList = [{
    id: 1,
    name: "Transformers: La Venganza de los Caidos",
    director: 'Michael Bay',
    url: 'https://es.web.img2.acsta.net/medias/nmedia/18/68/50/66/19123430.jpg'

  },
  {
    id: 2,
    name: "Cars",
    director: 'Disney',
    url: 'https://pics.filmaffinity.com/Cars-746710621-large.jpg'

  }, 
  {
    id: 3,
    name: "Avengers",
    director: 'Marvel',
    url: 'https://www.ecartelera.com/carteles/destacados/3900/3977.jpg'
  }, 
  {
    id: 4,
    name: "El Laberinto del Fauno",
    director: 'Guillermo del Toro',
    url: 'https://m.media-amazon.com/images/I/71A+RXry+2L._AC_UF894,1000_QL80_.jpg'

  }, 
  {
    id: 5,
    name: "Codigo DaVinci",
    director: 'Dan Brown',
    url: 'https://es.web.img3.acsta.net/pictures/14/03/25/13/38/299195.jpg'
  },
  {
    id: 6,
    name: "Forrest Gump",
    director: 'Robert Lee Zemecki',
    url: 'https://m.media-amazon.com/images/S/pv-target-images/a38af33f1a78f637abcef5e17e50869c15eff7ba2f2efcbfb4bb03b2f7bc9268.jpg'

  },
  {
    id: 7,
    name: "Fight Club",
    director: 'David Fincher',
    url: 'https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg'

  },
  {
    id: 8,
    name: "Dune",
    director: 'Denis Villeneuve',
    url: 'https://es.web.img3.acsta.net/pictures/21/08/25/14/35/3349802.jpg'

  },
  {
    id: 9,
    name: "Watchmen: Los Vigilantes",
    director: 'Zack Snyder',
    url: 'https://www.aceprensa.com/wp-content/uploads/2009/03/13183-0.jpg'

  },
  {
    id: 10,
    name: "El Codigo Enigma",
    director: 'Morten Tyldum',
    url: 'https://m.media-amazon.com/images/S/pv-target-images/b3456f08e6a145254def9b711efbe716ee47aa6f9dded456d62d59faf2fa8472.jpg'

  },
];

const [movies, setMovies] = useState(moviesList);

  return(
    <ScrollView contentContainerStyle={styles.container}>
      <SafeAreaView>

        <Text style={styles.title}>Welcome to Movies App!</Text>
        <Text style={styles.content1}>Top 10 </Text>
        <FlatList 
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => {
            return (
              <View style={styles.pelicontent}>
                <Image 
                  style={styles.Image}
                  source={{ uri: item.url }} />
                <View style={styles.textContainer}>
                  <Text style={styles.textName}>{item.name}</Text>
                  <Text style={styles.textDirector}>Director: {item.director}</Text>
                </View>
              </View>
            );
          }}

          
          />
      </SafeAreaView>
      
    </ScrollView>
  );
};

  const styles = StyleSheet.create ({

    container:{
      flexGrow: 1,
      backgroundColor: '#C972D5',
      justifyContent: 'center',
      alignItems: 'center',

    },
    pelicontent:{
      backgroundColor: '#FFFFFF',
      padding: 15,
      borderRadius: 15,
      width: '90%',
      marginTop: 15,
      textAlign:'center',

    },
    title: {
      fontSize:40,
      fontVariant: 'bold',
      marginTop:40,
      color:'white',
    },
    content1: {
      fontSize:40,
      fontVariant: 'bold',
      marginTop:20,
      color:'white',
      backgroundColor: '#6A3971',
      padding: 15,
      borderRadius: 15,
      textAlign:'center',
      marginTop: 15,

    },
    Image: {
      width: 200,
      height:280,
      borderRadius: 15,
      marginRight: 10,  
      alignSelf:'center'
    },
    textName: {
      color:'#6A3971',
      fontSize:23,
      textAlign:'left',
      marginTop:20,
    },
    textDirector: {
      color:'#6A3971',
      fontSize:23,
      textAlign: 'left'
    },
    textContainer: {
      flex: 1,
      textAlign:'left'

    },
   


  });

export default App;
