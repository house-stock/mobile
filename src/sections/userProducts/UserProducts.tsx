
import React, { useState, useEffect, FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import ProductsToExpire from './ProductsToExpire';
import ExpiredProducts from './ExpiredProducts';
import AllProducts from './AllProducts';

export type StackNavigatorUserProducts = {
    Home: undefined
    AllProducts: undefined
    ProductsToExpire: undefined
    ExpiredProducts: undefined
}

const Stack = createStackNavigator<StackNavigatorUserProducts>();

function UserProducts() {
    return (
        <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="AllProducts" component={AllProducts} />
            <Stack.Screen name="ProductsToExpire" component={ProductsToExpire} />
            <Stack.Screen name="ExpiredProducts" component={ExpiredProducts} />
        </Stack.Navigator>
    );
}

export default UserProducts
