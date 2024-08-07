import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Modal } from 'react-native';

const ModalAnadirTarea = ({ visible, setVisible, lista, setLista }) => {
    // Cambiar el estado a un objeto para manejar tarea y descripcion
    const [tarea, setTarea] = useState('');
    const [descripcion, setDescripcion] = useState('');

    function cerrarModal() {
        setVisible(false);
        console.log(lista);
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
        <View style={styles.container}>
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
                        onChangeText={setTarea} // Actualizar el estado tarea
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Escribe una breve descripción"
                        value={descripcion}
                        onChangeText={setDescripcion} // Actualizar el estado descripcion
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={agregarTarea} // Cambiar de onClick a onPress
                    >
                        <Text style={styles.buttonText}>Agregar Tarea</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={cerrarModal} // Cambiar de onClick a onPress
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Cerrar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalView: {
        margin: 100,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
        width: '100%',
        paddingHorizontal: 10,
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

export default ModalAnadirTarea;
