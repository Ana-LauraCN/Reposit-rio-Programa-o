import { createStackNavigator } from '@react-navigation/stack'

import React from 'react'

import Feed from '../Feed'
import Home from '../Home'
import Posts from '../Posts'

const Stack = createStackNavigator()

export default function StackRoutes() {
  return (
   
    <Stack.Navigator >

        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Feed' component={Feed}/>
        <Stack.Screen name='Posts' component={Posts}/>
    </Stack.Navigator>
  )
}

