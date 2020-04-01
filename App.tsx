import React from 'react';
import { StatusBar } from 'react-native';
import AddProductFlow from './src/flows/addProduct/AddProductFlow';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserProducts from './src/sections/userProducts/UserProducts';

const Tab = createBottomTabNavigator();


export default function App() {
  // TODO: add menu ?
  return (
    <>
      <StatusBar hidden />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Productos" component={UserProducts} />
          <Tab.Screen name="Escanear" component={AddProductFlow} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
