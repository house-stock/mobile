import React, { useState, useEffect } from 'react';
import { StatusBar, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserProducts from './src/sections/userProducts/UserProducts';
import ScanProducts from './src/sections/scanProducts/ScanProducts';
import SessionService from './src/services/session/SessionService';
import Login from './src/sections/login/Login';
import { AuthContext } from './src/context/AuthContext';

export type AppNavigation = {
  TabUserProducts: undefined
  TabScanProducts: undefined
}
const Tab = createBottomTabNavigator<AppNavigation>();


export default function App() {
  // TODO: add menu ?
  const [appIsLoading, setAppIsLoading] = useState<boolean>(true)
  const [userIsLogged, setUserIsLogged] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const isLogged: boolean = await SessionService.userIsLogged()
        setUserIsLogged(isLogged)
      } catch (error) {
        setUserIsLogged(false)
      } finally {
        setAppIsLoading(false)
      }
    }
    fetchData()
  }, [])

  const login = async (loginData) => {
    try {
      await SessionService.saveToken(loginData)
      setUserIsLogged(true)
    } catch (error) {
      console.log("Error saving the token in the session", error)
    }
  }

  const value = {
    userIsLogged,
    login
    // TODO:logout
  }
  if (appIsLoading) {
    return <View>
      <Image source={require('./assets/splash.png')} />
    </View>
  }
  return (
    <AuthContext.Provider value={value}>
      <StatusBar hidden />
      <NavigationContainer>
        {userIsLogged ?
          (
            <Tab.Navigator>
              <Tab.Screen name="TabUserProducts" component={UserProducts} options={{ title: 'Mis productos' }} />
              <Tab.Screen name="TabScanProducts" component={ScanProducts} options={{ title: 'Escanear' }} />
            </Tab.Navigator>
          ) : <Login />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
