import React, { useState } from 'react';
import { View } from 'react-native';
import BarCodeScan from '../../../components/barCodeScan/BarCodeScan';
import ProductService from '../../../services/product/ProductService';
import { MarkAsConsumedNavigation } from '../MarkProductAsConsumed';


interface ScanProductProps {
    navigation: MarkAsConsumedNavigation
}

const ScanProduct = ({ navigation }: ScanProductProps) => {

    const onScan = async ({ data: barcode }) => {
        try {
            const product = await ProductService.getByBarcode(barcode)
            navigation.navigate('SelectConsumedProducts', { data: product })
        } catch (error) {
            console.log("Error getting productByBarCode", error)
        }
    }
    return <BarCodeScan onScan={onScan} />
}

export default ScanProduct