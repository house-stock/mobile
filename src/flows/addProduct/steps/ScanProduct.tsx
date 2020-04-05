import React from 'react';
import { View } from 'react-native';
import BarCodeScan from '../../../components/barCodeScan/BarCodeScan';
import { AddProductNavigation } from '../AddProductFlow';
import { Product } from '../../../domain/Product';

interface ScanProductProps {
    navigation: AddProductNavigation
}

const ScanProduct = ({ navigation }: ScanProductProps) => {
    const onScan = async (scanData) => {
        navigation.navigate('FillScanData', { data: { product: Product.fromJson({ scanData }) } })
    }
    return <BarCodeScan onScan={onScan} />
}

export default ScanProduct