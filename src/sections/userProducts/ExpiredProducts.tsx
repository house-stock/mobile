

import React, { useEffect, useState } from 'react';
import { Text, View, Button } from 'react-native';
import ProductsList from '../../components/productLists/ProductsList';
import UserProductService from '../../services/userProduct/UserProductService';
import { UserProduct } from '../../domain/Product';

const ExpiredProducts = () => {
    //TODO: create custom hook
    const [products, setProducts] = useState<UserProduct[]>([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await UserProductService.getExpiredProducts()
                setProducts(response)
            } catch (error) {
                console.log('Error getting the list of products', error)
            }
        }
        fetchProducts()
    }, [])

    return (
        <View >
            <Text>
                Productos vencidos
            </Text>
            <ProductsList products={products} />
        </View>
    );
}

export default ExpiredProducts