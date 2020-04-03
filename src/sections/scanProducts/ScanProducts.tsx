
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddProductFlow from '../../flows/addProduct/AddProductFlow';
import MarkProductAsConsumed from '../../flows/markProductAsConsumed/MarkProductAsConsumed';
import Home from './Home';

const Stack = createStackNavigator();

function ScanProducts() {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{}} >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="AddProductFlow" component={AddProductFlow} />
            <Stack.Screen name="MarkProductAsConsumed" component={MarkProductAsConsumed} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default ScanProducts
