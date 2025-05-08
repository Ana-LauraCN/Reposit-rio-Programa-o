import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import EscudoScreen from '../screens/EscudoScreen'
import JogadoresScreen from '../screens/JogadoresScreen'
import TitulosScreen from '../screens/TitulosScreen'

import { createDrawerNavigator } from '@react-navigation/drawer'


const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>

        <Drawer.Screen name='EscudoScreen' component={EscudoScreen} options={{title: "Início", 
          drawerIcon: ({color, size}) => <Ionicons name='home' color={color} size={size}/>
        }}/>
        <Drawer.Screen name='JogadoresScreen' component={JogadoresScreen} options={{title: "Início", 
          drawerIcon: ({color, size}) => <Ionicons name='home' color={color} size={size}/>
        }}/>
        <Drawer.Screen name='TitulosScreen' component={TitulosScreen}options={{title: "Início", 
          drawerIcon: ({color, size}) => <Ionicons name='home' color={color} size={size}/>
        }}/>
       

    </Drawer.Navigator>
 
  )
}
