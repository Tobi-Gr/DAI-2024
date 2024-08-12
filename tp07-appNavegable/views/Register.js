import { StyleSheet, Text, View } from 'react-native';
import CustomTextInput from './components/TextInput';
import Boton from './components/Boton';
import Title from './components/Title';

export default function App() {
  return (
    <View style={styles.container}>
        <Title text={"Registrate"}/>
        <View style={styles.inputContainer}>
            <CustomTextInput placeholder="Nombre" />
            <CustomTextInput placeholder="Apellido" />
            <CustomTextInput placeholder="Usuario" />
            <CustomTextInput placeholder="Contraseña" />
        </View>
        <Boton text={"Registrate"}/>
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