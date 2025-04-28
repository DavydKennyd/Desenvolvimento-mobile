import { View, Text, Image, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Link } from 'expo-router';




const musicasFavoritas = [
    {
      id: '1',
      titulo: 'Matuê - Crack com Mussilon',
      capa: 'https://github.com/DavydKennyd/imagens-para-projeto/blob/main/assets/photo_2024-09-09_19-33-30.png?raw=true',
      link: 'https://open.spotify.com/intl-pt/track/4ssHL7bSnOAE7HjiuLx6Co?si=5b2e7d2de15847b0',
      sobre: 'Uma das faixas mais emblemáticas de Matuê, "Crack com Mussilon" traz um flow acelerado e letras que abordam o sucesso, desafios da vida urbana e a ascensão no trap nacional.',
    },
    {
      id: '2',
      titulo: 'Franco The Sir - Bater',
      capa: 'https://github.com/DavydKennyd/imagens-para-projeto/blob/main/assets/1179656-e-assim-que-funciona_142703.png?raw=true',
      link: 'https://open.spotify.com/intl-pt/track/6yXWZScyOvoLvYU4idkPsz?si=8c954d00afd740f0',
      sobre: '"Bater" é um som vibrante de Franco The Sir que mistura batidas envolventes com letras que exaltam a superação pessoal e a conquista de novos espaços no cenário musical.',
    },
    {
      id: '3',
      titulo: 'LPT Zlatan - To de volta',
      capa: 'https://github.com/DavydKennyd/imagens-para-projeto/blob/main/assets/zlatan.png?raw=true',
      link: 'https://open.spotify.com/intl-pt/track/2s7vtyL03FsuzbR2CXWIsc?si=7c7efa8ebdfd49ef',
      sobre: '"Tô de Volta" marca o retorno de LPT Zlatan às suas raízes musicais, trazendo uma mistura de beats pesados e rimas que falam sobre resiliência e crescimento após desafios.',
    },
    {
      id: '4',
      titulo: 'Alee - Passado de um vilão',
      capa: 'https://github.com/DavydKennyd/imagens-para-projeto/blob/main/assets/1083007-caos_035708.png?raw=true',
      link: 'https://open.spotify.com/intl-pt/track/5gXH6r92zVkhgP1BF73J4b?si=2a7eb15dc2d74715',
      sobre: '"Passado de um Vilão" é uma faixa reflexiva de Alee, onde o artista narra suas vivências, erros e aprendizados, construindo uma narrativa intensa sobre redenção e amadurecimento.',
    },
    {
      id: '5',
      titulo: 'Link do Zap - Última Dança',
      capa: 'https://github.com/DavydKennyd/imagens-para-projeto/blob/main/assets/1189743-a-ultima-danca_190506.png?raw=true',
      link: 'https://open.spotify.com/intl-pt/track/096gZM7wp5GKHBwtWY3d0z?si=9d61b179190a478d',
      sobre: '"Última Dança" de Link do Zap traz uma vibe melancólica e emotiva, misturando romance e despedidas em um som com batida suave e letras profundas sobre ciclos que se encerram.',
    },
    {
      id: '6',
      titulo: 'Brandão - De volta',
      capa: 'https://github.com/DavydKennyd/imagens-para-projeto/blob/main/assets/CEO-COVER-1.png?raw=true',
      link: 'https://open.spotify.com/intl-pt/track/2fMm9PrJqhjphXdsNHNoQC?si=112117aa81b74a90',
      sobre: 'CEO aborda as vivências do artista em Fortaleza–CE, cidade natal e também o momento atual da vida e carreira do trapper. Entre as participações especiais estão os parceiros de selo Matuê, Teto e WIU, além de Alee. O disco também recebeu visualizers para cada faixa.',
    }
  ];
  
  

export default function SobreAlbunsScreen() {
  const { id } = useLocalSearchParams();

  const musica = musicasFavoritas.find((item) => item.id === id);

  if (!musica) {
    return <Text>Álbum não encontrado</Text>;
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: musica.capa }} style={styles.capaImagem} />
      <Text style={styles.titulo}>{musica.titulo}</Text>
        <View style={styles.sobreContainer}>
            <Text style={styles.sobre}>{musica.sobre}</Text>
        </View>
        <Link href='/musicas' style={styles.botaoMusica}> <Text style={styles.linkBotao}>VOLTA PARA MUSICAS</Text></Link>
    </View>
    
    


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  capaImagem: {
    width: 250,
    height: 250,
    borderRadius: 12,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'grey',
    textAlign: 'center',
    marginBottom: 10,
  },
  sobre: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
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
  linkBotao:{
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
},
sobreContainer: {
    backgroundColor: '#1a1a1a', // uma cor mais escura que preto para destacar
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
  },
  
});
