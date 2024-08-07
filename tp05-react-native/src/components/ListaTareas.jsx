import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Boton from './Boton';
import Checkbox from './Checkbox'; // Asegúrate de que Checkbox esté adaptado para React Native

export default function ListaTareas({ lista, setLista }) {

  const cambiarEstado = (id, checked) => {
    const updateList = lista.map(item => ({
      ...item,
      terminado: item.id === id ? checked : item.terminado
    }));
    console.log("leés la función??");
    setLista(updateList);
  };

  const eliminarTarea = () => {
    const updateList = lista.filter(item => !item.terminado);
    setLista(updateList);
    console.log(updateList);
  };

  const tareas = lista.map(item => (
    <View key={item.id} style={styles.card}>
      <Text>{item.tarea}</Text>
      <Text>{item.descripcion}</Text>
      <View style={styles.buttonsContainer}>
        <Boton style={[styles.button, styles.secundaryButton]} textStyle={{color: "#246e46"}} onClick={eliminarTarea} texto={"Eliminar"}/>
        <Boton style={[styles.button, styles.primaryButton]} textStyle={{color: "#95edb5"}} onClick={cambiarEstado} texto={"Completada"}/>
      </View>
    </View>
  ));

  return (
    <View style={styles.container}>
      {lista.length ? tareas : <Text>No hay ninguna tarea</Text>}
      {lista.length ? (
        <TouchableOpacity style={styles.button} onClick={eliminarTarea}>
          <Text style={styles.button}>Borrar todas las tareas terminadas</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  card: {
    backgroundColor: "#95edb5",
    width: '20%',
    height: 'auto',
    marginBottom: 10,
    borderRadius: 18,
    padding: '1%'
  },
  taskDetails: {
    marginLeft: 10,
  },
  taskName: {
    fontWeight: 'bold',
  },
  button: {
    padding: 6,
    marginTop: 10,
    alignItems: 'center',
    color: 'rgb(20, 20, 20)',
    fontSize: 16,
    width: '45%'
  },
  primaryButton: {
    backgroundColor: "#246e46"
  },
  secundaryButton:{
    backgroundColor: 'transparent',
    borderColor: "#246e46",
    borderWidth: 2
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
