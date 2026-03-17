import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [email, setEmail, ] = useState('');
  const [senha, setSenha, ] = useState('');

function handleLogin() {
    if (!email.trim()) {
      alert('digite seu e-mail*')
      return;
    }
    if (!senha.trim()) {
      alert('digite sua senha*')
      return;
    }
    alert ('login realizado com sucesso!');
  }

  return (
    <View style={styles.container}>
      <Text>Bem vindos a tela de login!</Text>
      
      <Image
        style={styles.logo}
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/1083/1083443.png' }}
      />

      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="digite seu e-mail"
        keyboardType="email-address"
        required
      />
      <TextInput
        style={styles.inputSenha}
        onChangeText={setSenha}
        value={senha}
        placeholder="digite sua senha"
        secureTextEntry={true}
        required
        
      />

      <TouchableOpacity style={styles.botao} onPress={handleLogin}>
        <Text style={styles.textoBotao}> login </Text>
      </TouchableOpacity>
      
      <TouchableOpacity>
      <Text style={{color: 'blue', marginTop: 20,}}>Esqueci minha senha!</Text>
      </TouchableOpacity>

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
  logo: {
    width: 100,
    height: 100,
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#d5dbe4c7',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
   inputSenha: {
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#d5dbe4c7',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  botao: {
    width: '80%',
    padding: 10,
    backgroundColor: '#e4c3e6',
    marginTop: 10,
    borderRadius: 3,
    alignItems: 'center',
  },
  textoBotao: {
    fontWeight: 'bold',
    fontSize: 15,
  }
});
