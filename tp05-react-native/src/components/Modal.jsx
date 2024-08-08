 import React, { useState } from 'react';
 import { StyleSheet, Text, TextInput, View, TouchableOpacity, Modal } from 'react-native';
 import AsyncStorage from '@react-native-async-storage/async-storage';
 const ModalAgregarTarea = ({ visible, setVisible, setLista, lista, guardarDatos }) => {
     const [tarea, setTarea] = useState('');
     const [descripcion, setDescripcion] = useState('');
     function cerrarModal() {
         setVisible(false);
     }
     const agregarTarea = () => {
         if (tarea && descripcion) {
           const nuevaTarea = { id: Math.random().toString(), tarea, descripcion, terminado: false };
           const nuevaLista = [...lista, nuevaTarea];
           setLista(nuevaLista);
           setTarea('');
           setDescripcion('');
           guardarDatos(nuevaLista);
           setVisible(false);
         }
     };
     return (
        <Modal
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                setVisible(!visible);
            }}
        >
            <View style={styles.modalView}>
                    <Text style={styles.modalText}><b>Agregar nueva tarea</b></Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Escribe la tarea aquí"
                        value={tarea}
                        onChangeText={setTarea}
                        />
                    <TextInput
                        style={styles.input}
                        placeholder="Escribe una breve descripción"
                        value={descripcion}
                        onChangeText={setDescripcion}
                        />
                        <TouchableOpacity
                            style={styles.buttonPrincipal}
                            onPress={agregarTarea}
                            >
                            <Text style={styles.buttonTextP}>Agregar Tarea</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={cerrarModal}
                            style={styles.buttonSecundary}
                            >
                            <Text style={styles.buttonTextS}>Cerrar</Text>
                        </TouchableOpacity>
                    
            </View>
        </Modal>
     );
 };
 const styles = StyleSheet.create({
    modalView: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: 'rgba(0, 0, 0, 0.5)',
         padding: 250,
     },
     modalText: {
         marginBottom: 15,
         textAlign: 'center',
         color: 'white',
         fontSize: 18,
     },
     input: {
         height: 40,
         borderColor: 'gray',
         borderWidth: 1,
         marginBottom: 15,
         width: '100%',
         paddingHorizontal: 10,
         backgroundColor: 'white',
     },
     buttonPrincipal: {
         backgroundColor: '#246e46',
         borderRadius: 10,
         padding: 10,
         marginVertical: 5,
         width: '50%',
         alignItems: 'center',
     },
     buttonSecundary:
     {
        backgroundColor: '#95edb5',
         borderRadius: 10,
         padding: 10,
         marginVertical: 5,
         width: '50%',
         alignItems: 'center',
     },
     buttonTextP: {
         color: '#95edb5',
         fontSize: 16,
     },
     buttonTextS: {
        color: '#246e46',
        fontSize: 16,
    },
 });
 export default ModalAgregarTarea;