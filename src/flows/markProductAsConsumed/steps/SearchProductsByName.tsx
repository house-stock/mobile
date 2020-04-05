import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import SearchProduct from '../../../components/searchProduct/SearchProduct';
import ProductService from '../../../services/product/ProductService';
import ProductsList from '../../../components/productLists/ProductsList';
import { Product } from '../../../domain/Product';
import { MarkAsConsumedNavigation } from '../MarkProductAsConsumed';

interface SearchProductByNameProps {
    navigation: MarkAsConsumedNavigation
}

const SearchProductByName = ({ navigation }: SearchProductByNameProps) => {
    const [products, setProducts] = useState<Product[]>([])
    const onSearchProduct = async (productName) => {
        try {
            const response = await ProductService.getByName(productName)
            setProducts(response)
        } catch (error) {
            console.log("Error finding products with name ", productName, error)
        }
    }

    const onPressProduct = (product: Product) => {
        navigation.navigate('SelectConsumedProducts', { data: product })
    }

    return (
        <View>
            <Text>
                Productos
            </Text>
            <SearchProduct searchProduct={onSearchProduct} />
            <View>
                <ProductsList products={products} onPressProduct={onPressProduct} />
            </View>
        </View>
    );
}

export default SearchProductByName