import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Boton from './Boton';

const Card = ({ nombre, descripcion, onClick }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{nombre}</Text>
      <Text style={styles.text}>{descripcion}</Text>
    </View>
  );
};
//botón para marcar como completado y eliminar


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#007BFF', // Cambia el color de fondo si es necesario
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
  titulo:
  {
    color: '#fff',
    fontSize: 18,
  }
});

export default Card;
