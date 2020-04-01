
import React, { useState, useEffect, FC } from 'react';
import BarCodeScan from '../../components/barCodeScan/BarCodeScan';
import FillScanData from './steps/FillScanData'
import { createStackNavigator } from '@react-navigation/stack';
import ItemsQuantity from './steps/ItemsQuantity';
import FillProductData from './steps/FillProductData';

const Stack = createStackNavigator();

function AddProductFlow() {
    return (
        <Stack.Navigator initialRouteName="Scan" >
            <Stack.Screen name="Scan" component={BarCodeScan} />
            <Stack.Screen name="FillScanData" component={FillScanData} />
            <Stack.Screen name="ItemsQuantity" component={ItemsQuantity} />
            <Stack.Screen name="FillProductData" component={FillProductData} />
        </Stack.Navigator>
    );
}

export default AddProductFlow
