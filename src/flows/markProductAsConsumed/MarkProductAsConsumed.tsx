
import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import SelectFlowType from './steps/SelectFlowType';
import SearchProductsByName from './steps/SearchProductsByName';
import SelectConsumedProducts from './steps/SelectConsumedProducts';
import ScanProduct from './steps/ScanProduct';
import { Product } from '../../domain/Product';
import { CompositeNavigationProp } from '@react-navigation/native';
import { ScanProductsNavigation } from '../../sections/scanProducts/ScanProducts';
import MarkAsConsumedSuccessFeedback from './steps/MarkAsConsumedSuccessFeedback';

export type StackNavigatorConsumed = {
    SelectFlowType: undefined;
    SearchProductsByName: undefined;
    ScanProduct: undefined;
    SelectConsumedProducts: { data: Product };
    MarkAsConsumedSuccessFeedback: { data: Product };
};

export type MarkAsConsumedNavigation = CompositeNavigationProp<
    StackNavigationProp<ScanProductsNavigation,'MarkProductAsConsumed'>,
    StackNavigationProp<StackNavigatorConsumed>>
 
const Stack = createStackNavigator<StackNavigatorConsumed>();

function MarkProductAsConsumed() {
    return (
        <Stack.Navigator initialRouteName="SelectFlowType" >
            <Stack.Screen name="SelectFlowType" component={SelectFlowType} />
            <Stack.Screen name="SearchProductsByName" component={SearchProductsByName} />
            <Stack.Screen name="ScanProduct" component={ScanProduct} />
            <Stack.Screen name="SelectConsumedProducts" component={SelectConsumedProducts} />
            <Stack.Screen name="MarkAsConsumedSuccessFeedback" component={MarkAsConsumedSuccessFeedback} />
        </Stack.Navigator>
    );
}

export default MarkProductAsConsumed
