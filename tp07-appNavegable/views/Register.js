import { useNavigation } from '@react-navigation/native';
import CustomTextInput from '../components/textInput';
import { StyleSheet, Text, View } from 'react-native';
import { registerUser } from '../authService';
import Boton from '../components/Boton';
import Title from '../components/Title';

export default function Register() {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [username, setUsername] = useState('');
    const [contrasena, setContrasena] = useState('');
    const navigation = useNavigation();
  
    const handleRegister = async () => {
      try {
        const userData = { nombre, apellido, username, contrasena };
        await registerUser(userData);
        navigation.navigate('Login');
      } catch (error) {
        alert('Error al registrar');
      }
    }
    return (
      <View style={styles.container}>
        <Title text={"Registrate"}/>
        <CustomTextInput placeholder="Nombre" value={nombre} onChangeText={setNombre} style={styles.inputContainer} />
        <CustomTextInput placeholder="Apellido" value={apellido} onChangeText={setApellido} style={styles.inputContainer} />
        <CustomTextInput placeholder="Usuario" value={username} onChangeText={setUsername} style={styles.inputContainer} />
        <CustomTextInput placeholder="Contraseña" value={contrasena} onChangeText={setContrasena} secureTextEntry style={styles.inputContainer} />
        <Boton title="Registrarse" onPress={handleRegister} />
      </View>
    );
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'space-evenly',
    background: "#F8F9FD",
    borderRadius: 40,
    padding: 25,
    margin: 20,
  },
  inputContainer: {
    alignItems: 'space-evenly',
    marginBottom: 50,
    marginTop: 20
  }
});