import React, { useState, useEffect, FC } from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import { Product, Item } from '../../../domain/Product';
import DateTimePicker from '@react-native-community/datetimepicker';
import UserProductService from '../../../services/userProduct/UserProductService';
import { AddProductNavigation, StackNavigatorAddProduct } from '../AddProductFlow';
import { RouteProp } from '@react-navigation/native';

const UserProduct = ({ product, onChangeExpiration }) => {
    const [showDatePicker, setShowDatePicker] = useState(false)

    const onChangeDate = (event, selectedDate) => {
        onChangeExpiration(product.id, selectedDate)
        setShowDatePicker(false)
    };

    return (
        <View>
            <Button onPress={() => setShowDatePicker(true)} title="Ingresar vencimiento" />
            {!!product.expiration &&
                <Text>El vencimiento seleccionado es el {product.expiration.getDate()}/{product.expiration.getMonth() + 1}/{product.expiration.getFullYear()}</Text>
            }
            {showDatePicker && <DateTimePicker
                testID="dateTimePicker"
                value={product.expiration}
                mode='date'
                is24Hour={true}
                display="default"
                onChange={onChangeDate}
            />}
            <Text>Cantidad: {product.quantity}</Text>
        </View>)
}

interface FillProductDataProps {
    navigation: AddProductNavigation,
    route: RouteProp<StackNavigatorAddProduct, 'FillProductData'>;
}
const FillProductData = ({ navigation, route }: FillProductDataProps) => {
    const { data: { product, userProductData } } = route.params;
    const [items, setItems] = useState<Item[]>(userProductData)
    const addProduct = () => {
        try {
            UserProductService.add({
                barcode: product.barcode,
                items: items
            })
            // TODO: add a feedback message
            navigation.navigate('AddProductSuccessFeedback', { data: { product, userProductData } })
        } catch (error) {
            console.log('error trying to add a user product', error)
        }
    }

    const onChangeExpiration = (id, newDate) => {
        const newItems = items.map(item => {
            if (item.id === id) {
                return { ...item, expiration: newDate }
            }
            return item
        })

        setItems(newItems)
    }
    return <View style={{ display: 'flex', padding: 15 }}>
        <Text>{product.name}</Text>
        <Text> El codigo de barra es: {product.barcode}</Text>
        {items.map(userProduct => <UserProduct product={userProduct} onChangeExpiration={onChangeExpiration} />)}
        <Button onPress={addProduct} title="Finalizar" />
    </View>
}

export default FillProductData
