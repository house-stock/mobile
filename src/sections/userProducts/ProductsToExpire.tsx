

import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import ProductsList from '../../components/productLists/ProductsList';
import UserProductService from '../../services/userProduct/UserProductService';
import { UserProduct } from '../../domain/Product';

const ProductsToExpire = () => {
    //TODO: create custom hook
    const [products, setProducts] = useState<UserProduct[]>([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await UserProductService.getProductToExpire()
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
                Productos por vencer (1 mes)
            </Text>
            <ProductsList products={products} />
        </View>
    );
}

export default ProductsToExpire