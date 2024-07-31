//Link copado para el estilo: https://codesandbox.io/s/react-todo-list-app-ijmut?from-embed
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, Modal, TouchableOpacity } from 'react-native';
import Boton from './src/components/Boton'; // Asegúrate de que la ruta sea correcta

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  // Estado para manejar el texto de la tarea
  const [[descripcion, tarea], setTarea] = useState('');

  // Función para abrir el modal
  const agregarTarea = () => {
    setModalVisible(true);
  }

  // Función para cerrar el modal
  const cerrarModal = () => {
    setModalVisible(false);
    // agregar la lógica para guardar la tarea
    console.log('Tarea agregada:', tarea); 
  }
  
  return (
    <View style={styles.container}>
      <Text>Te damos la bienvenida a tu propia To-Do List :D</Text>
      <br/>
      <Image
        source={'./assets/toDoList.png'}
        style={styles.image} 
      />
      <Boton texto="Agregar tarea" onClick={agregarTarea} />
      <StatusBar style="auto" />
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Agregar nueva tarea</Text>
          <TextInput
            style={styles.input}
            placeholder="Escribe la tarea aquí"
            value={tarea}
          />
          <TextInput
            style={styles.input}
            placeholder="Escribe una breve descripción"
            value={descripcion}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={cerrarModal}
          >
            <Text style={styles.buttonText} onPress={setTarea} >Agregar Tarea
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.buttonText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 500,  // Ajusta el tamaño según sea necesario
    height: 500, // Ajusta el tamaño según sea necesario
  },
  modalView: {
    margin: 100,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    width: '100%',
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
