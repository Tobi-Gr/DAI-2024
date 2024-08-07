import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Modal } from 'react-native';
import Boton from './Boton';

const ModalAnadirTarea = ({visible, setVisible, lista, setLista}) => {
    const [[descripcion, tarea], setTarea] = useState('');
    function cerrarModal(){
        setVisible(false);
    }

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
          />
          <TextInput
            style={styles.input}
            placeholder="Escribe una breve descripción"
            value={descripcion}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={cerrarModal}
          >
            <Text style={styles.buttonText} onPress={setTarea} >Agregar Tarea
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setVisible(false)}
          >
            <Text style={styles.buttonText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};
//botón para marcar como completado y eliminar


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }
});

export default ModalAnadirTarea;
