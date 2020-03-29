import React, { useState, useEffect, FC } from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import { Product } from '../../../domain/Product';
import ProductService from '../../../services/product/ProductService';

const ItemsQuantity = ({ navigation, route }) => {
    const { data } = route.params;
    const [quantity, setQuantity] = useState<number>(1)

    const goToNextStep = () => {
        navigation.navigate(
            'FillProductData', {
            data: {
                ...data, userProductData: [{ id: 1, expiration: new Date(), quantity }]
            }
        })
    }
    const onChangeCustomQuantity = (newQuantity) => {
        setQuantity(Number.parseInt(newQuantity, 10))
    }
    return <View>
        <Text> Cuantos productos de este tipo vas a agregar ?</Text>
        <View>
            {[2, 3, 4].map(butonQuantity =>
                <Button
                    title={butonQuantity.toString()}
                    onPress={() => setQuantity(butonQuantity)}
                />
            )}
            <TextInput
                value={quantity.toString()}
                onChangeText={onChangeCustomQuantity}
                placeholder='Otra cantidad'
                keyboardType={'numeric'}
            />
        </View>
        <View>
            <Button title="Continuar" onPress={goToNextStep} disabled={quantity === 0} />
        </View>
    </View>
}

export default ItemsQuantity
