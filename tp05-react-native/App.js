import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Boton from './src/components/Boton'; // Asegúrate de que la ruta sea correcta

export default function App() {
  const agregarTarea = () => {
    console.log("funka !");
  }
  
  return (
    <View style={styles.container}>
      <Text>Accedé al banner de Google de hoy :D</Text>
      <Image
        source={require('./assets/google.png')}
        style={styles.image} // Agrega estilo a la imagen si es necesario
      />
      <Boton texto="Agregar tarea" onClick={agregarTarea} />
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
  image: {
    width: 200,  // Ajusta el tamaño según sea necesario
    height: 100, // Ajusta el tamaño según sea necesario
    marginVertical: 20, // Espacio vertical alrededor de la imagen
  },
});
