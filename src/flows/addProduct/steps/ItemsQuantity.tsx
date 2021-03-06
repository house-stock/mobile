import React, { useState } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { AddProductNavigation, StackNavigatorAddProduct } from '../AddProductFlow';
import { RouteProp } from '@react-navigation/native';

interface ItemsQuantityProps {
    navigation: AddProductNavigation,
    route: RouteProp<StackNavigatorAddProduct, 'ItemsQuantity'>;
}

const ItemsQuantity = ({ navigation, route }: ItemsQuantityProps) => {
    const { data: { product } } = route.params;
    const [quantity, setQuantity] = useState<number>(1)

    const goToNextStep = () => {
        navigation.navigate(
            'FillProductData', {
            data: {
                product,
                userProductData: [{ id: 1, expiration: new Date(), quantity }]
            }
        })
    }
    const onChangeCustomQuantity = (newQuantity) => {
        setQuantity(Number.parseInt(newQuantity || 0, 10))
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
