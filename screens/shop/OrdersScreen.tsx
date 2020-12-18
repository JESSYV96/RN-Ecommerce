import React from 'react'
import { StyleSheet, Text, FlatList, Platform } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { RootStateOrAny, useSelector } from 'react-redux'
import OrderItem from '../../components/shop/OrderItem'
import CustomHeaderButton from '../../components/UI/HeaderButton'

const OrdersScreen = () => {
    const orders = useSelector((state: RootStateOrAny) => state.orders.orders)
    return (
        <FlatList
            data={orders}
            renderItem={itemData =>
                <OrderItem
                    totalAmount={itemData.item.totalAmount}
                    date={itemData.item.dateReadable} />}
        />
    )
}

OrdersScreen.navigationOptions = (navData: any) => {
    return {
        title: 'Vos commandes',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title='menu'
                    iconName={Platform.OS === "android" ? 'md-menu' : 'ios-menu'}
                    onPress={() => navData.navigation.toggleDrawer()} />
            </HeaderButtons>)
    }
}

export default OrdersScreen

const styles = StyleSheet.create({

})
