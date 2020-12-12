import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from 'react-native'
import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen'
import ProductDetailsScreen from '../screens/shop/ProductDetailsScreen'
import { Colors } from '../constants/Colors'

const ProductsNavigaton = createStackNavigator({
    ProductOverview: ProductOverviewScreen,
    ProductDetails: ProductDetailsScreen
}, {
    defaultNavigationOptions: {
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
})

export default createAppContainer(ProductsNavigaton) 