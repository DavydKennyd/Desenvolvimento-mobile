import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Linking, ScrollView } from 'react-native';
import { useState } from 'react';
import { Link } from 'expo-router';


const musicasFavoritas = [
  { id: '1', titulo: 'Matuê - Crack com Mussilon', capa:'https://github.com/DavydKennyd/imagens-para-projeto/blob/main/assets/photo_2024-09-09_19-33-30.png?raw=true', link: 'https://open.spotify.com/intl-pt/track/4ssHL7bSnOAE7HjiuLx6Co?si=5b2e7d2de15847b0', Sobre: '' },
  { id: '2', titulo: 'Franco The sir - Bater', capa: 'https://github.com/DavydKennyd/imagens-para-projeto/blob/main/assets/1179656-e-assim-que-funciona_142703.png?raw=true', link:'https://open.spotify.com/intl-pt/track/6yXWZScyOvoLvYU4idkPsz?si=8c954d00afd740f0', sobre: '' },
  { id: '3', titulo: 'LPT Zlatan - To de volta', capa: 'https://github.com/DavydKennyd/imagens-para-projeto/blob/main/assets/zlatan.png?raw=true', link:'https://open.spotify.com/intl-pt/track/2s7vtyL03FsuzbR2CXWIsc?si=7c7efa8ebdfd49ef', sobre: '' },
  { id: '4', titulo: 'Alee - Passado de um vilão', capa: 'https://github.com/DavydKennyd/imagens-para-projeto/blob/main/assets/1083007-caos_035708.png?raw=true', link:'https://open.spotify.com/intl-pt/track/5gXH6r92zVkhgP1BF73J4b?si=2a7eb15dc2d74715', sobre: ''},
  { id: '5', titulo: 'Link do zap - Ultima dança', capa: 'https://github.com/DavydKennyd/imagens-para-projeto/blob/main/assets/1189743-a-ultima-danca_190506.png?raw=true', link:'https://open.spotify.com/intl-pt/track/096gZM7wp5GKHBwtWY3d0z?si=9d61b179190a478d', sobre: ''},
  { id: '6', titulo: 'Brandão - De volta', capa: 'https://github.com/DavydKennyd/imagens-para-projeto/blob/main/assets/CEO-COVER-1.png?raw=true', link:'https://open.spotify.com/intl-pt/track/2fMm9PrJqhjphXdsNHNoQC?si=112117aa81b74a90', sobre: 'CEO aborda as vivências do artista em Fortaleza–CE, cidade natal e também o momento atual da vida e carreira do trapper. Entre as participações especiais estão os parceiros de selo Matuê, Teto e WIU, além de Alee. O disco também recebeu visualizers para cada faixa.'}
];

export default function PlaylistScreen() {
  const [musicaSelecionada, setMusicaSelecionada,] = useState<null | typeof musicasFavoritas[0]>(null);

  return (
    <ScrollView 
  style={styles.container} 
  contentContainerStyle={{ paddingBottom: 30 }}
  showsVerticalScrollIndicator={false} 
  keyboardShouldPersistTaps="handled"
>

      <Text style={styles.titulo}>🔥Playist trap🔥</Text>

      <FlatList
        data={musicasFavoritas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.botaoMusica} 
          onPress={() => {
            setMusicaSelecionada(item);
          }}
            >
            <Text style={styles.textoBotao}>{item.titulo}</Text>
          </TouchableOpacity>
        )}
      />

      {musicaSelecionada && (
        <View style={styles.capaContainer}>
          <Text style={styles.nomeMusica}>{musicaSelecionada.titulo}</Text>
        

        
        {musicaSelecionada.link && (

            <TouchableOpacity style={styles.botaoMusica} 
            onPress={() => {
                Linking.openURL(musicaSelecionada.link)}}>
            <Text style={styles.linkBotao}>OUVIR ESSA AGORA</Text>
            
          </TouchableOpacity>
            )}

        {musicaSelecionada.link && (

            <Link href={{
              pathname: "/sobreAlbuns",
              params: {id: musicaSelecionada.id}
            }} style={styles.botaoMusica}>
              <Text style={styles.linkBotao}>SOBRE O ÁLBUM</Text>
            </Link>
  
             )}
    

          <Image source={{ uri: musicaSelecionada.capa }} style={styles.capaImagem} />

        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: 'black',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    boxShadow: '',
    color: 'grey',
    textShadowColor: 'rgba(255, 0, 0, 0.6)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,

  },
  botaoMusica: {
    backgroundColor: 'grey',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 10,


    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  capaContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  nomeMusica: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    color: 'grey'
  },
  capaImagem: {
    width: 250,
    height: 250,
    borderRadius: 12,
  },
  linkMusica:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  linkBotao:{
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
  }
});
