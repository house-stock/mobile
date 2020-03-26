
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import BarCodeScan from '../../components/barCodeScan/BarCodeScan';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ProductData } from '../../domain/Product';
import ProductService from '../../services/product/ProductService';


const initialState = {
    name: '',
    expiration: new Date(),
    quantity: '1'
}
export default function AddProductFlow() {
    const [scanData, setScanData] = useState(null) //{ data: '3424234' }
    const [showDatePicker, setShowDatePicker] = useState(false)
    const [productData, setProductData] = useState<ProductData>(initialState)
    const onScan = async (newScanData) => {
        try {
            const { product } = await ProductService.getByBarcode(newScanData.data)
            setProductData(product)
            setScanData(newScanData)
        } catch (error) {
            console.log("Error getting the data of the barcode", JSON.stringify(error))
        }
    }
    const updateProductData = (key, value) => {
        const newProductData = {
            ...productData,
            [key]: value
        }
        setProductData(newProductData)
    }
    const onChangeName = (text) => {
        updateProductData('name', text)
    }
    const onChangeQuantity = (text) => {
        updateProductData('quantity', text)
    }

    const onChangeDate = (event, selectedDate) => {
        setShowDatePicker(false)
        updateProductData('expiration', selectedDate)
    };
    const addProduct = async () => {
        try {
            await ProductService.addProduct(productData)
            setProductData(initialState)
            setScanData(null)
        } catch (error) {
            console.error('Error trying to add a product', error)
        }
    }
    return <>
        {
            !scanData
                ? <BarCodeScan onScan={onScan} />
                : <View style={{ display: 'flex', padding: 15 }}>
                    <Text> El codigo de barra es: {scanData.data}</Text>
                    <TextInput
                        value={productData.name}
                        onChangeText={onChangeName}
                        placeholder={'Nombre'}
                        style={styles.input}
                    />
                    <TextInput
                        value={productData.quantity}
                        onChangeText={onChangeQuantity}
                        placeholder={'Cantidad'}
                        keyboardType={'numeric'}
                        style={styles.input}
                    />
                    {/* TODO: in the future we will render a list of expiration and quantity in above */}
                    <Button onPress={() => setShowDatePicker(true)} title="Ingresar vencimiento" />
                    {productData.expiration &&
                        <Text>
                            El vencimiento seleccionado es el {productData.expiration.getDate()}/{productData.expiration.getMonth()}/{productData.expiration.getFullYear()}
                        </Text>
                    }
                    {showDatePicker && <DateTimePicker
                        testID="dateTimePicker"
                        value={productData.expiration}
                        mode='date'
                        is24Hour={true}
                        display="default"
                        onChange={onChangeDate}
                    />}
                    <Button onPress={addProduct} title="Agregar" />
                </View>}

    </>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        borderRadius: 5
    },
});
