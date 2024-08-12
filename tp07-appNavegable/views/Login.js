import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomTextInput from './components/textInput'
import { NavigationContainer } from '@react-navigation/native';
import Boton from './components/Boton'
import Title from './components/Title';

export default function App() {
  return (
    <View style={styles.container}>
        <Title text={"Inicio sesión"} />
        <View style={styles.inputContainer}>
            <CustomTextInput placeholder="Usuario" />
            <CustomTextInput placeholder="Contraseña" />
        </View>
        <Boton text={"Iniciar sesión"}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        background: "#F8F9FD",
        width: '100%',
        backgroundColor: 'white',  
        borderWidth: 0,
        borderRadius: 20,  
        marginTop: 35, 
        padding: 30,
        shadowColor: '#cff0ff',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 1, 
        shadowRadius: 10,
      },
      inputContainer: {
        flex: 1,
        alignItems: 'space-between',
        marginBottom: 100,
        marginTop: 20
      }
});