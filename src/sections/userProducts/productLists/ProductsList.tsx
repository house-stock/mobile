

import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { UserProduct } from '../../../domain/Product';

interface ProductsListProps {
    getProducts: () => Promise<UserProduct[]>
}
const ProductsList = ({ getProducts }: ProductsListProps) => {
    const [products, setProducts] = useState<UserProduct[]>([])
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await getProducts()
                setProducts(response)
            } catch (error) {
                console.log('Error getting the list of products', error)
            }
        }
        fetchProducts()
    }, [])

    return <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {products.map(({ product, item }: UserProduct) => <View style={{ flexBasis:'50%', padding: '0.5em' }}>
            <View style={{ borderColor: 'black', borderWidth: 1 }}>
                <Text> {product.productData.name} ({product.scanData.data})</Text>
                <Text> {item.expiration} - {item.quantity}</Text>
            </View>
        </View>)
        }
    </View>
}
export default ProductsList