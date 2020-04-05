
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddProductFlow from '../../flows/addProduct/AddProductFlow';
import MarkProductAsConsumed from '../../flows/markProductAsConsumed/MarkProductAsConsumed';
import Home from './Home';

export type ScanProductsNavigation = {
    Home: undefined;
    AddProductFlow: undefined;
    MarkProductAsConsumed: undefined;
};

const Stack = createStackNavigator<ScanProductsNavigation>();


function ScanProducts() {
    return (
        <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="AddProductFlow" component={AddProductFlow} options={{ headerShown: false }} />
            <Stack.Screen name="MarkProductAsConsumed" component={MarkProductAsConsumed} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default ScanProducts
