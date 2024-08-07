import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import Boton from './src/components/Boton';
import ModalAgregarTarea from './src/components/Modal';
import ListaTareas from './src/components/ListaTareas';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [lista, setLista] = useState([]);

  const abrirModal = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Te damos la bienvenida a tu propia To-Do List :D</Text>
      <ModalAgregarTarea visible={modalVisible} setVisible={setModalVisible} setLista={setLista} />
      <ListaTareas lista={lista} setLista={setLista} />
      <Boton onClick={abrirModal} texto="Agregar Tarea" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
  },
});
