import React from 'react'
import { Button, Platform, StyleSheet, Text, View, FlatList } from 'react-native'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import CartItem from '../../components/shop/CartItem'
import { Colors } from '../../constants/Colors'
import ICartItem from '../../models/CartItem'
import { removeFromCart } from '../../store/actions/cart.actions'
import { addOrder } from '../../store/actions/order.actions'

const CartScreen = () => {
    const dispatch = useDispatch()
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
    arrCartItems.sort((a, b) => (a !== undefined && b !== undefined) && (a.id > b.id) ? 1 : -1)

    return (
        <View style={styles.screen}>
            <View style={styles.summary}>
                <Text style={styles.summaryText}>Total :
                <Text style={styles.amount}> {totalAmount.toFixed(2)} €</Text>
                </Text>
                <Button
                    onPress={dispatch(addOrder(cartItems, totalAmount))}
                    color={Colors.secondary}
                    disabled={arrCartItems.length === 0}
                    title='Commander' />
            </View>
            <FlatList
                data={arrCartItems}
                renderItem={({ item }) =>
                    <CartItem
                        quantity={item.quantity}
                        title={item.title}
                        amount={item.sum}
                        onRemove={() => {
                            dispatch(removeFromCart(item.id))
                        }}
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
