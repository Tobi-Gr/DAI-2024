import { createNavigatorFactory, useNavigation, useRoute } from '@react-navigation/native';
import { StyleSheet, View, Text } from 'react-native';
import { postAuth } from './../authService';
import React from 'react';
import Title from '../components/Title';
import Boton from '../components/Boton';

export default function Confirmacion() {
    const navigation = useNavigation();
    const route = useRoute(); 
    const { eventoACrear, token } = route.params;

    const guardarEvento = async () => {
        if(eventoACrear === null){
            console.error("Error al subir evento: ", error)
        }else{
            postAuth('event/', eventoACrear, token)
        }
    };

    return (
        <View style={[styles.boxShadow, styles.container]}>
            <Title text={"¿Querés publicar este evento?"}/>
            <View style={styles.datosEvento}>
                {Object.entries(eventoACrear).map(([key, value]) => (
                    <Text key={key} style={styles.text}>
                        <Text style={styles.text}>{`${key}: `}</Text>
                        {key === 'Localidad' || key === 'Categoria' ? value.name : value}
                    </Text>
                ))}
            </View>
            <Boton text={'No'} onPress={()=> navigation.navigate("Formulario")}/>
            <Boton text={'Si'} onPress={guardarEvento}/> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        marginVertical: 4,
        fontWeight: 'bold',
        color: 'white'
    },
    datosEvento: {
        backgroundColor: 'rgb(16, 137, 211)',
        borderRadius: '5%',
        display: 'flex',
        justifyContent: 'flex-start',
        padding: 25,
        shadowOffset: '1%'
    }, 
    boxShadow: {
        shadowColor: "grey",
        shadowOffset: {
          width: 6,
          height: 6,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 16,
      },
});
