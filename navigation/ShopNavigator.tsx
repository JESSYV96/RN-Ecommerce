import React from 'react'
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from 'react-native'
import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen'
import ProductDetailsScreen from '../screens/shop/ProductDetailsScreen'
import CartScreen from '../screens/shop/CartScreen'
import OrdersScreen from '../screens/shop/OrdersScreen'
import { Colors } from '../constants/Colors'
import { createDrawerNavigator } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : ''
    },
    headerTitleStyle: {
        fontFamily: 'openSansBold',
    },
    headerBackTitleStyle: {
        fontFamily: 'openSans',
    },
    headerTintColor: Platform.OS === "android" ? 'white' : Colors.primary
}

const ProductsNavigation = createStackNavigator({
    ProductOverview: ProductOverviewScreen,
    ProductDetails: ProductDetailsScreen,
    Cart: CartScreen,
}, {
    navigationOptions: {
        drawerIcon: drawerConfig => (
            <Ionicons
                name={Platform.OS === "android" ? 'md-cart' : 'ios-cart'}
                size={24}
                color={drawerConfig.tintColor} />
        )
    },
    defaultNavigationOptions: defaultNavOptions,

})

const OrdersNavigation = createStackNavigator({
    Orders: OrdersScreen
}, {
    navigationOptions: {
        drawerIcon: drawerConfig => (
            <Ionicons
                name={Platform.OS === "android" ? 'md-list' : 'ios-list'}
                size={24}
                color={drawerConfig.tintColor} />
        )
    },
    defaultNavigationOptions: defaultNavOptions,

})

const ShopNavigator = createDrawerNavigator({
    Products: ProductsNavigation,
    Orders: OrdersNavigation
}, {
    contentOptions: {
        activeTintColor: Colors.primary
    }
})


export default createAppContainer(ShopNavigator) 