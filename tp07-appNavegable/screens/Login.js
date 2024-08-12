import React from 'react';
import { StyleSheet, View } from 'react-native';
import Title from './components/Title';

export default function App() {
  return (
    <View style={styles.container}>
      <Title text={"Inicio sesión"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});