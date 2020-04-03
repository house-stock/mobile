

import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { UserProduct, Product } from '../../domain/Product';

interface ProductsListProps {
    products: Product[],
    onPressProduct?: (product: Product) => void
}
const ProductsList = ({ products, onPressProduct }: ProductsListProps) => {

    return <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {products.map((product: UserProduct) => {
            const { productData, scanData, item } = product
            return (<View style={{ flexBasis: '50%', padding: '0.5em' }}>
                <View style={{ borderColor: 'black', borderWidth: 1 }}>
                    <Text> {productData.name} ({scanData.data})</Text>
                    {!!item && <Text> {item.expiration} - {item.quantity}</Text>}
                    {onPressProduct && <Button title="V" onPress={() => onPressProduct(product)} />}
                </View>
            </View>)
        })
        }
    </View>
}
export default ProductsList