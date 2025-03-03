import { registerRootComponent } from 'expo';

import App from './App';
import CartContextProvider from './context/CartContextProvider';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

import { View, Text } from 'react-native'
import React from 'react'

const Main = () => {
  return (
    <CartContextProvider>
        <App />
    </CartContextProvider>
  )
}

registerRootComponent(Main);
