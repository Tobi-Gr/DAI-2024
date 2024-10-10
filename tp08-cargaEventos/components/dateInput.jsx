import React from 'react';
import { View, Text, TextInput } from 'react-native';

const DateInput = ({ fecha, setFecha }) => {
  const handleChange = (newDate) => {
    setFecha(newDate);
  };

  return (
    <View>
      <Text>Fecha de inicio:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="YYYY-MM-DD"
        value={fecha}
        onChangeText={handleChange}
      />
    </View>
  );
};

export default DateInput;
