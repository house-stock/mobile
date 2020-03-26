import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import AddProductFlow from './src/flows/addProduct/AddProductFlow';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function ProductList() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();


export default function App() {
  // TODO: add menu ?
  return (
    <>
      <StatusBar hidden />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Escanear" component={AddProductFlow} />
          <Tab.Screen name="Productos" component={ProductList} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
