
import React, { useState, useEffect } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { Product, UserProduct } from '../../../domain/Product';
import UserProductService from '../../../services/userProduct/UserProductService';
import DateProvider from '../../../domain/DateProvider';
import { RouteProp } from '@react-navigation/native';
import { MarkAsConsumedNavigation, StackNavigatorConsumed } from '../MarkProductAsConsumed';
interface SelectConsumedProductsProps {
    route: RouteProp<StackNavigatorConsumed, 'SelectConsumedProducts'>;
    navigation: MarkAsConsumedNavigation;
};


const SelectConsumedProducts = ({ route, navigation }: SelectConsumedProductsProps) => {
    const product: Product = Product.fromJson(route.params.data);
    const [userProducts, setUserProducts] = useState<UserProduct[]>([])
    const [consumedProducts, setConsumedProducts] = useState<UserProduct[]>([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await UserProductService.getAll({ barcode: product.barcode })
                setUserProducts(response)
            } catch (error) {
                console.log("Error getting user product with", error)
            }
        }
        fetchData()
    }, [])

    const addInConsumedProducts = (userProductToMove: UserProduct) => {
        // TODO: Logic to remove from the consumed Products list
        const newUserProducts = userProducts.filter(userProduct => userProduct.item.expiration !== userProductToMove.item.expiration)
        const newConsumedProducts = [userProductToMove, ...consumedProducts]
        setConsumedProducts(newConsumedProducts)
        setUserProducts(newUserProducts)
    }

    const finishFlow = async () => {
        try {
            const productsToModify = consumedProducts.map(consumedProduct => ({
                id: consumedProduct.item.id,
                barcode: consumedProduct.barcode,
                expiration: DateProvider.toApiFormat(consumedProduct.item.expiration),
                quantity: consumedProduct.quantity
            }))

            await UserProductService.markAsConsumed(productsToModify)
            //TODO: Add a feedback screen
            navigation.navigate('Home', undefined)
        } catch (error) {
            console.log("Error mark as consumed products", error)
        }
    }
    const onChangeQuantity = (id, newQuantity) => {
        const newConsumedProducts = consumedProducts.map(consumedProduct => {
            if (consumedProduct.item.id === id) {
                const copy = consumedProduct.clone()
                copy.quantity = Number.parseInt(newQuantity || 0, 10)
                return copy
            }
            return consumedProduct
        })
        setConsumedProducts(newConsumedProducts)
    }

    const disableButton = !!consumedProducts.find(consumedProduct => consumedProduct.quantity === 0)
    return <View>
        <Text>{product.barcode}</Text>
        <Text>{product.name}</Text>
        <Text>Presione los vencimientos consumidos</Text>
        {userProducts.map(userProduct => {
            return <Button
                key={userProduct.item.id}
                title={userProduct.expiration}
                onPress={() => addInConsumedProducts(userProduct)}
            />
        })}
        <Text>Productos a marcar como consumidos</Text>
        <Text>Indique cuantos consumio</Text>
        {consumedProducts.map(consumedProduct => {
            return <View key={consumedProduct.item.id}>
                <Text>{consumedProduct.expiration}</Text>
                <TextInput
                    value={consumedProduct.quantity.toString()}
                    onChangeText={(text) => onChangeQuantity(consumedProduct.item.id, text)}
                    keyboardType={'numeric'}
                />
            </View>
        })}

        {consumedProducts.length > 0 && <Button title="Finalizar" disabled={disableButton} onPress={finishFlow} />}
    </View>

}

export default SelectConsumedProducts