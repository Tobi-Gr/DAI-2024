import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
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
      <ScrollView style={styles.listaContainer}>
        <ListaTareas lista={lista} setLista={setLista} />
      </ScrollView>
      <Boton onClick={abrirModal} texto="Agregar Tarea" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
  },
  listaContainer: {
    flex: 1,
    marginBottom: 20,
  },
});
