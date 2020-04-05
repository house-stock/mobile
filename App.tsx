import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserProducts from './src/sections/userProducts/UserProducts';
import ScanProducts from './src/sections/scanProducts/ScanProducts';

export type AppNavigation =  {
  TabUserProducts: undefined
  TabScanProducts: undefined
} 
const Tab = createBottomTabNavigator<AppNavigation>();


export default function App() {
  // TODO: add menu ?
  return (
    <>
      <StatusBar hidden />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="TabUserProducts" component={UserProducts} />
          <Tab.Screen name="TabScanProducts" component={ScanProducts} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
