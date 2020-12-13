import React from 'react'
import { Button, Platform, StyleSheet, Text, View, FlatList } from 'react-native'
import { RootStateOrAny, useSelector } from 'react-redux'
import CartItem from '../../components/shop/CartItem'
import { Colors } from '../../constants/Colors'
import ICartItem from '../../models/CartItem'

const CartScreen = () => {
    const cart = useSelector((state: RootStateOrAny) => state.cart)
    const { cartItems, totalAmount } = cart
    const arrCartItems: ICartItem[] = []
    for (const key in cartItems) {
        arrCartItems.push({
            id: key,
            title: cartItems[key].title,
            quantity: cartItems[key].quantity,
            price: cartItems[key].price,
            sum: cartItems[key].sum
        })
    }

    return (
        <View style={styles.screen}>
            <View style={styles.summary}>
                <Text style={styles.summaryText}>Total :
                <Text style={styles.amount}> {totalAmount.toFixed(2)} €</Text>
                </Text>
                <Button
                    onPress={() => { }}
                    color={Colors.secondary}
                    disabled={cartItems.length === 0 || totalAmount <= 0}
                    title='Commander' />
            </View>
            <FlatList
                data={arrCartItems}
                renderItem={({ item }) =>
                    <CartItem
                        quantity={item.quantity}
                        title={item.title}
                        amount={item.sum}
                        onRemove={() => {}}
                    />}
            />
        </View>
    )
}

CartScreen.navigationOptions = (navData: any) => {
    return {
        title: 'Panier',
    }
}

export default CartScreen

const styles = StyleSheet.create({
    screen: {
        margin: 20,
    },
    summary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        paddingHorizontal: 20,
        paddingVertical: 15,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    summaryText: {
        fontFamily: 'openSansBold',
        fontSize: 19
    },
    amount: {
        color: Colors.primary
    },
})
