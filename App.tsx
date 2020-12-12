import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux'
import { Store, createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension';

import { productListReducer } from './store/reducers/product.reducer'
import ShopNavigator from "./navigation/ShopNavigator";

export default function App() {

  const mainReducer = combineReducers({
    productList: productListReducer
  })

  const store: Store = createStore(mainReducer, composeWithDevTools())

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
