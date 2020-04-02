

import React from 'react';
import { Text, View, Button } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View>
            <Text>
                Que desea  hacer ?
            </Text>
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button title="Agregar productos" onPress={() => navigation.navigate('AddProductFlow')} />
                <Button title="Marcar productos como consumidos" onPress={() => navigation.navigate('MarkProductAsConsumed')} />
            </View>
        </View>
    );
}

export default Home