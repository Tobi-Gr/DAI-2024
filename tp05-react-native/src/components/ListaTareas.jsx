import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Boton from './Boton';

export default function ListaTareas({ lista, setLista, guardarDatos }) {

  const cambiarEstado = (id, checked) => {
    const updateList = lista.map(item => ({
      ...item,
      terminado: item.id === id ? checked : item.terminado
    }));
    setLista(updateList);
    guardarDatos(updateList);
  };
  
  const eliminarTarea = (id) => { //si quiere eliminar una que no está completada le aparece una alerta preguntandole si es posta o se equivocó
    const updateList = lista.filter(item => item.id !== id);
    setLista(updateList);
    guardarDatos(updateList);
  };

  const tareas = lista.map(item => (
    <View key={item.id} style={styles.card}>      
      <Text style={item.terminado ? styles.tareaTerminada : styles.tarea}>{item.tarea}</Text>
      <Text>{item.descripcion}</Text>
      <View style={styles.buttonsContainer}>
        <Boton style={[styles.button, styles.secundaryButton]} textStyle={{color: "#246e46"}} onClick={() => eliminarTarea(item.id)} texto={"Eliminar"}/>
        <Boton style={[styles.button, styles.primaryButton]} textStyle={{color: "#95edb5"}} onClick={() => cambiarEstado(item.id, !item.terminado)} texto={"Completada"}/>
      </View>
    </View>
  ));

  return (
    <View style={styles.container}>
      {lista.length ? tareas : <Text style={styles.text}>Agrega tu próxima tarea!</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  text: {
    fontSize: 18,
  },
  card: {
    backgroundColor: "#95edb5",
    width: '20%',
    height: 'auto',
    marginBottom: 10,
    borderRadius: 18,
    padding: '1%',
  },
  tarea: {
    fontWeight: 'bold',
    fontSize: 18,
    margin: 1.5
  },
  tareaTerminada: {
    fontWeight: 'bold',
    fontSize: 18,
    margin: 1.5,
    textDecorationLine: 'line-through',
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
