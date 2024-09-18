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
            <Boton text={"Guardar"} onPress={() => navigation.navigate('Confirmacion')}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{

    }
})