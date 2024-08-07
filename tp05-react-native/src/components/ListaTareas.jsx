import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Checkbox from './Checkbox'; // Asegúrate de que Checkbox esté adaptado para React Native

export default function ListaTareas({ lista, setLista }) {

  const onChangeStatus = (id, checked) => {
    const updateList = lista.map(item => ({
      ...item,
      terminado: item.id === id ? checked : item.terminado
    }));
    setLista(updateList);
  };

  const onClickRemoveItem = () => {
    const updateList = lista.filter(item => !item.terminado);
    setLista(updateList);
  };

  const tareas = lista.map(item => (
    <View key={item.id} style={styles.task}>
      <Checkbox
        checked={item.terminado}
        onChange={(checked) => onChangeStatus(item.id, checked)}
        data={item} // Asegúrate de pasar el objeto de datos completo
      />
      <View style={styles.taskDetails}>
        <Text style={styles.taskName}>{item.nombre}</Text>
        <Text>{item.descripcion}</Text>
      </View>
    </View>
  ));

  return (
    <View style={styles.container}>
      {lista.length ? tareas : <Text>No tasks</Text>}
      {lista.length ? (
        <TouchableOpacity style={styles.button} onPress={onClickRemoveItem}>
          <Text style={styles.buttonText}>Delete all done</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 20,
  },
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  taskDetails: {
    marginLeft: 10,
  },
  taskName: {
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
