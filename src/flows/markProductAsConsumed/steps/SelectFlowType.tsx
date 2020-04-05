import React from 'react';
import { Text, View, Button } from 'react-native';
import { MarkAsConsumedNavigation } from '../MarkProductAsConsumed';
interface SelectFlowTypeProps {
    navigation: MarkAsConsumedNavigation
}
const SelectFlowType = ({ navigation }: SelectFlowTypeProps) => {
    return (
        <View>
            <Text>
                Que vas a hacer ?
            </Text>
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button title="Escanear producto" onPress={() => navigation.navigate('ScanProduct')} />
                <Button title="Buscar por nombre" onPress={() => navigation.navigate('SearchProductsByName')} />
            </View>
        </View>
    );
}

export default SelectFlowType