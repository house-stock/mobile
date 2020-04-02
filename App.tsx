import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserProducts from './src/sections/userProducts/UserProducts';
import ScanProducts from './src/sections/scanProducts/ScanProducts';

const Tab = createBottomTabNavigator();


export default function App() {
  // TODO: add menu ?
  return (
    <>
      <StatusBar hidden />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Productos" component={UserProducts} />
          <Tab.Screen name="Escanear" component={ScanProducts} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
