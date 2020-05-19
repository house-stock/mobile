

import React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { StackNavigatorUserProducts } from './UserProducts';

interface HomeProps {
    navigation: NavigationProp<StackNavigatorUserProducts, 'Home'>,
}

const Home = ({ navigation }: HomeProps) => {
    return (
        <View style={{ padding: 5 }}>
            <Text>
                Tus productos
            </Text>
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button title="Todos" onPress={() => navigation.navigate('AllProducts')} />
                <Button title="Por vencer" onPress={() => navigation.navigate('ProductsToExpire')} />
                <Button title="Vencidos" onPress={() => navigation.navigate('ExpiredProducts')} />
                <Button title="Lista del super" onPress={() => { }} />
            </View>
        </View>
    );
}

export default Home