 import React, { useEffect, useState } from 'react';
 import { StyleSheet, Text, View, ScrollView } from 'react-native';
 import Boton from './src/components/Boton';
 import ModalAgregarTarea from './src/components/Modal';
 import ListaTareas from './src/components/ListaTareas';
 import AsyncStorage from '@react-native-async-storage/async-storage';
 const storageKey = "oszpkrTAOlUBiMh";
 export default function App() {
   const [modalVisible, setModalVisible] = useState(false);
   const [lista, setLista] = useState([]);
   useEffect(() => {
     const fetchData = async () => {
       const datosCargados = await leerDatos();
       if (Array.isArray(datosCargados)) {
         setLista(datosCargados);
       } else {
         setLista([]);
       }
     };
     fetchData();
   }, []);
   const leerDatos = async () => {
     try {
       const json = await AsyncStorage.getItem(storageKey);
       return json != null ? JSON.parse(json) : [];
     } catch (e) {
       console.log("Error cargando datos: ", e);
       return [];
     }
   };
   const guardarDatos = async (value) => {
     try {
         const json = JSON.stringify(value);
         await AsyncStorage.setItem(storageKey, json);
     } catch (e) {
         console.log("Error guardando datos: ", e);
     }
 };
   const abrirModal = () => {
     setModalVisible(true);
   };
   return (
     <View style={styles.container}>
       <Text style={styles.header}><b>Tu-To-Do List :D</b></Text>
       <ModalAgregarTarea guardarDatos={guardarDatos} visible={modalVisible} setVisible={setModalVisible} setLista={setLista} storageKey={storageKey} lista={lista}/>
       <ScrollView style={styles.listaContainer}>
         <ListaTareas lista={lista} setLista={setLista} guardarDatos={guardarDatos}/>
       </ScrollView>
       <Boton onClick={abrirModal} style = {{backgroundColor: '#246e46'}} textStyle={{color: "#95edb5", fontWeight: 'bold'}} texto="Agregar Tarea" />
     </View>
   );
 }
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#f8f9f9',
     padding: 20,
     justifyContent: 'space-between',
   },
   header: {
     fontSize: 24,
     marginBottom: 20,
     alignSelf: 'center',
  
   },
   listaContainer: {
     flex: 1,
     marginBottom: 20,
   },
 });
