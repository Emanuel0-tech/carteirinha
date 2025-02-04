
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const COLORS = {
  primary: '#4F90D1',    
  background: '#F8F9FA', 
  white: '#fff',
  grayText: '#777',
  dark: '#333'
};



function LoginScreen({ navigation }) {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');

  function handleLogin() {
    navigation.navigate('MainTabs');
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerArea}>
        <Text style={styles.headerTitle}>Login</Text>
      </View>


      <ScrollView style={styles.contentArea}>

        <View style={styles.formCard}>
          <TextInput
            style={styles.input}
            placeholder="CPF"
            placeholderTextColor="#aaa"
            value={cpf}
            onChangeText={setCpf}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#aaa"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: COLORS.dark, marginTop: 10 }]}
            onPress={() => alert('Simulação de gov.br')}
          >
            <Text style={styles.buttonText}>Entrar com gov.br</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginTop: 20, alignSelf: 'center' }}
            onPress={() => navigation.navigate('Cadastro')}
          >
            <Text style={{ color: COLORS.primary }}>
              Não tem conta? Cadastre-se
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}


function CadastroScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [instituicao, setInstituicao] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');

  function handleReconhecimento() {
    navigation.navigate('Reconhecimento');
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerArea}>
        <Text style={styles.headerTitle}>Cadastro</Text>
      </View>

      <ScrollView style={styles.contentArea}>
        <View style={styles.formCard}>
          <TextInput
            style={styles.input}
            placeholder="Nome Completo"
            placeholderTextColor="#aaa"
            value={nome}
            onChangeText={setNome}
          />
          <TextInput
            style={styles.input}
            placeholder="CPF"
            placeholderTextColor="#aaa"
            value={cpf}
            onChangeText={setCpf}
          />
          <TextInput
            style={styles.input}
            placeholder="Data de Nascimento (dd/mm/aaaa)"
            placeholderTextColor="#aaa"
            value={nascimento}
            onChangeText={setNascimento}
          />
          <TextInput
            style={styles.input}
            placeholder="Instituição de Ensino"
            placeholderTextColor="#aaa"
            value={instituicao}
            onChangeText={setInstituicao}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#aaa"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirme sua Senha"
            placeholderTextColor="#aaa"
            secureTextEntry
            value={confirmSenha}
            onChangeText={setConfirmSenha}
          />

          <TouchableOpacity style={styles.button} onPress={handleReconhecimento}>
            <Text style={styles.buttonText}>RECONHECIMENTO FACIAL</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}


function ReconhecimentoScreen({ navigation }) {
  function handleFinish() {
    navigation.navigate('MainTabs');
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerArea}>
        <Text style={styles.headerTitle}>Reconhecimento Facial</Text>
      </View>

      <View style={[styles.contentArea, { alignItems: 'center' }]}>
        <View style={styles.fakeCamera}>
          <Text style={{ color: COLORS.grayText }}>[Câmera/Biometria]</Text>
        </View>

        <TouchableOpacity style={[styles.button, { marginTop: 20 }]} onPress={handleFinish}>
          <Text style={styles.buttonText}>RECONHECIMENTO FACIAL</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


function CarteirinhaScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerArea}>
        <Text style={styles.headerTitle}>Carteirinha</Text>
      </View>

      <ScrollView style={styles.contentArea}>
        <View style={{ alignItems: 'center', marginBottom: 20 }}>
          <Image
            source={{ uri: 'https://via.placeholder.com/100x100.png?text=Foto' }}
            style={styles.profileImage}
          />
          <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>
            AMANDA COSTA LIMA
          </Text>
          <Text style={{ color: 'green' }}>Biometria Coletada (✓)</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>Data de Nascimento:</Text>
          <Text style={styles.infoValue}>18/01/2006</Text>

          <Text style={styles.infoLabel}>CPF:</Text>
          <Text style={styles.infoValue}>400.289.229-01</Text>

          <Text style={styles.infoLabel}>Município/UF:</Text>
          <Text style={styles.infoValue}>União/PI</Text>
        </View>

        <View style={styles.bigCard}>
          <Text style={{ fontWeight: 'bold', marginBottom: 6 }}>DHE - Documento do Estudante</Text>
          <Text style={{ marginBottom: 2 }}>Nome: Amanda Costa Lima</Text>
          <Text>Instituição: Universidade XYZ</Text>
          <Text>Curso: Direito</Text>
          <Text>Validade: MARÇO DE 2025</Text>
        </View>
      </ScrollView>
    </View>
  );
}


function RecargasScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerArea}>
        <Text style={styles.headerTitle}>Recargas</Text>
      </View>

      <View style={styles.contentArea}>
        <Text style={{ fontSize: 16 }}>
          FALTA API MERCADO PAGO...
        </Text>
      </View>
    </View>
  );
}


const Tab = createBottomTabNavigator();
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          backgroundColor: '#fff',
          paddingBottom: 5
        }
      }}
    >
      <Tab.Screen
        name="Carteirinha"
        component={CarteirinhaScreen}
        options={{ title: 'Carteirinha' }}
      />
      <Tab.Screen
        name="Recargas"
        component={RecargasScreen}
        options={{ title: 'Recargas' }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Reconhecimento" component={ReconhecimentoScreen} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background
  },
  headerArea: {
    backgroundColor: COLORS.primary,
    paddingVertical: 18,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    alignItems: 'center'
  },
  headerTitle: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold'
  },
  contentArea: {
    flex: 1,
    padding: 20
  },
  formCard: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3 
  },
  input: {
    backgroundColor: '#eee',
    borderRadius: 5,
    marginVertical: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: COLORS.dark
  },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    paddingVertical: 12,
    alignItems: 'center'
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 16
  },
  fakeCamera: {
    width: 220,
    height: 220,
    backgroundColor: '#ddd',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  infoCard: {
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3
  },
  infoLabel: {
    marginTop: 6,
    fontWeight: 'bold',
    color: COLORS.dark
  },
  infoValue: {
    marginLeft: 10
  },
  bigCard: {
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 8,
    
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3
  }
});
