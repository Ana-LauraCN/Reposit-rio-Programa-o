import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { PaperProvider } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'

import HomeScreen from './screens/HomeScreen' // vamos transformar em HomeScreen
import MeusFilmesScreen from './screens/MeusFilmesScreen' // vai ser MeusFilmesScreen
import DescobrirScreen from './screens/DescobrirScreen' // vai ser DescobrirScreen

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: 'pink',
            tabBarInactiveTintColor: 'gray',
            headerStyle: { backgroundColor: 'pink' },
            headerTintColor: '#fff',
            headerTitleAlign: 'center'
          }}
        >
          <Tab.Screen
            name='Home'
            component={HomeScreen}
            options={{
              title: 'Início',
              tabBarIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size} />
            }}
          />

          <Tab.Screen
            name='Meus Filmes'
            component={MeusFilmesScreen}
            options={{
              title: 'Meus Filmes',
              tabBarIcon: ({ color, size }) => <Ionicons name='film' color={color} size={size} />
            }}
          />

          <Tab.Screen
            name='Descobrir'
            component={DescobrirScreen}
            options={{
              title: 'Descobrir',
              tabBarIcon: ({ color, size }) => <Ionicons name='sparkles' color={color} size={size} />
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}
