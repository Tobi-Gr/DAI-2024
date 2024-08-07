import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Boton = ({ texto, onClick, style, textStyle }) => {
  return (
    <TouchableOpacity onPress={onClick} style={[styles.container, style]}>
      <Text style={[textStyle, styles.text]}>{texto}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#007BFF', // Cambia el color de fondo si es necesario
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
  },
});

export default Boton;
