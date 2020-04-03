
import React, { useState, useEffect } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { Product, UserProduct } from '../../../domain/Product';
import UserProductService from '../../../services/userProduct/UserProductService';


const SelectConsumedProducts = ({ route }) => {
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
        const newUserProducts = userProducts.filter(userProduct => userProduct.item.expiration !== userProductToMove.item.expiration)
        const newConsumedProducts = [userProductToMove, ...consumedProducts]
        setConsumedProducts(newConsumedProducts)
        setUserProducts(newUserProducts)
    }

    const finishFlow = async () => {
        try {
            //TODO : map array as 
            // export type UserProduct = {
            //     barcode: string
            //     expiration: string
            //     quantity: number
            //     userId: string
            // }
            await UserProductService.markAsConsumed(consumedProducts)
        } catch (error) {
            console.log("Error mark as consumed products",error)
        }
    }

    return <View>
        <Text>{product.barcode}</Text>
        <Text>{product.name}</Text>
        <Text>Presione los vencimientos consumidos</Text>
        {userProducts.map(userProduct => {
            return <Button title={userProduct.expiration} onPress={() => addInConsumedProducts(userProduct)} />
        })}
        <Text>Productos a marcar como consumidos</Text>
        <Text>Indique cuantos consumio</Text>
        {consumedProducts.map(consumedProduct => {
            return <View>
                <Text>{consumedProduct.expiration}</Text>
                <TextInput value={consumedProduct.item.quantity.toString()} onChangeText={(e) => console.log("change", e)} />
            </View>
        })}

        {consumedProducts.length > 0 && <Button title="Finalizar" onPress={finishFlow} />}
    </View>

}

export default SelectConsumedProducts