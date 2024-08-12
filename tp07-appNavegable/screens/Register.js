import { StyleSheet, Text, View } from 'react-native';
import CustomTextInput from './../components/TextInput';
import Boton from './../components/Boton';

export default function App() {
  return (
    <View style={styles.container}>
      <CustomTextInput placeholder="Nombre" />
      <CustomTextInput placeholder="Apellido" />
      <CustomTextInput placeholder="Usuario" />
      <CustomTextInput placeholder="Contraseña" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    background: "#F8F9FD",
    borderRadius: 40,
    padding: 25,
    margin: 20,
  },
});