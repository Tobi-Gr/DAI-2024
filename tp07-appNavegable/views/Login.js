import { useNavigation } from '@react-navigation/native';
import CustomTextInput from '../components/textInput';
import { StyleSheet, View } from 'react-native';
import { loginUser } from '../authService';
import Title from '../components/Title';
import Boton from '../components/Boton';
import React from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navigation = useNavigation(); 

  const handleLogin = async () => {
    try {
      const credentials = { username, contrasena };
      const user = await loginUser(credentials);
      navigation.navigate('Home', { nombre: user.nombre, apellido: user.apellido});
    } catch (error) {
      alert('Error al iniciar sesión');
    }
  };
  return (
    <View style={styles.container}>
        <Title text={"Inicio sesión"} />
        <View style={styles.inputContainer}>
            <CustomTextInput placeholder="Usuario" value={username} onChangeText={setUsername} style={styles.inputContainer} />
            <CustomTextInput placeholder="Contraseña" value={contrasena} onChangeText={setContrasena} secureTextEntry style={styles.inputContainer} />
            <Button title="Iniciar Sesión" onPress={handleLogin} />
        </View>
        <Boton text={"Iniciar sesión"}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        background: "#F8F9FD",
        width: '100%',
        backgroundColor: 'white',  
        borderWidth: 0,
        borderRadius: 20,  
        marginTop: 35, 
        padding: 30,
        shadowColor: '#cff0ff',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 1, 
        shadowRadius: 10,
      },
      inputContainer: {
        flex: 1,
        alignItems: 'space-between',
        marginBottom: 100,
        marginTop: 20
      }
});