

import React from 'react';
import { Text, View, Button } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View>
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