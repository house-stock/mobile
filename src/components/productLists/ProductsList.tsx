

import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { UserProduct, Product } from '../../domain/Product';

interface ProductsListProps {
    products: Product[]
}
const ProductsList = ({ products }: ProductsListProps) => {

    return <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {products.map(({ productData, scanData, item }: UserProduct) => <View style={{ flexBasis: '50%', padding: '0.5em' }}>
            <View style={{ borderColor: 'black', borderWidth: 1 }}>
                <Text> {productData.name} ({scanData.data})</Text>
                {!!item && <Text> {item.expiration} - {item.quantity}</Text>}
            </View>
        </View>)
        }
    </View>
}
export default ProductsList