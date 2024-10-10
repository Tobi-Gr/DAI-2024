import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Boton from '../components/Boton';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getEventos } from '../authService';

export default function Index() {
    const navigation = useNavigation();
    const route = useRoute();
    const { nombre, token, id } = route.params;
    console.log('llegó el token??', token)
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        const fetchEventos = async () => {
            try {
                const data = await getEventos(token);
                setEventos(data);
            } catch (error) {
                console.error('Error al cargar los eventos:', error);
            }
        };
        fetchEventos();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>¡Bienvenido, {nombre}!</Text>
            <Text style={styles.subtitle}>Has iniciado sesión exitosamente.</Text>
            <Text style={styles.title}>Próximos Eventos</Text>
            <FlatList
                data={eventos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.eventContainer}>
                        <Text style={styles.eventTitle}>{item.name}</Text>
                        <Text>{item.start_date}</Text>
                    </View>
                )}
                contentContainerStyle={styles.listContainer}
            />
            <Boton text={"Crear nuevo evento"} onPress={() => navigation.navigate('Formulario', { token: token, id: id })} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FD',
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
    listContainer: {
        paddingBottom: 20,
    },
    eventContainer: {
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 5,
        marginBottom: 10,
        elevation: 1,
    },
    eventTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});
