

import React from 'react';
import { Text, View, Button } from 'react-native';
import ProductsList from './productLists/ProductsList';
import UserProductService from '../../services/userProduct/UserProductService';

const ExpiredProducts = () => {
    return (
        <View >
            <Text>
                Productos vencidos
            </Text>
            <ProductsList getProducts={() => UserProductService.getExpiredProducts()} />
        </View>
    );
}

export default ExpiredProducts