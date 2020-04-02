import React from 'react';
import { Text, View, Button } from 'react-native';

const SelectFlowType = ({ navigation }) => {
    return (
        <View>
            <Text>
                Que vas a hacer ?
            </Text>
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {/*TODO: <Button title="Escanear producto" onPress={() => navigation.navigate('')} /> */}
                <Button title="Buscar por nombre" onPress={() => navigation.navigate('SearchProductsByName')} />
            </View>
        </View>
    );
}

export default SelectFlowType