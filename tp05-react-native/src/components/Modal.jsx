import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Modal } from 'react-native';

const ModalAgregarTarea = ({ visible, setVisible, setLista }) => {
    const [tarea, setTarea] = useState('');
    const [descripcion, setDescripcion] = useState('');

    function cerrarModal() {
        setVisible(false);
    }

    const agregarTarea = () => {
        if (tarea && descripcion) {
          setLista(prevLista => [
            ...prevLista,
            { id: Math.random().toString(), tarea, descripcion, terminado: false },
          ]);
          setTarea('');
          setDescripcion('');
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
                <Text style={styles.modalText}>Agregar nueva tarea</Text>
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
                    style={styles.button}
                    onPress={agregarTarea}
                >
                    <Text style={styles.buttonText}>Agregar Tarea</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={cerrarModal}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Cerrar</Text>
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
        padding: 20,
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
    button: {
        backgroundColor: '#2196F3',
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default ModalAgregarTarea;
