// import React, { useState } from 'react';
// import Boton from './Boton';
// import { View, Platform } from 'react-native';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css"; 

// const MyDatePicker = ({ value, onChange }) => {
//   const [date, setDate] = useState(value);
  
//   const handleConfirm = (date) => {
//     setDate(date);
//     onChange(date); 
//   };

//   if (Platform.OS === 'web') {
//     return (
//       <View>
//         <DatePicker
//           selected={date}
//           onChange={handleConfirm}
//           dateFormat="dd/MM/yyyy"
//           showTimeSelect
//           timeFormat="HH:mm"
//           timeIntervals={15}
//           className="custom-datepicker"
//         />
//       </View>
//     );
//   }
  
//   return (
//     <View>
//       <Boton
//         text={"Seleccionar fecha y hora"}
//         onPress={() => {
//           const newDate = new Date();
//           handleConfirm(newDate);
//         }}
//       />
//       <Text>{date.toLocaleString()}</Text>
//     </View>
//   );
  
// };
// const styles = StyleSheet.create({
//   datePickerWrapper: {
//     width: '100%',
//     backgroundColor: '#fff',
//     padding: 10,
//     borderRadius: 10,
//     boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
//     zIndex: 9999,
//   },
//   container: {
//     width: '100%',
//     padding: 10,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//   },
//   dateText: {
//     marginTop: 10,
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//     textAlign: 'center',
//   },
//   button: {
//     padding: 15,
//     backgroundColor: '#0060dd',
//     borderRadius: 8,
//     marginTop: 20,
//   },
// });

// export default MyDatePicker;

import React, { useState } from 'react';
import { View, Text, Button, Platform, StyleSheet } from 'react-native';
import DatePicker from 'react-datepicker'; // Para Web
import "react-datepicker/dist/react-datepicker.css"; // Estilos de react-datepicker

const MyDatePicker = ({ value, onChange }) => {
  const [date, setDate] = useState(value);

  const handleConfirm = (newDate) => {
    setDate(newDate);
    onChange(newDate); // Pasamos la nueva fecha al padre
  };

  if (Platform.OS === 'web') {
    // Si estamos en Web, usamos react-datepicker con los estilos integrados
    return (
      <View style={styles.datePickerWrapper}>
        <DatePicker
          selected={date}
          onChange={handleConfirm}
          dateFormat="dd/MM/yyyy"
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          customInput={<input className="react-datepicker-input" />}
          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
          }) => (
            <div className="header">
              <button onClick={decreaseMonth}>&lt;</button>
              <span>
                {date.toLocaleString('es-ES', {
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
              <button onClick={increaseMonth}>&gt;</button>
            </div>
          )}
        />
      </View>
    );
  }

  // Si estamos en móvil (Android/iOS), usamos un selector nativo
  return (
    <View style={styles.container}>
      <Button
        title="Seleccionar fecha y hora"
        onPress={() => {
          const newDate = new Date(); // DatePicker nativo
          handleConfirm(newDate);
        }}
        color="#0060dd"
      />
      <View style={styles.dateTimeWrapper}>
        <Text style={styles.dateText}>
          {date.toLocaleDateString()} <Text style={styles.timeText}>{date.toLocaleTimeString()}</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Estilo para el contenedor del picker en Web
  datePickerWrapper: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    zIndex: 9999,
    transition: 'box-shadow 0.3s ease-in-out',
  },
  // Estilo para el contenedor en móvil
  container: {
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    marginBottom: 30,
    alignItems: 'center',
    maxWidth: 500, // Asegura que no se estire demasiado en pantallas grandes
    marginHorizontal: 'auto', // Centra el contenedor
  },
  // Estilo del texto de la fecha y hora
  dateTimeWrapper: {
    marginTop: 15,
    flexDirection: 'row',  // Alinea la fecha y la hora horizontalmente
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  timeText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#0060dd', // Color distinto para la hora
    marginLeft: 10, // Espacio entre la fecha y la hora
  },
  // Estilo para el input de fecha en Web
  reactDatePickerInput: {
    width: '100%',
    padding: 12,
    borderRadius: 10,
    border: '1px solid #ccc',
    fontSize: 16,
    outline: 'none',
    backgroundColor: '#f9f9f9',
    transition: 'all 0.2s ease',
  },
  // Estilo del input cuando se enfoca
  reactDatePickerInputFocus: {
    borderColor: '#0060dd',
    backgroundColor: '#fff',
  },
  // Botón personalizado en móvil
  button: {
    width: '100%',
    paddingVertical: 12,
    backgroundColor: '#0060dd',
    borderRadius: 8,
    marginTop: 20,
    elevation: 3,
    shadowColor: '#0060dd',
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default MyDatePicker;
