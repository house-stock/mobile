import React from 'react';
import { Button, NativeSyntheticEvent, NativeTouchEvent, StyleSheet, TouchableHighlight, View, Text } from 'react-native';

// interface ButtonProps {
//     onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void,
//     title: string
// }
const styles = StyleSheet.create({
    container: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 28,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginBottom:5
    },
    title: {
        fontSize: 17,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
    }
})
const CustomButton = ({ title, onPress }) => {
    return <TouchableHighlight style={styles.container} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
    </TouchableHighlight>
}
export default CustomButton