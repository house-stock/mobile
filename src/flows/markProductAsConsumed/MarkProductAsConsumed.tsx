
import React, { useState, useEffect, FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SelectFlowType from './steps/SelectFlowType';
import SearchProductsByName from './steps/SearchProductsByName';
import SelectConsumedProducts from './steps/SelectConsumedProducts';

const Stack = createStackNavigator();

function AddProductFlow() {
    return (
        <Stack.Navigator initialRouteName="SelectFlowType" >
            <Stack.Screen name="SelectFlowType" component={SelectFlowType} />
            <Stack.Screen name="SearchProductsByName" component={SearchProductsByName} />
            <Stack.Screen name="SelectConsumedProducts" component={SelectConsumedProducts} />
        </Stack.Navigator>
    );
}

export default AddProductFlow
