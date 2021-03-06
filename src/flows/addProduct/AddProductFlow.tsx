
import React from 'react';
import FillScanData from './steps/FillScanData'
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import ItemsQuantity from './steps/ItemsQuantity';
import FillProductData from './steps/FillProductData';
import AddProductSuccessFeedback from './steps/AddProductSuccessFeedback';
import { CompositeNavigationProp } from '@react-navigation/native';
import { ScanProductsNavigation } from '../../sections/scanProducts/ScanProducts';
import { Product, Item } from '../../domain/Product';
import ScanProduct from './steps/ScanProduct';

export type StackNavigatorAddProduct = {
    Scan: undefined;
    ItemsQuantity: { data: { product: Product } };
    FillScanData: { data: { product: Product } };
    FillProductData: { data: { product: Product, userProductData: Item[] } };
    AddProductSuccessFeedback: { data: { product: Product, userProductData: Item[] } };
};

export type AddProductNavigation = CompositeNavigationProp<
    StackNavigationProp<ScanProductsNavigation, 'AddProductFlow'>,
    StackNavigationProp<StackNavigatorAddProduct>>

const Stack = createStackNavigator<StackNavigatorAddProduct>();

function AddProductFlow() {
    return (
        <Stack.Navigator initialRouteName="Scan" >
            <Stack.Screen name="Scan" component={ScanProduct} options={{ title: 'Agregar producto - Escanear' }} />
            <Stack.Screen name="FillScanData" component={FillScanData} options={{ title: 'Informacion del Producto' }} />
            <Stack.Screen name="ItemsQuantity" component={ItemsQuantity} options={{ title: 'Cantidad' }} />
            <Stack.Screen name="FillProductData" component={FillProductData} options={{ title: 'Vencimientos' }} />
            <Stack.Screen name="AddProductSuccessFeedback" component={AddProductSuccessFeedback} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default AddProductFlow
