import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux'
import { Store, createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk"
import * as Font from 'expo-font';

import { productListReducer } from './store/reducers/product.reducer'
import { cartReducer } from './store/reducers/cart.reducer'

import ShopNavigator from "./navigation/ShopNavigator";

export default function App() {

  const [loaded] = Font.useFonts({
    openSans: require('./assets/fonts/OpenSans-Regular.ttf'),
    openSansBold: require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  const mainReducer = combineReducers({
    productList: productListReducer,
    cart: cartReducer
  })

  const store: Store = createStore(mainReducer, applyMiddleware(thunk))


  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
