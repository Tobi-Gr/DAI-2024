// import { RNDateTimePicker } from '@react-native-community/datetimepicker';
// import React, { useState } from 'react';
// import { View, TextInput, Text, StyleSheet } from 'react-native';

// const DateInput = ({ fecha, setFecha, placeholder }) => {
//   const [error, setError] = useState('');
  
//   // Función para formatear la fecha en formato dd/mm/yyyy
//   const formatDate = (date) => {
//     if (!date) return '';
//     const d = new Date(date);
//     const day = String(d.getDate()).padStart(2, '0'); // Añade un 0 si es menor a 10
//     const month = String(d.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11
//     const year = d.getFullYear();
//     return `${day}/${month}/${year}`;
//   };

//   // Función que maneja el cambio de texto en el input
//   const handleChange = (newDate) => {
//     setFecha(newDate);

//     // Validación del formato dd/mm/yyyy
//     const datePattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
//     if (newDate && !newDate.match(datePattern)) {
//       setError('Fecha no válida. Usa el formato dd/mm/yyyy');
//     } else {
//       setError('');
//     }
//   };

//   return (
//     <View>
//       <RNDateTimePicker />
//       {/* <TextInput
//         style={styles.input}
//         value={fecha}
//         placeholder={placeholder ? formatDate(placeholder) : ''}
//         onChangeText={handleChange}
//       />
//       {error ? <Text style={styles.errorText}>{error}</Text> : null} */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   input: {
//     width: '100%',
//     backgroundColor: 'white',
//     borderWidth: 1,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 20,
//     marginTop: 15,
//     shadowColor: '#0060DD',
//     shadowOffset: { width: 0, height: 10 },
//     shadowOpacity: 0.3,
//     shadowRadius: 10,
//     elevation: 5,
//     borderColor: 'transparent',
//     fontSize: 16,
//   },
//   errorText: {
//     color: 'red',
//     fontSize: 12,
//     marginTop: 5,
//   },
// });

// export default DateInput;

import React, { useState } from 'react';
import { View, Text, Button, Platform } from 'react-native';
import DateTimePicker from 'react-datetime-picker'; // Importamos el picker

const MyDateTimePicker = () => {
  const [date, setDate] = useState(new Date());  // Estado para la fecha seleccionada

  const onChange = (newDate) => {
    setDate(newDate);  // Actualizamos la fecha seleccionada
  };

  return (
    <View style={{ marginTop: 50, padding: 20 }}>
      <Text>Fecha y hora seleccionada: {date.toLocaleString()}</Text>
      
      <Button title="Seleccionar fecha y hora" onPress={() => setShow(true)} />
      
      {/* Usamos el DateTimePicker */}
      <DateTimePicker
        onChange={onChange}       // Función que se ejecuta cuando el valor cambia
        value={date}             // La fecha seleccionada actual
        format="y/MM/dd HH:mm:ss" // Formato de la fecha
        disableClock={true}      // Deshabilitar el reloj si solo quieres fecha
        minDate={new Date()}     // Fecha mínima seleccionable
        maxDate={new Date(2025, 12, 31)} // Fecha máxima
        locale="es"              // Establecer idioma
        clearIcon={null}         // Si quieres quitar el icono de borrar
        calendarIcon={null}      // Si quieres quitar el icono del calendario
      />
    </View>
  );
};

export default MyDateTimePicker;


