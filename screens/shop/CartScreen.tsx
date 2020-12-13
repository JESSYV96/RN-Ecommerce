import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { RootStateOrAny, useSelector } from 'react-redux'
import { Colors } from '../../constants/Colors'


const CartScreen = () => {
    const cart = useSelector((state: RootStateOrAny) => state.cart)
    const { cartItems, totalAmount } = cart
    console.log(cartItems);
    return (
        <View style={styles.screen}>
            <View style={styles.summary}>
                <Text style={styles.summaryText}>Total :
                <Text style={styles.amount}> {totalAmount.toFixed(2)} €</Text>
                </Text>
                <Button
                    onPress={() => { }}
                    disabled={cartItems.length === 0 || totalAmount >= 0}
                    title='Commander' />
            </View>
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
