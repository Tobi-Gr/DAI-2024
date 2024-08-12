import { StyleSheet, Text, View } from 'react-native';
import CustomTextInput from './components/textInput';

export default function App() {
  return (
    <View style={styles.container}>
      <CustomTextInput placeholder="funciona :)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    background: "#F8F9FD",
    borderRadius: 40,
    padding: 25,
    margin: 20,
  },
});