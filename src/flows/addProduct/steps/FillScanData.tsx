import React, { useState, useEffect, FC } from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import { Product } from '../../../domain/Product';
import ProductService from '../../../services/product/ProductService';
import { AddProductNavigation, StackNavigatorAddProduct } from '../AddProductFlow';
import { RouteProp } from '@react-navigation/native';

interface ScanProductProps {
    navigation: AddProductNavigation,
    route: RouteProp<StackNavigatorAddProduct, 'FillScanData'>;
}

const FillScanData = ({ route, navigation }: ScanProductProps) => {
    const { data: { product: _product } } = route.params;
    const [productExists, setProductExists] = useState<boolean>(true)
    const [product, setProduct] = useState<Product>(_product)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const productResponse: Product = await ProductService.getByBarcode(product.barcode)
                if (!productResponse) {
                    setProductExists(false)
                } else {
                    // TODO: ask the user if this product is the correct
                    navigation.navigate('ItemsQuantity', { data: { product: productResponse } })
                }
            } catch (error) {
                console.log("Error getting the data of the barcode", product.barcode, JSON.stringify(error))
            }
        }
        fetchData();
    }, [])

    const onChangeName = (name) => {
        const copy = product.clone()
        copy.productData.name = name
        setProduct(copy)
    }

    const addProduct = async () => {
        try {
            await ProductService.addProduct(product)
            navigation.navigate('ItemsQuantity', { data: { product } })
        } catch (error) {
            console.error("Error trying to create a product", error)
        }
    }
    return <View>
        {productExists
            ? <Text>Loading</Text>
            : <View>
                <TextInput
                    value={product.productData.name}
                    onChangeText={onChangeName}
                    placeholder={'Nombre'}
                //style={styles.input}
                />
                <Button title="Continuar" onPress={addProduct} disabled={product.productData.name === ''} />

            </View>
        }

    </View>
}

export default FillScanData
