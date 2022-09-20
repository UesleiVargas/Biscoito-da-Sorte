import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native';

 function App(){

  let frases = [

    "1. “Até a jornada de mil milhas começa com um pequeno passo.” – Provérbio Japonês",
    
    "2. “Só há um tempo em que é fundamental despertar. Esse tempo é agora.” – Buda",
    
    "3. “A diferença entre ganhar e perder geralmente é não desistir.” – Walt Disney",
    
    "4. “O homem começa a morrer na idade em que perde o entusiasmo.” – Honoré de Balzac",
    
    "5. “A vida verdadeira é vivida quando pequenas mudanças acontecem.” – Leo Tolstoy",
    
    "6. “A sabedoria é basicamente honestidade de pensamento.” – Pam Brown",
    
    "7. “Mude a maneira como você vê as coisas e as coisas que você vê mudam.” – Wayne W. Dyer",
    
    "8. “Mude seus pensamentos e mude seu mundo.” – Norman Vincent Peale",
    
    "9. “Se você quiser mudar o mundo, pegue sua caneta e escreva.” – Martinho Lutero",
    
    "10. “Quem olha para fora, sonha; quem olha para dentro, acorda.” – Carl Jung"
    
    ]
    
  const [img, setImg] = useState(require('./src/biscoito.png'))
  const [textofrase, setTextfrase] = useState('Quebre o Biscoito e revele uma frase!')



  function quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * frases.length)

    setTextfrase(frases[numeroAleatorio])
    setImg(require('./src/biscoitoAberto.png'))
  }
function reiniciar(){
  setTextfrase('Quebre o Biscoito e revele uma frase!')
  setImg(require('./src/biscoito.png'))
}
  return (
    <View style={styles.container}>
      <Image style={styles.img}
      source={img}
      />
      
      <Text style={styles.textofrase}> {textofrase}</Text>
      
      <TouchableOpacity style={styles.botao} onPress={ quebraBiscoito }>
      <View style={styles.btnArea}>
        <Text style={styles.btnTexto}> Quebrar Biscoito</Text>
      </View>

      </TouchableOpacity>


      <TouchableOpacity style={[styles.botao, {marginTop: 15, borderColor: '#121212'}]} onPress={ reiniciar }>
      <View style={styles.btnArea}>
        <Text style={[styles.btnTexto, {color: '#121212'}]}> Reiniciar Biscoito</Text>
      </View>

      </TouchableOpacity>

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
  img:
  {
    width: 230,
    height:230,
  },
  textofrase:
  {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#dd7b22',
    margin: 30,
    textAlign: 'center',
  },
  
  botao:
  {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',

  },

  btnArea:
  {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  btnTexto:
  {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  },



});
export default App;