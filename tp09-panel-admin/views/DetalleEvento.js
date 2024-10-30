import { useNavigation, useRoute } from '@react-navigation/native';
import { StyleSheet, View, Text } from 'react-native';
import Boton from '../components/Boton';
import Title from '../components/Title';
import React, { useState, useEffect } from 'react';

export default function DetalleEvento() {
    const route = useRoute();
    const { idEvento, token } = route.params;

    const getId = async () => {
        const endpoint = 'event/' + idEvento;
        const event = await getAuth(endpoint, token);
        console.log(event);
        return event;
    };

}