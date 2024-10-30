import { useNavigation, useRoute } from '@react-navigation/native';
import { StyleSheet, View, Text } from 'react-native';
import Boton from '../components/Boton';
import Title from '../components/Title';
import React, { useState, useEffect } from 'react';

export default function DetalleEvento() {
    const route = useRoute();
    const { idEvento, token } = route.params;

    const getEvent = async () => {
        const endpoint = 'event/' + idEvento;
        const event = await getAuth(endpoint, token);
        console.log(event);
        return event;
    };
    return (
        <View style={[styles.boxShadow, styles.container]}>
            <Title text={"¿Querés publicar este evento?"}/>
            <View style={styles.datosEvento}>
                {Object.entries(getEvent()).map(([key, value]) => (
                    <Text key={key} style={styles.text}>
                        <Text style={styles.text}>{`${key}: ${value}`}</Text>
                    </Text>
                ))}
            </View>
            <Boton style={styles.no} text={'Atrás'} onPress={() => navigation.navigate('DetalleEvento', { token: token, id: id, idEvent: item.id })}/>
            <Boton style={styles.si} text={'Inscribirse'} onPress={guardarEvento}/> 
        </View>
    );

}