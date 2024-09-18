import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Boton from '../components/Boton';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Index() {
    const navigation = useNavigation();
    const route = useRoute();
    const { nombre, apellido = '' } = route.params; // Default empty string for apellido

    return (
        <View style={styles.container}>
            <Text style={styles.title}>¡Bienvenido, {nombre} {apellido}!</Text>
            <Text style={styles.subtitle}>Has iniciado sesión exitosamente.</Text>
            <Boton text={"Crear nuevo evento"} onPress={() => navigation.navigate('Formulario')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FD',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#555',
        marginBottom: 30,
        textAlign: 'center',
    },
});
