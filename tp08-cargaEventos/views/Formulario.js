import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text } from 'react-native';
import Boton from '../components/Boton';
import Title from '../components/Title';
import React, { useState } from 'react';
import CustomTextInput from '../components/textInput';
import NumberInput from '../components/numberInput'
import { getCategories, getLocations } from '../authService';

/*
   X "name": str,
   X "description": str,
   "id_event_category": int,
   "id_event_location": int,
   "start_date": datetime,
   X "duration_in_minutes": int,
   X  "price": int,
   "enabled_for_enrollment": bool,
   X "max_assistance": int,
   "id_creator_user": int, // pasa automatico
*/

export default function Formulario() {
    const navigation = useNavigation();
    const { nombre, setNombre } = useState("");
    const { descripcion, setDescripcion } = useState("");
    const { duracion, setDuracion } = useState("");
    const { precio, setPrecio } = useState("");
    const { asistenciaMax, setAsistenciaMax } = useState("");

    const { categories, setCategories } = useState([]);
    const { locations, setLocations } = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await getCategories();
                console.log(data);
                setCategories(data);
            } catch (error) {
                console.error('Error al cargar las categorías:', error);
            }
        };
        const fetchLocations = async () => {
            try {
                const data = await getLocations();
                console.log(data);
                setLocations(data);
            } catch (error) {
                console.error('Error al cargar las categorías:', error);
            }
        };
        fetchLocations();
        fetchCategories();
    }, []);


    return (
        <View style={styles.container}>
            <Title text="Crear un nuevo evento" />
            <CustomTextInput placeholder="Nombre" value={nombre} onChangeText={setNombre}/>
            <CustomTextInput placeholder="Descripción" value={descripcion} onChangeText={setDescripcion}/>
            <NumberInput placeholder="Duración en minutos" value={duracion} onChange={setDuracion}/>
            <NumberInput placeholder="Precio" value={precio} onChange={setPrecio}/>
            <NumberInput placeholder="Asistencia máxima" value={asistenciaMax} onChange={setAsistenciaMax}/>
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
