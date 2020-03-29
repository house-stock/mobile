import React, { useState, useEffect, FC } from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import { Product } from '../../../domain/Product';
import ProductService from '../../../services/product/ProductService';

const FillScanData = ({ route, navigation }) => {
    const { data } = route.params;
    const { scanData } = data
    const [productExists, setProductExists] = useState<boolean>(true)
    const [product, setProduct] = useState<Product>({
        scanData: scanData,
        productData: {
            name: ''
        }
    })
    useEffect(() => {
        const fetchData = async () => {
            try {
                const productResponse: Product = await ProductService.getByBarcode(scanData.data)
                if (!productResponse) {
                    setProductExists(false)
                } else {
                    // TODO: ask the user if this product is the correct
                    navigation.navigate('ItemsQuantity', { data: { ...data, ...productResponse } })
                }
            } catch (error) {
                console.log("Error getting the data of the barcode", scanData.data, JSON.stringify(error))
            }
        }
        fetchData();
    }, [])

    const onChangeName = (name) => {
        const newProduct = {
            ...product,
            productData: {
                ...product.productData,
                name
            }
        }
        setProduct(newProduct)
    }

    const addProduct = async () => {
        try {
            await ProductService.addProduct(product)
            navigation.navigate('ItemQuantity', { data: { ...data, ...product } })
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
