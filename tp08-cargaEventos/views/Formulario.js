import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text } from 'react-native';
import Boton from '../components/Boton';
import Title from '../components/Title';
import React from 'react';

export default function Formulario() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Title text="Crear un nuevo evento" />
            <Boton text={"Guardar"} onPress={() => navigation.navigate('Confirmacion')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5', // Fondo claro
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333', // Color del texto del título
        marginBottom: 20,
    },
    boton: {
        backgroundColor: '#4CAF50', // Color verde para el botón
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        elevation: 3, // Sombra para el botón
    },
    botonText: {
        color: '#fff', // Color del texto del botón
        fontSize: 18,
        textAlign: 'center',
    },
});
