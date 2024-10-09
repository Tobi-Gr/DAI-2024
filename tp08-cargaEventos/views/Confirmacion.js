import { useNavigation, useRoute } from '@react-navigation/native';
import { StyleSheet, View, Text } from 'react-native';
import React from 'react';

export default function Confirmacion() {
    const navigation = useNavigation();
    const route = useRoute(); // Get route at the top level
    const { eventoACrear } = route.params;

    // Log eventoACrear directly
    console.log(eventoACrear);

    return (
        <View style={styles.container}>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
