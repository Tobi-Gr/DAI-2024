//Link copado para el estilo: https://codesandbox.io/s/react-todo-list-app-ijmut?from-embed
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Button } from 'react-native';
import Boton from './src/components/Boton';
import ModalAgregarTarea from './src/components/Modal';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  // Estado para manejar el texto de la tarea
  const [[descripcion, tarea], setTarea] = useState('');
  const [lista, setLista] = useState([]);

  const AgregarTarea = itemAAnadir => {
    setList([...lista, itemAAnadir]);
  };

  // Función para abrir el modal
  const abrirModal = () => {
    setModalVisible(true);
  }
  
  return (
    <View style={styles.container}>
      <Text>Te damos la bienvenida a tu propia To-Do List :D</Text>
      <ModalAgregarTarea visible={modalVisible} setVisible={setModalVisible} lista={lista} setLista={setLista}/>
      {/* <Image
        source={'./assets/toDoList.png'}
        style={styles.image} 
      /> */}
      <Button onPress={abrirModal} title="aaaaaa"><Text>modal</Text></Button>
      {/* <Boton texto="Agregar tarea" onPress={() => console.log("abrir modal")} /> */}
      
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
    backgroundColor: "white",
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
