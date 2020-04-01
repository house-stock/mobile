

import React from 'react';
import { Text, View, Button } from 'react-native';
import ProductsList from './productLists/ProductsList';
import UserProductService from '../../services/userProduct/UserProductService';

const ProductsToExpire = () => {
    return (
        <View >
            <Text>
                Productos por vencer (1 mes)
            </Text>
            <ProductsList service={() => UserProductService.getProductToExpire()} />
        </View>
    );
}

export default ProductsToExpire