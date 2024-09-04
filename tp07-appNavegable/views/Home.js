import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text } from 'react-native';
import Boton from '../components/Boton';
import Title from '../components/Title';
import React from 'react';

export default function Home({ route }) {
    const navigation = useNavigation();
    const { nombre = '', apellido = '' } = route.params || {};
    const saludo = "Hola " + nombre + " " + apellido + "!";

    return (
        <View style={styles.container}>
            <Title text={saludo} />
            <Boton text={"Iniciar sesión"} onPress={() => navigation.navigate('Login')} />
            <Boton text={"Registrarse"} onPress={() => navigation.navigate('Register')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',  
        width: '100%',
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
